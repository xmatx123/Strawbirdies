import { db } from "./firebase";
import { ref, set, get, update, push, child, onValue, off } from "firebase/database";


// Mock DB helpers using LocalStorage for multi-tab support
const getMockDB = () => {
    try {
        return JSON.parse(localStorage.getItem('web-hitster-rooms') || '{}');
    } catch { return {}; }
};
const setMockDB = (data) => {
    localStorage.setItem('web-hitster-rooms', JSON.stringify(data));
};

export const RoomService = {
    // Create a new room with a random 4-letter code
    createRoom: async (hostUser) => {
        const roomCode = generateRoomCode();

        const roomData = {
            hostId: hostUser.uid,
            status: 'LOBBY', // LOBBY, PLAYING, FINISHED
            createdAt: Date.now(),
            players: {
                [hostUser.uid]: {
                    id: hostUser.uid,
                    name: 'Host',
                    score: 0,
                    isHost: true
                }
            }
        };

        if (db) {
            const roomRef = ref(db, `rooms/${roomCode}`);
            await set(roomRef, roomData);
        } else {
            // Mock Implementation
            const mockData = getMockDB();
            mockData[roomCode] = roomData;
            setMockDB(mockData);
            console.log("Mock Room Created:", roomCode);
        }

        return roomCode;
    },

    // Join an existing room
    joinRoom: async (roomCode, user, playerName) => {
        if (db) {
            const roomRef = ref(db, `rooms/${roomCode}`);
            const snapshot = await get(roomRef);

            if (!snapshot.exists()) {
                throw new Error("Room not found");
            }

            const roomData = snapshot.val();
            // ... (rest of valdiation logic could go here)

            const playerRef = ref(db, `rooms/${roomCode}/players/${user.uid}`);
            await set(playerRef, {
                id: user.uid,
                name: playerName,
                score: 0,
                isHost: false
            });
            return roomData;
        } else {
            // Mock Implementation
            const mockData = getMockDB();
            const room = mockData[roomCode];
            if (!room) throw new Error("Room not found (Mock)");

            room.players[user.uid] = {
                id: user.uid,
                name: playerName,
                score: 0,
                isHost: false
            };
            setMockDB(mockData);
            return room;
        }
    },

    // Listen to room updates
    subscribeToRoom: (roomCode, callback) => {
        if (db) {
            const roomRef = ref(db, `rooms/${roomCode}`);
            const listener = onValue(roomRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    callback(data);
                }
            });
            return () => off(roomRef, 'value', listener);
        } else {
            // Mock Implementation: Polling LocalStorage
            const interval = setInterval(() => {
                const mockData = getMockDB();
                const room = mockData[roomCode];
                if (room) callback(room);
            }, 500);

            // Initial call
            const initialData = getMockDB()[roomCode];
            if (initialData) callback(initialData);

            return () => clearInterval(interval);
        }
    },

    // Start the game (Host only)
    startGame: async (roomCode) => {
        if (db) {
            const roomRef = ref(db, `rooms/${roomCode}`);
            await update(roomRef, { status: 'PLAYING' });
        } else {
            // Mock Implementation
            const mockData = getMockDB();
            if (mockData[roomCode]) {
                mockData[roomCode].status = 'PLAYING';
                setMockDB(mockData);
            }
        }
    }
};

function generateRoomCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
