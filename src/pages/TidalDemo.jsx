import React, { useState, useEffect } from 'react';
import { initTidalAuth, searchTidal } from '../services/tidal';
import { initializeLogin, credentialsProvider, logout } from '@tidal-music/auth';

const TidalDemo = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Initialize auth on mount
        initTidalAuth();

        // Check if we have a user/session
        const checkSession = async () => {
            try {
                const credentials = await credentialsProvider.getCredentials();
                if (credentials && credentials.accessToken) {
                    // If we really wanted user details, we'd need another API call usually,
                    // but existence of credentials means we are logged in.
                    setUser({ loggedIn: true });
                }
            } catch (e) {
                // Not logged in
            }
        };
        checkSession();
    }, []);

    const handleLogin = async () => {
        try {
            const loginUrl = await initializeLogin({
                redirectUri: import.meta.env.VITE_TIDAL_REDIRECT_URI,
            });

            if (loginUrl) {
                window.location.href = loginUrl;
            }
        } catch (e) {
            console.error("Login initialization failed", e);
            setError("Failed to start login: " + e.message);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const data = await searchTidal(query);
            setResults(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = async () => {
        await logout();
        setUser(null);
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-8 text-cyan-400">Tidal API Integration Demo</h1>

            {!user ? (
                <div className="text-center py-20">
                    <p className="mb-4 text-gray-400">Please authenticate to continue</p>
                    <button
                        onClick={handleLogin}
                        className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-full transition-colors"
                    >
                        Log in with Tidal
                    </button>
                </div>
            ) : (
                <div>
                    <div className="mb-8 flex items-center justify-between">
                        <span className="text-green-400 text-sm">✓ Authenticated</span>
                        <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-white">Logout</button>
                    </div>

                    <form onSubmit={handleSearch} className="mb-8 flex gap-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for an artist or track..."
                            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Search
                        </button>
                    </form>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-8">
                            {error}
                        </div>
                    )}

                    {results && (
                        <div className="space-y-8">
                            {/* Tracks Section */}
                            {results.tracks && (
                                <section>
                                    <h2 className="text-xl font-bold mb-4 text-gray-300">Tracks</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {results.tracks.items.slice(0, 6).map((track) => (
                                            <div key={track.id} className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors">
                                                <div className="font-bold truncate">{track.title}</div>
                                                <div className="text-sm text-gray-400 truncate">{track.artist.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            <div className="text-xs text-gray-600 mt-8">
                                Raw Output:
                                <pre className="mt-2 p-4 bg-black rounded overflow-auto max-h-60">
                                    {JSON.stringify(results, null, 2)}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TidalDemo;
