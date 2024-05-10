"use client"
import React, { createContext, useState } from 'react';

// Define the type for your context value
type AnimeContextValue = {
    isPlayer: boolean;
    isSound: boolean;
    toggleSound: () => void;
    toggleAnime: () => void;
};

// Create the initial context value
const initialContextValue: AnimeContextValue = {
    isPlayer: false,
    isSound: false,
    toggleSound: () => {},
    toggleAnime: () => {},
};

// Create the context
export const AnimeContext = createContext<AnimeContextValue>(initialContextValue);

// Create the context provider component
export const AnimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isPlayer, setIsPlayer] = useState<boolean>(initialContextValue.isPlayer);

    const [isSound, setIsSound] = useState<boolean>(initialContextValue.isSound);

    // Function to toggle the anime state
    const toggleAnime = () => {
        setIsPlayer(prevState => !prevState);
    };

    const toggleSound = () => {
        setIsSound(prevState => !prevState);
    };
    
    
    // Create the context value object
    const contextValue: AnimeContextValue = {
        isPlayer,
        isSound,
        toggleSound,
        toggleAnime,
    };
    
    return (
        <AnimeContext.Provider value={contextValue}>
            {children}
        </AnimeContext.Provider>
    );
};