import React from 'react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-blue-200 dark:bg-blue-700 text-blue-700 dark:text-blue-200 flex justify-between items-center p-4 shadow-md rounded-b-lg">
      <h1 className="text-2xl font-bold">Switcher App</h1>
      <button 
        onClick={toggleTheme} 
        className="p-2 bg-blue-300 dark:bg-blue-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-300"
      >
        {theme === 'light' ? <Moon className="w-6 h-6 text-yellow-500" /> : <Sun className="w-6 h-6 text-yellow-500" />}
      </button>
    </header>
  );
};

export default Header;

