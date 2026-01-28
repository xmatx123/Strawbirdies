
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RoomService } from '../services/rooms';
import { AuthService } from '../services/auth';
import { Users, Copy, Play } from 'lucide-react';

export default function Lobby() {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (!user) {
            navigate('/'); // Redirect if not logged in
            return;
        }
        setCurrentUser(user);

        // Subscribe to room updates
        const unsubscribe = RoomService.subscribeToRoom(roomId, (data) => {
            setRoom(data);
            setLoading(false);

            // Navigate to game if started
            if (data.status === 'PLAYING') {
                navigate(`/game/${roomId}`);
            }
        });

        return () => unsubscribe();
    }, [roomId, navigate]);

    const handleStartGame = async () => {
        try {
            await RoomService.startGame(roomId);
        } catch (error) {
            console.error("Failed to start game:", error);
        }
    };

    const copyCode = () => {
        navigator.clipboard.writeText(roomId);
        // Could add toast here
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
        );
    }

    if (!room) {
        return <div className="text-white text-center pt-20">Room not found</div>;
    }

    const players = Object.values(room.players || {});
    const isHost = room.hostId === currentUser?.uid;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 font-sans text-white">
            <div className="max-w-2xl mx-auto pt-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-white/60 uppercase tracking-widest text-sm mb-2">Room Code</p>
                    <div
                        onClick={copyCode}
                        className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-8 py-4 cursor-pointer hover:bg-white/20 transition-colors"
                    >
                        <span className="text-6xl font-mono font-bold tracking-wider">{roomId}</span>
                        <Copy className="w-6 h-6 text-white/50" />
                    </div>
                    <p className="text-white/40 text-xs mt-2">Click to copy code</p>
                </div>

                {/* Players List */}
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <Users className="w-6 h-6 text-pink-400" />
                            Players ({players.length})
                        </h2>
                        {isHost && (
                            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs font-bold rounded-full uppercase tracking-wider">
                                You are Host
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {players.map((player) => (
                            <div
                                key={player.id}
                                className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5"
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                  ${player.isHost ? 'bg-gradient-to-tr from-pink-500 to-orange-400' : 'bg-slate-700'}
                `}>
                                    {player.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div className="font-bold">{player.name}</div>
                                    {player.isHost && <div className="text-xs text-white/50">Host</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                {isHost ? (
                    <button
                        onClick={handleStartGame}
                        className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-5 rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.01] shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 text-xl"
                    >
                        <Play className="fill-current w-6 h-6" />
                        Start Game
                    </button>
                ) : (
                    <div className="text-center text-white/50 animate-pulse">
                        Waiting for host to start...
                    </div>
                )}

            </div>
        </div>
    );
}
