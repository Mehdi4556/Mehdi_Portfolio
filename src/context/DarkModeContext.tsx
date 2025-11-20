"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<'to-dark' | 'to-light'>('to-dark');

    useEffect(() => {
        const storedPreference = localStorage.getItem("theme");
        const prefersDarkMode = storedPreference === "dark";

        setIsDarkMode(prefersDarkMode);

        if (prefersDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
        document.documentElement.style.overflowY = 'auto';
    }, []);

    const toggleDarkMode = () => {
        // Set animation direction based on current mode
        setAnimationDirection(isDarkMode ? 'to-light' : 'to-dark');
        setIsAnimating(true);
        
        // Add transition class to body
        document.body.classList.add('theme-transitioning');
        
        // Change theme mid-animation
        setTimeout(() => {
            setIsDarkMode((prev) => {
                const newValue = !prev;
                localStorage.setItem("theme", newValue ? "dark" : "light");
                document.documentElement.classList.toggle("dark", newValue);
                return newValue;
            });
        }, 350);

        // Remove animation overlay and transition class
        setTimeout(() => {
            setIsAnimating(false);
            document.body.classList.remove('theme-transitioning');
        }, 800);
    };

    if (isDarkMode === null) {
        return null;
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
            {isAnimating && (
                <div 
                    className={`theme-transition-overlay ${animationDirection}`}
                />
            )}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
