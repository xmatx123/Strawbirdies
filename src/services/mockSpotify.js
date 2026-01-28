export const MOCK_TRACKS = [
    {
        id: "1",
        name: "Billie Jean",
        artist: "Michael Jackson",
        year: 1982,
        image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
    },
    {
        id: "2",
        name: "Smells Like Teen Spirit",
        artist: "Nirvana",
        year: 1991,
        image: "https://upload.wikimedia.org/wikipedia/en/3/32/Nirvana-Smells_Like_Teen_Spirit.jpg"
    },
    {
        id: "3",
        name: "Hey Ya!",
        artist: "OutKast",
        year: 2003,
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/OutKast_-_Hey_Ya%21_cover.jpg"
    },
    {
        id: "4",
        name: "Bohemian Rhapsody",
        artist: "Queen",
        year: 1975,
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png"
    },
    {
        id: "5",
        name: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        year: 2014,
        image: "https://upload.wikimedia.org/wikipedia/en/a/ad/Mark_Ronson_-_Uptown_Funk_%28feat._Bruno_Mars%29_%28Official_Single_Cover%29.png"
    },
    {
        id: "6",
        name: "Blinding Lights",
        artist: "The Weeknd",
        year: 2019,
        image: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
    },
    {
        id: "7",
        name: "Rolling in the Deep",
        artist: "Adele",
        year: 2010,
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png"
    },
    {
        id: "8",
        name: "I Want to Hold Your Hand",
        artist: "The Beatles",
        year: 1963,
        image: "https://upload.wikimedia.org/wikipedia/en/b/bf/I_want_to_hold_your_hand_single.png"
    },
    {
        id: "9",
        name: "Like a Prayer",
        artist: "Madonna",
        year: 1989,
        image: "https://upload.wikimedia.org/wikipedia/en/2/27/Like_a_prayer_single.jpg"
    },
    {
        id: "10",
        name: "Wannabe",
        artist: "Spice Girls",
        year: 1996,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Spice_Girls_-_Wannabe_cover.png"
    }
];

export const MockSpotifyService = {
    getPlaylistTracks: async () => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        // Shuffle
        return [...MOCK_TRACKS].sort(() => Math.random() - 0.5);
    },

    playTrack: async (trackId) => {
        console.log(`Playing mock track ${trackId}`);
        return true;
    }
};
