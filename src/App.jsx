import React, { useState, useMemo } from 'react';
import MapContainer from './components/Map/MapContainer';
import Filters from './components/UI/Filters';
import SpotCard from './components/UI/SpotCard';
import SpotDetails from './components/UI/SpotDetails';
import AddSpotForm from './components/Forms/AddSpotForm';
import SpotList from './components/UI/SpotList';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './lib/firebase';
// In a real app, we'd sync with Firestore. For MVP without keys, we'll use local state initially.

const MOCK_SPOTS = [
  {
    id: 1,
    name: "Hidden Redwood Grove",
    location: { lat: 37.75, lng: -122.45 },
    rating: 4.8,
    lastVerified: new Date().toISOString(), // Fresh
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800",
    features: { bigRig: false, signal: false, level: true, policeWarning: false }
  },
  {
    id: 2,
    name: "Coastal Pullout",
    location: { lat: 37.8, lng: -122.5 },
    rating: 3.5,
    lastVerified: "2023-01-01", // Old
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800",
    features: { bigRig: true, signal: true, level: false, policeWarning: true }
  }
];

function App() {
  const [spots, setSpots] = useState([]); // Start empty, load from DB
  const [selectedSpot, setSelectedSpot] = useState(null); // Preview Card
  const [detailSpot, setDetailSpot] = useState(null); // Full Detail View
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [isAddingSpot, setIsAddingSpot] = useState(false);
  const [newSpotLocation, setNewSpotLocation] = useState(null);

  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [locationError, setLocationError] = useState(null);

  // Firestore Sync
  React.useEffect(() => {
    // Subscribe to "spots" collection
    const q = query(collection(db, "spots"), orderBy("lastVerified", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const spotsData = [];
      querySnapshot.forEach((doc) => {
        spotsData.push({ id: doc.id, ...doc.data() });
      });
      setSpots(spotsData);
    }, (error) => {
      console.error("Error fetching spots:", error);
      // Fallback to MOCK if DB fails or keys missing (optional, but good for UX)
      if (spots.length === 0) setSpots(MOCK_SPOTS);
    });

    return () => unsubscribe();
  }, []);

  // Geolocation Setup
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const loc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(loc);
          setMapCenter(loc); // Initial center
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError("Could not get your location. Defaulting to demo view.");
        }
      );
    } else {
      setLocationError("Geolocation not supported");
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const filteredSpots = useMemo(() => {
    let result = spots;

    // Filter by Freshness
    if (showVerifiedOnly) {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      result = result.filter(spot => new Date(spot.lastVerified) > oneYearAgo);
    }

    // Filter by Radius (50km) if user location is known
    // AND Sort by distance
    if (userLocation) {
      result = result.map(spot => ({
        ...spot,
        distance: calculateDistance(userLocation.lat, userLocation.lng, spot.location.lat, spot.location.lng)
      }))
        .filter(spot => spot.distance <= 50)
        .sort((a, b) => a.distance - b.distance);
    }

    return result;
  }, [spots, showVerifiedOnly, userLocation]);

  const handleNavigate = (spot) => {
    if (!spot || !spot.location) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${spot.location.lat},${spot.location.lng}`;
    window.open(url, '_blank');
  };

  const handleMapClick = (e) => {
    if (selectedSpot) {
      setSelectedSpot(null); // Deselect on map click
      return;
    }
    // Logic to start adding a spot
    // We'll require user to explicitly clear selection before adding? Or double click?
    // User requirement: "Auto-detect GPS or tap on map"
    // Let's toggle "Adding Mode" or just open form on click if not selecting?
    // Let's assume a "Long Press" or specific button to add is better, but for MVP tap is fine if we have a way to cancel.
    // For now, let's say tap ALWAYS opens "Add Spot" IF we are in "Add Mode" (not implemented yet), 
    // OR we just confirm "Add spot here?" 
    // Simplified: Tap -> Set location, Open Form.
    setNewSpotLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    setIsAddingSpot(true);
  };

  const handleMarkerClick = (spot) => {
    setSelectedSpot(spot);
    setIsAddingSpot(false);
    if (spot.location) {
      setMapCenter(spot.location);
    }
  };

  const handleAddSpot = async (data) => {
    // Legacy support: Ensure 'image' (primary) is set from 'images[0]' if available
    const primaryImage = (data.images && data.images.length > 0)
      ? data.images[0]
      : "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=800";

    const newSpot = {
      ...data,
      rating: 5,
      lastVerified: new Date().toISOString(),
      location: data.location,
      description: data.description,
      image: primaryImage,
      images: data.images || [] // Store array
    };

    // Optimistic UI update (optional, but Firestore is fast enough usually)
    // setSpots([...spots, { id: 'temp-' + Date.now(), ...newSpot }]);

    try {
      await addDoc(collection(db, "spots"), newSpot);
      console.log("Spot added to Firestore!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Could not save to database. Check API Keys.");
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Filters
        showVerifiedOnly={showVerifiedOnly}
        setShowVerifiedOnly={setShowVerifiedOnly}
      />

      <SpotList spots={filteredSpots} onSelectSpot={handleMarkerClick} />

      <MapContainer
        markers={filteredSpots}
        centerLocation={mapCenter}
        onMapClick={handleMapClick}
        onMarkerClick={handleMarkerClick}
      />


      {selectedSpot && !detailSpot && (
        <SpotCard
          spot={selectedSpot}
          onClose={() => setSelectedSpot(null)}
          onNavigate={() => handleNavigate(selectedSpot)}
          onViewDetails={() => setDetailSpot(selectedSpot)}
        />
      )}

      {detailSpot && (
        <SpotDetails
          spot={detailSpot}
          onClose={() => setDetailSpot(null)}
          onNavigate={() => handleNavigate(detailSpot)}
        />
      )}

      {isAddingSpot && newSpotLocation && (
        <AddSpotForm
          location={newSpotLocation}
          onClose={() => { setIsAddingSpot(false); setNewSpotLocation(null); }}
          onSubmit={handleAddSpot}
        />
      )}
    </div>
  );
}

export default App;
