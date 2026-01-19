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
          <div className="autobiography-layout">
            <div className="text-block text-intro">
              <p>{t('autobiography.introduction')}</p>
            </div>
            <div className="text-block text-background">
              <p>{t('autobiography.background')}</p>
            </div>
            <div className="text-block text-current">
              <p>{t('autobiography.current')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutobiographySection;
