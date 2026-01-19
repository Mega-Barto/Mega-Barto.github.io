import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas } from 'react-icons/fa';
import { changeLanguage, getCurrentLanguage, type Language } from '../../i18n';
import './LanguageToggle.css';

interface LanguageToggleProps {
  className?: string;
  showText?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '', 
  showText = true 
}) => {
  const { t } = useTranslation();
  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = () => {
    const newLanguage: Language = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(newLanguage);
  };

  const getLanguageText = () => {
    return currentLanguage === 'es' ? 'ES' : 'EN';
  };

  const getLanguageName = () => {
    return currentLanguage === 'es' 
      ? t('languages.english')
      : t('languages.spanish');
  };

  return (
    <button
      className={`language-toggle ${className}`}
      onClick={handleLanguageChange}
      title={t('header.accessibility.toggleLanguage')}
      aria-label={`${t('header.accessibility.toggleLanguage')} - ${getLanguageName()}`}
    >
      <span className="language-icon">
        <FaGlobeAmericas />
      </span>
      {showText && (
        <span className="language-text">
          {getLanguageText()}
        </span>
      )}
    </button>
  );
};

export default LanguageToggle;
