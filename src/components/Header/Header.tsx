import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { getActiveSocialLinks } from '../../config';
import { getNavigationItems } from '../../contents';
import LanguageToggle from '../LanguageToggle';
import Logo from '../Logo';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = getNavigationItems(t);
  
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
          <Logo onClick={closeMobileMenu} />
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={item.isExternal ? undefined : closeMobileMenu}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
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

        {/* Header Right - Language Toggle & Mobile Menu */}
        <div className="header-right">
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
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
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
