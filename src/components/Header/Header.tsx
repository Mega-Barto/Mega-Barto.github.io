import React, { useState } from 'react';
import './Header.css';
import { FaRocket } from 'react-icons/fa';
import { getActiveSocialLinks, PERSONAL_INFO } from '../../config';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contact' }
  ];

  // Obtener enlaces sociales activos desde la configuración centralizada
  const socialLinks = getActiveSocialLinks();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${className}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <a href="#home" className="logo-link" onClick={closeMobileMenu}>
            <div className="logo-icon">
              <FaRocket />
            </div>
            <span className="logo-text">{PERSONAL_INFO.displayName}</span>
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link" onClick={closeMobileMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="header-social">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                title={social.description}
              >
                <span className="social-icon">
                  <IconComponent />
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navigationItems.map((item) => (
                  <li key={item.label} className="mobile-nav-item">
                    <a href={item.href} className="mobile-nav-link" onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-social">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="mobile-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.description}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
