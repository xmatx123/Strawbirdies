import React, { useMemo, useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Marker Concept (can be expanded later)
const createCustomIcon = (type) => {
    // For now, use default, but we could use divIcon for custom premium markers
    return DefaultIcon;
};

const mapContainerStyle = {
    width: '100%',
    height: '100vh',
    zIndex: 1, // Ensure map acts as background
};

// Default center (San Francisco)
const defaultCenter = [37.7749, -122.4194];

// Correction: I need a component INSIDE LeafletMap to handle the centering.
const RecenterMap = ({ location }) => {
    const map = useMap();
    useEffect(() => {
        if (location) {
            map.flyTo([location.lat, location.lng], 12); // Slightly closer zoom for focus
        }
    }, [location, map]);
    return null;
};

function MapContainer({ markers = [], onMapClick, onMarkerClick, centerLocation }) {

    // Component to handle map clicks
    const MapEvents = () => {
        const map = useMap();
        useMemo(() => {
            map.on('click', (e) => {
                onMapClick({ latLng: { lat: () => e.latlng.lat, lng: () => e.latlng.lng } });
            });
        }, [map]);
        return null;
    };

    return (
        <LeafletMap
            center={defaultCenter}
            zoom={10}
            style={mapContainerStyle}
            zoomControl={false} // Custom zoom control or none for clean look
            attributionControl={false} // Clean look (add manually in footer if needed)
        >
            <RecenterMap location={centerLocation} />
            {/* Dark Matter Tiles (Free) */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />

            <MapEvents />

            <MarkerClusterGroup
                chunkedLoading
            // Custom cluster styles can be added here
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={[marker.location.lat, marker.location.lng]}
                        icon={createCustomIcon(marker.type)}
                        eventHandlers={{
                            click: () => onMarkerClick(marker),
                        }}
                    />
                ))}
            </MarkerClusterGroup>
        </LeafletMap>
    )
}

export default React.memo(MapContainer)
