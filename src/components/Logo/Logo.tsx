import React from 'react';
import { useTranslation } from 'react-i18next';
import viteIcon from '/vite.ico';
import './Logo.css';

interface LogoProps {
  /** Personalizar el className del contenedor */
  className?: string;
  /** Si se debe renderizar como un enlace */
  href?: string | null;
  /** Función onClick personalizada */
  onClick?: () => void;
  /** Tamaño del logo (small, medium, large) */
  size?: 'small' | 'medium' | 'large';
  /** Si se debe mostrar el texto junto al icono */
  showText?: boolean;
  /** Si se debe mostrar el icono */
  showIcon?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  href = '/',
  onClick,
  size = 'medium',
  showText = true,
  showIcon = true
}) => {
  const { t } = useTranslation();

  const logoContent = (
    <>
      {showIcon && (
        <div className={`logo-icon logo-icon--${size}`}>
          <img src={viteIcon} alt="Vite Logo" />
        </div>
      )}
      {showText && (
        <span className={`logo-text logo-text--${size}`}>
          {t('personal.displayName')}
        </span>
      )}
    </>
  );

  const logoClasses = `logo logo--${size} ${className}`;

  if (href && href !== null) {
    return (
      <a href={href} className={`${logoClasses} logo-link`} onClick={onClick}>
        {logoContent}
      </a>
    );
  }

  return (
    <div className={logoClasses} onClick={onClick}>
      {logoContent}
    </div>
  );
};

export default Logo;
