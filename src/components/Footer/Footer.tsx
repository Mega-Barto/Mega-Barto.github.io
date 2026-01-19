import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { getActiveSocialLinks } from '../../config';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Obtener enlaces sociales activos desde la configuración centralizada
  const socialLinks = getActiveSocialLinks();

  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">
            © {currentYear} {t('personal.companyName')}. {t('footer.copyright')}
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
    </footer>
  );
};

export default Footer;
