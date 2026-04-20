import { CERTIFICATE_DEFS } from '../../content/certificates';
import { useClientT } from '../../i18n/useClientT';
import CollapsibleSectionIsland from './CollapsibleSectionIsland';
import '../sections/CertificatesSection/CertificatesSection.css';

interface CertificatesSectionIslandProps {
  variant: 'summary' | 'full';
  viewAllHref?: string;
}

export default function CertificatesSectionIsland({
  variant,
  viewAllHref,
}: CertificatesSectionIslandProps) {
  const ct = useClientT();
  const defs = variant === 'summary' ? CERTIFICATE_DEFS.slice(0, 3) : CERTIFICATE_DEFS;

  return (
    <CollapsibleSectionIsland id="certificates" titleKey="header.navigation.certificates">
      <div className="certificates-grid">
        {defs.map((certificate) => (
          <div key={certificate.id} className="certificate-card">
            <div className="certificate-header">
              <h3 className="certificate-title" data-i18n-key={certificate.titleKey}>
                {ct(certificate.titleKey)}
              </h3>
              <span className="certificate-date" data-i18n-key={certificate.dateObtainedKey}>
                {ct(certificate.dateObtainedKey)}
              </span>
            </div>
            <div className="certificate-academy">
              <span className="academy-label" data-i18n-key="certificates.academyLabel">
                {ct('certificates.academyLabel')}
              </span>{' '}
              <span className="academy-name" data-i18n-key={certificate.academyKey}>
                {ct(certificate.academyKey)}
              </span>
            </div>
            {certificate.verificationCode && (
              <div className="certificate-verification">
                <span className="verification-label" data-i18n-key="certificates.verificationCode">
                  {ct('certificates.verificationCode')}
                </span>{' '}
                <code className="verification-code">{certificate.verificationCode}</code>
              </div>
            )}
          </div>
        ))}
      </div>
      {variant === 'summary' && viewAllHref && (
        <p className="section-view-all">
          <a href={viewAllHref} className="view-all-link" data-i18n-key="common.viewAll">
            {ct('common.viewAll')}
          </a>
        </p>
      )}
    </CollapsibleSectionIsland>
  );
}
