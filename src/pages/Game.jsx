import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MockSpotifyService } from '../services/mockSpotify';
import { Trophy, Home, ArrowRight, CheckCircle, XCircle, Play, Pause } from 'lucide-react';
import { searchTidal } from '../services/tidal';

const Game = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();

    // Game State
    const [deck, setDeck] = useState([]); // Remaining cards
    const [timeline, setTimeline] = useState([]); // Placed cards
    const [currentCard, setCurrentCard] = useState(null); // Card to place
    const [gameState, setGameState] = useState('loading'); // loading, playing, feedback, gameEnd
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null); // { type: 'correct'|'wrong', correctIndex }

    // Initial load
    useEffect(() => {
        const loadGame = async () => {
            const playlist = await MockSpotifyService.getPlaylistTracks();
            // Start with lots of tracks for the deck
            const shuffled = [...playlist].sort(() => Math.random() - 0.5);

            // First card goes to timeline, next one is current
            const firstCard = shuffled.pop();
            const nextCard = shuffled.pop();

            setTimeline([firstCard]);
            setCurrentCard(nextCard);
            setDeck(shuffled);
            setGameState('playing');
        };
        loadGame();
    }, []);


    // Tidal Playback
    const handlePlaySong = async (card) => {
        try {
            // Search Tidal for this track
            const query = `${card.name} ${card.artist}`;
            console.log("Searching Tidal for:", query);

            const results = await searchTidal(query);
            const track = results.items?.[0] || results.tracks?.[0]; // Adjust based on actual API response structure

            if (track && track.url) {
                // Determine if we can open in new tab or use a player
                // For now, simple open in new tab as fallback
                window.open(track.url, '_blank');
            } else {
                console.warn("No Tidal track found or no URL");
                alert("Could not find this track on Tidal automatically.");
            }
        } catch (e) {
            console.error("Playback error:", e);
            alert("Playback failed. Please ensure you are logged into Tidal if required.");
        }
    };

    const handleSlotClick = (index) => {
        if (gameState !== 'playing') return;

        // Validation Logic
        const prevCard = index > 0 ? timeline[index - 1] : null;
        const nextCard = index < timeline.length ? timeline[index] : null;

        const minYear = prevCard ? prevCard.year : -Infinity;
        const maxYear = nextCard ? nextCard.year : Infinity;

        const isCorrect = currentCard.year >= minYear && currentCard.year <= maxYear;

        if (isCorrect) {
            setScore(prev => prev + 1);
            setFeedback({ type: 'correct', index });

            // Add to timeline
            const newTimeline = [...timeline];
            newTimeline.splice(index, 0, currentCard);

            setTimeout(() => {
                setTimeline(newTimeline);
                setFeedback(null);
                advanceTurn();
            }, 1000);
        } else {
            // Find where it SHOULD have gone
            let correctIndex = 0;
            for (let i = 0; i <= timeline.length; i++) {
                const prev = i > 0 ? timeline[i - 1].year : -Infinity;
                const next = i < timeline.length ? timeline[i].year : Infinity;
                if (currentCard.year >= prev && currentCard.year <= next) {
                    correctIndex = i;
                    break;
                }
            }

            setFeedback({ type: 'wrong', correctIndex });
            setGameState('gameEnd'); // End game on mistake (or we could use lives)
        }
    };

    const advanceTurn = () => {
        if (deck.length === 0) {
            setGameState('gameEnd');
            return;
        }
        const next = deck.pop();
        setDeck([...deck]);
        setCurrentCard(next);
        setGameState('playing');
    };

    if (gameState === 'loading') {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;
    }

    if (gameState === 'gameEnd') {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white p-4">
                <div className="bg-slate-900 p-8 rounded-2xl max-w-md w-full text-center border border-slate-800">
                    <Trophy className={`w-16 h-16 mx-auto mb-6 ${score > 5 ? 'text-yellow-500' : 'text-slate-500'}`} />
                    <h1 className="text-3xl font-bold mb-2">Game Over!</h1>
                    <p className="text-slate-400 mb-8">
                        {feedback?.type === 'wrong' ? "Wrong placement!" : "You cleared the deck!"}
                    </p>

                    {feedback?.type === 'wrong' && currentCard && (
                        <div className="mb-6 bg-red-500/10 border border-red-500/50 p-4 rounded-xl">
                            <p className="text-sm text-red-200 mb-2">The song was from</p>
                            <p className="text-2xl font-bold text-white">{currentCard.year}</p>
                            <p className="text-sm opacity-75">{currentCard.name} - {currentCard.artist}</p>
                        </div>
                    )}

                    <div className="bg-slate-800 rounded-xl p-6 mb-8">
                        <span className="text-slate-400 text-sm uppercase tracking-wider">Top Score</span>
                        <div className="text-5xl font-bold text-purple-400 mt-2">{score}</div>
                    </div>

                    <button onClick={() => window.location.reload()} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl mb-4">
                        Play Again
                    </button>
                    <button onClick={() => navigate('/')} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2">
                        <Home className="w-5 h-5" /> Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 flex flex-col items-center overflow-x-hidden">
            {/* Header */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-8 pt-4">
                <div className="text-purple-400 font-bold text-xl">Score: {score}</div>
                <div className="text-slate-400 text-sm">Deck: {deck.length}</div>
            </div>

            {/* Current Draft Card (Anonymous) */}
            <div className={`mb-12 transition-all duration-500 ${feedback ? 'opacity-0 translate-y-10' : 'opacity-100'}`}>
                <div className="bg-slate-900 border-2 border-purple-500 p-8 rounded-xl w-64 shadow-2xl shadow-purple-900/20 text-center flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">

                    {/* Background Pattern/Gradient to keep it looking cool but anonymous */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 -z-10" />

                    {/* Vinyl/Music Icon */}
                    <div className="w-32 h-32 bg-black rounded-full shadow-xl flex items-center justify-center animate-spin-slow mb-6 border-4 border-slate-800">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-full" />
                        </div>
                    </div>

                    <h2 className="font-bold text-xl mb-4 text-purple-200">Mystery Track</h2>

                    <button
                        onClick={() => handlePlaySong(currentCard)}
                        className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 transform transition-all hover:scale-105 shadow-lg shadow-green-500/20"
                    >
                        <Play className="fill-current w-5 h-5" /> Play
                    </button>

                    <p className="text-xs text-slate-500 mt-6">Listen to guess the year!</p>
                </div>
            </div>

            {/* Timeline Area - Horizontal Scroll */}
            <div className="w-full max-w-6xl overflow-x-auto pb-12 flex items-center justify-center min-h-[300px] px-8">
                <div className="flex items-center gap-2">

                    {/* Render Slots and Cards Interleaved */}
                    {timeline.map((card, index) => (
                        <React.Fragment key={card.id}>
                            {/* Slot Before */}
                            <Slot
                                index={index}
                                onClick={() => handleSlotClick(index)}
                                isActive={!feedback}
                                isCurrentFeedback={feedback?.index === index || feedback?.correctIndex === index}
                                feedbackType={feedback?.index === index ? feedback.type : (feedback?.correctIndex === index ? 'hint' : null)}
                            />

                            {/* Timeline Card */}
                            <div className="relative group">
                                <div className="bg-slate-800 p-3 rounded-lg w-40 text-center border border-slate-700 transition-all hover:-translate-y-2">
                                    <img src={card.image} alt={card.name} className="w-full h-32 object-cover rounded-md mb-2 opacity-75 group-hover:opacity-100" />
                                    <h3 className="font-bold text-xs truncate">{card.name}</h3>
                                    <p className="text-slate-400 text-[10px] truncate mb-1">{card.artist}</p>
                                    <div className="font-bold text-xl text-yellow-400">{card.year}</div>
                                </div>
                                {/* Connector Line visual */}
                                <div className="absolute top-1/2 -right-4 w-4 h-[2px] bg-slate-700 -z-10" />
                            </div>
                        </React.Fragment>
                    ))}

                    {/* Final Slot */}
                    <Slot
                        index={timeline.length}
                        onClick={() => handleSlotClick(timeline.length)}
                        isActive={!feedback}
                        isCurrentFeedback={feedback?.index === timeline.length || feedback?.correctIndex === timeline.length}
                        feedbackType={feedback?.index === timeline.length ? feedback.type : (feedback?.correctIndex === timeline.length ? 'hint' : null)}
                    />

                </div>
            </div>

            <div className="text-center text-slate-500 text-sm mt-auto pb-4">
                Scroll to view full timeline • Click + to place the card
            </div>
        </div>
    );
};

// Subcomponent for the clickable slots
const Slot = ({ index, onClick, isActive, isCurrentFeedback, feedbackType }) => {
    let baseClasses = "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mx-2 ";

    if (isCurrentFeedback) {
        if (feedbackType === 'correct') return (
            <div className={baseClasses + "bg-green-500 scale-125 shadow-lg shadow-green-500/50"}>
                <CheckCircle className="text-white w-6 h-6" />
            </div>
        );
        if (feedbackType === 'wrong') return (
            <div className={baseClasses + "bg-red-500 scale-125 shadow-lg shadow-red-500/50"}>
                <XCircle className="text-white w-6 h-6" />
            </div>
        );
        if (feedbackType === 'hint') return (
            <div className={baseClasses + "bg-yellow-500/20 border-2 border-yellow-500 animate-pulse"}>
                <div className="text-yellow-500 font-bold text-xs text-center">Here</div>
            </div>
        );
    }

    if (!isActive) return <div className="w-4 mx-1" />; // Placeholder while animating

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} bg-slate-800/50 hover:bg-purple-600 hover:scale-110 border-2 border-dashed border-slate-600 hover:border-purple-400 group`}
        >
            <span className="text-slate-500 group-hover:text-white font-bold text-xl">+</span>
        </button>
    );
};

export default Game;
