import { Lightbulb, LightbulbOff } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "w-full h-full flex items-center justify-center transition-colors duration-300",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-xl"
            )}
        >
            {isDarkMode ? (
                <Lightbulb className='h-5 w-5 text-primary-foreground' />
            ) : (
                <LightbulbOff className='h-5 w-5 text-foreground' />
            )}
        </button>
    );
};