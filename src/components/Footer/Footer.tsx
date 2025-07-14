import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { getActiveSocialLinks } from '../../config';
import { getFooterSections } from '../../contents';
import Logo from '../Logo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const footerSections = getFooterSections(t);

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
              <Logo href={null} size="medium" />
            </div>
            <p className="footer-description">
              {t('personal.description')}
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
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="footer-sections">
            {footerSections.map((section) => (
              <div key={section.title} className="footer-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
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
            <p>
              © {currentYear} {t('personal.companyName')}. {t('footer.copyright')}
            </p>
            <p className="footer-love">
              {t('footer.madeWithLove')} • <a 
                href="https://github.com/Mega-Barto/Mega-Barto.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                {t('footer.sourceCode')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
