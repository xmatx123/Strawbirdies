import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { finalizeLogin } from '@tidal-music/auth';

const TidalCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                await finalizeLogin();
                console.log('Tidal login successful');
                navigate('/');
            } catch (error) {
                console.error('Tidal login failed', error);
                navigate('/');
            }
        };

        handleCallback();
    }, [navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Finalizing login...</h2>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto"></div>
            </div>
        </div>
    );
};

export default TidalCallback;
