import React from 'react';
import { useTranslation } from 'react-i18next';
import './AutobiographySection.css';

const AutobiographySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="autobiography" className="autobiography-section">
      <div className="container">
        <h2 className="section-title">{t('header.navigation.autobiography')}</h2>
        <div className="autobiography-content">
          <div className="autobiography-text">
            <p>{t('autobiography.introduction')}</p>
            <p>{t('autobiography.background')}</p>
            <p>{t('autobiography.current')}</p>
          </div>
          <div className="autobiography-image">
            <img 
              src="https://i.imgur.com/kBWOFBL.png" 
              alt={t('personal.displayName')} 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutobiographySection;
