import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaRocket } from 'react-icons/fa';
import { getActiveSocialLinks } from '../../config';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: t('footer.sections.navigation.title'),
      links: [
        { label: t('footer.sections.navigation.home'), href: '#home' },
        { label: t('footer.sections.navigation.projects'), href: '#projects' },
        { label: t('footer.sections.navigation.about'), href: '#about' },
        { label: t('footer.sections.navigation.blog'), href: '#blog' }
      ]
    },
    {
      title: t('footer.sections.resources.title'),
      links: [
        { label: t('footer.sections.resources.github'), href: 'https://github.com/Mega-Barto' },
        { label: t('footer.sections.resources.documentation'), href: '#docs' },
        { label: t('footer.sections.resources.tutorials'), href: '#tutorials' },
        { label: t('footer.sections.resources.faq'), href: '#faq' }
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
              <span className="logo-text">{t('personal.displayName')}</span>
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
            <div className="footer-bottom-links">
              <a href="#privacy">{t('footer.links.privacy')}</a>
              <span className="separator">•</span>
              <a href="#terms">{t('footer.links.terms')}</a>
              <span className="separator">•</span>
              <a href="#cookies">{t('footer.links.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
