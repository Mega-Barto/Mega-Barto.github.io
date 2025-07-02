import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  /**
   * Optional additional CSS classes for the header
   */
  className?: string;
}

/**
 * Header component for main navigation
 * Displays the site logo, navigation menu and theme toggle
 */
export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user prefers dark mode or has previously selected it
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Apply dark mode to document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference to localStorage
    try {
      localStorage.setItem('darkMode', newDarkMode ? 'true' : 'false');
    } catch (error) {
      console.error('Failed to save theme preference', error);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-sidebar-border bg-sidebar text-sidebar-foreground ${className}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/favicon.ico" 
              alt="Logo" 
              className="h-8 w-8" 
            />
            <span className="text-xl font-bold">MegaBarto</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Theme toggle and mobile menu button */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full p-2 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-sidebar border-t border-sidebar-border">
          <div className="container mx-auto py-4 px-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
