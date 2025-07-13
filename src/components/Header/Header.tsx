import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { FaRocket } from 'react-icons/fa';
import { getActiveSocialLinks } from '../../config';
import LanguageToggle from '../LanguageToggle';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { 
      label: t('header.navigation.autobiography'), 
      href: '#autobiography',
      id: 'autobiography' 
    },
    { 
      label: t('header.navigation.projects'), 
      href: '#projects',
      id: 'storage' 
    },
    { 
      label: t('header.navigation.blog'), 
      href: 'https://megabarto.notion.site',
      id: 'blog',
      external: true 
    },
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
        <div className="logo-section">
          <a href="#home" className="logo-link" onClick={closeMobileMenu}>
            <div className="logo-icon">
              <FaRocket />
            </div>
            <span className="logo-text">{t('personal.displayName')}</span>
          </a>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={item.external ? undefined : closeMobileMenu}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links - Desktop */}
        <div className="social-desktop">
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
                <IconComponent />
              </a>
            );
          })}
        </div>

        {/* Language Toggle */}
        <div className="language-toggle">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? t('header.accessibility.closeMenu') : t('header.accessibility.openMenu')}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Social Links */}
          <div className="mobile-social">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
          
          {/* Mobile Language Toggle */}
          <div className="mobile-language">
            <LanguageToggle showText={true} />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;
