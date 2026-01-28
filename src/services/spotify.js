
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = window.location.origin + '/callback';
const SCOPES = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state'
];

export const SpotifyService = {
    getAuthUrl: () => {
        const params = new URLSearchParams({
            response_type: 'token',
            client_id: CLIENT_ID,
            scope: SCOPES.join(' '),
            redirect_uri: REDIRECT_URI,
            show_dialog: 'true'
        });
        return `https://accounts.spotify.com/authorize?${params.toString()}`;
    },

    getTokenFromUrl: () => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        return params.get('access_token');
    }
};
