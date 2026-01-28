
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/auth';
import { RoomService } from '../services/rooms';
import { cn } from '../lib/utils';
import { Music, Play, Users, Link as LinkIcon } from 'lucide-react';
import { loginTidal } from '../services/tidal';
import { credentialsProvider } from '@tidal-music/auth';

export default function Home() {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [isJoinMode, setIsJoinMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tidalConnected, setTidalConnected] = useState(false);

    useEffect(() => {
        const checkTidal = async () => {
            try {
                const creds = await credentialsProvider.getCredentials();
                if (creds && creds.accessToken) {
                    setTidalConnected(true);
                }
            } catch (e) {
                // Not connected
            }
        };
        checkTidal();
    }, []);

    const handleCreateRoom = async () => {
        setLoading(true);
        setError(null);
        try {
            const user = await AuthService.signIn();
            const code = await RoomService.createRoom(user);
            navigate(`/lobby/${code}`);
        } catch (err) {
            console.error(err);
            setError("Failed to create room. check console.");
        } finally {
            setLoading(false);
        }
    };

    const handleJoinRoom = async (e) => {
        e.preventDefault();
        if (!roomCode || !playerName) return;

        setLoading(true);
        setError(null);
        try {
            const user = await AuthService.signIn();
            await RoomService.joinRoom(roomCode.toUpperCase(), user, playerName);
            navigate(`/lobby/${roomCode.toUpperCase()}`);
        } catch (err) {
            console.error(err);
            setError(err.message || "Failed to join room.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 text-white">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-gradient-to-tr from-pink-500 to-orange-400 p-4 rounded-full mb-4 shadow-lg shadow-pink-500/20">
                        <Music className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-orange-200">
                        Web-Hitster
                    </h1>
                    <p className="text-white/60 mt-2 text-center">
                        The Timeline Music Game
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                {!tidalConnected && (
                    <div className="mb-8">
                        <button
                            onClick={loginTidal}
                            className="w-full bg-black text-white font-bold py-3 rounded-xl border border-white/20 hover:bg-zinc-900 transition-all flex items-center justify-center gap-3"
                        >
                            <img src="https://tidal.com/favicon.ico" alt="Tidal" className="w-5 h-5" />
                            Connect Tidal Account
                        </button>
                        <p className="text-xs text-white/40 text-center mt-2">Required to play music snippets</p>
                    </div>
                )}

                {tidalConnected && (
                    <div className="flex items-center justify-center gap-2 mb-8 text-green-400 text-sm bg-green-900/20 py-2 rounded-lg border border-green-900/50">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Tidal Connected
                    </div>
                )}

                {!isJoinMode ? (
                    <div className="space-y-4">
                        <button
                            onClick={handleCreateRoom}
                            disabled={loading}
                            className="w-full bg-white text-purple-900 font-bold py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg"
                        >
                            {loading ? 'Creating...' : (
                                <>
                                    <Play className="w-5 h-5 fill-current" />
                                    Start New Game
                                </>
                            )}
                        </button>

                        <button
                            onClick={() => setIsJoinMode(true)}
                            className="w-full bg-white/5 border border-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                        >
                            <Users className="w-5 h-5" />
                            Join Existing Game
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleJoinRoom} className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-1">Room Code</label>
                            <input
                                type="text"
                                placeholder="ABCD"
                                maxLength={4}
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-2xl font-mono text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/20 text-white uppercase"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-white/20 text-white"
                            />
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                type="button"
                                onClick={() => setIsJoinMode(false)}
                                className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={loading || !roomCode || !playerName}
                                className="flex-[2] bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Joining...' : 'Join Game'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
