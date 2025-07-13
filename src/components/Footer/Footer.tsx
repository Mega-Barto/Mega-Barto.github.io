import React from 'react';
import './Footer.css';
import { FaRocket } from 'react-icons/fa';
import { getActiveSocialLinks, PERSONAL_INFO } from '../../config';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '#home' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Sobre mí', href: '#about' },
        { label: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { label: 'GitHub', href: 'https://github.com/Mega-Barto' },
        { label: 'Documentación', href: '#docs' },
        { label: 'Tutoriales', href: '#tutorials' },
        { label: 'FAQ', href: '#faq' }
      ]
    }
  ];

  // Obtener enlaces sociales activos desde la configuración centralizada
  const socialLinks = getActiveSocialLinks();

  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <FaRocket />
              </div>
              <span className="logo-text">{PERSONAL_INFO.displayName}</span>
            </div>
            <p className="footer-description">
              {PERSONAL_INFO.description}
            </p>
            <div className="footer-social">
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
                    aria-label={social.description}
                  >
                    <span className="social-icon">
                      <IconComponent />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="footer-sections">
            {footerSections.map((section) => (
              <div key={section.title} className="footer-section">
                <h3 className="section-title">{section.title}</h3>
                <ul className="section-links">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="section-link"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {PERSONAL_INFO.companyName}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
