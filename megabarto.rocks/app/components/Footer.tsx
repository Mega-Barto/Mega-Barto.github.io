import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  /**
   * Optional additional CSS classes for the footer
   */
  className?: string;
}

/**
 * Footer component that displays site links, social media, and copyright information
 */
export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full border-t border-sidebar-border bg-sidebar text-sidebar-foreground ${className}`}>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/favicon.ico" 
                alt="Logo" 
                className="h-8 w-8" 
              />
              <span className="text-xl font-bold">MegaBarto</span>
            </Link>
            <p className="text-sidebar-foreground/80 max-w-xs">
              Professional portfolio and personal blog showcasing projects, skills, and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social and Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {/* GitHub */}
              <a 
                href="https://github.com/Mega-Barto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sidebar-foreground hover:text-sidebar-primary transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/mega_barto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sidebar-foreground hover:text-sidebar-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a 
                href="https://twitter.com/mega_barto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sidebar-foreground hover:text-sidebar-primary transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="mailto:personal.jperez@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sidebar-foreground hover:text-sidebar-primary transition-colors"
                aria-label="Email"
              >
                {/* Change asap */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sidebar-border/50 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-sidebar-foreground/70">
            © {currentYear} Bartland Labs. All rights reserved.
          </p>
          <p className="text-sm text-sidebar-foreground/70 mt-2 md:mt-0">
            Designed and built with ♥ by MegaBarto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
