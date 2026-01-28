import { init, credentialsProvider } from '@tidal-music/auth';

/**
 * Initialize Tidal Auth
 */
export const initTidalAuth = async () => {
    try {
        await init({
            clientId: import.meta.env.VITE_TIDAL_CLIENT_ID,
            credentialsStorageKey: 'tidal_credentials', // Optional but good practice
        });
        console.log('Tidal Auth initialized');
    } catch (e) {
        console.error('Failed to initialize Tidal Auth', e);
    }
};

export const loginTidal = async () => {
    const redirectUri = import.meta.env.VITE_TIDAL_REDIRECT_URI;
    const { initializeLogin } = await import('@tidal-music/auth');

    // initializeLogin returns the URL we need to visit
    const loginUrl = await initializeLogin({
        redirectUri: redirectUri
    });

    // Manually navigate
    window.location.href = loginUrl;
};

/**
 * Get HTTP Headers for Tidal API requests.
 * Automatically adds the Bearer token.
 */
export const getTidalHeaders = async () => {
    try {
        const credentials = await credentialsProvider.getCredentials();
        if (!credentials || !credentials.accessToken) {
            throw new Error('No access token available');
        }
        return {
            'Authorization': `Bearer ${credentials.accessToken}`,
            'Content-Type': 'application/vnd.tidal.v1+json',
        };
    } catch (e) {
        console.error('Error getting Tidal access token', e);
        throw e;
    }
};

export const searchTidal = async (query, types = ['TRACKS']) => {
    const headers = await getTidalHeaders();
    const url = new URL('https://openapi.tidal.com/search');
    url.searchParams.append('query', query);
    url.searchParams.append('type', types.join(','));
    url.searchParams.append('limit', 10);
    // Country code might be needed or inferred

    const response = await fetch(url.toString(), {
        method: 'GET',
        headers
    });

    if (!response.ok) {
        throw new Error(`Tidal Search failed: ${response.statusText}`);
    }

    return await response.json();
}
