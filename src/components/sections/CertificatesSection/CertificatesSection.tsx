import React from 'react';
import { useTranslation } from 'react-i18next';
import './CertificatesSection.css';
import { getCertificates, type Certificate } from '../../../contents';
import { CollapsibleSection } from '../common';

const CertificatesSection: React.FC = () => {
  const { t } = useTranslation();

  const certificates: Certificate[] = getCertificates(t);

  return (
    <CollapsibleSection 
      id="certificates" 
      title={t('header.navigation.certificates')}
      defaultExpanded={false}
    >
      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate-card">
            <div className="certificate-header">
              <h3 className="certificate-title">{certificate.title}</h3>
              <span className="certificate-date">{certificate.dateObtained}</span>
            </div>
            <div className="certificate-academy">
              <span className="academy-label">{t('certificates.academyLabel')}</span>
              <span className="academy-name">{certificate.academy}</span>
            </div>
            {certificate.verificationCode && (
              <div className="certificate-verification">
                <span className="verification-label">{t('certificates.verificationCode')}</span>
                <code className="verification-code">{certificate.verificationCode}</code>
              </div>
            )}
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default CertificatesSection;
