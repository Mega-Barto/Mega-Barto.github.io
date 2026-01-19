import React from 'react';
import { useTranslation } from 'react-i18next';
import './WorkExperienceSection.css';
import { getWorks, type Works } from '../../../contents';
import { CollapsibleSection } from '../common';

const WorkExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  const works: Works[] = getWorks(t);

  return (
    <CollapsibleSection 
      id="work-experience" 
      title={t('header.navigation.workExperience')}
      defaultExpanded={false}
    >
      <div className="work-experience-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-header">
              <h3 className="work-title">
                <a 
                  href={work.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="work-link"
                >
                  {work.label}
                </a>
              </h3>
              {work.actual && (
                <span className="work-current-badge">
                  {t('workExperience.current')}
                </span>
              )}
            </div>
            <div className="work-info">
              <span className="work-time">{work.time}</span>
              {work.duration && (
                <span className="work-duration">
                  {t('workExperience.duration')}: {work.duration}
                </span>
              )}
            </div>
            <p className="work-description">
              {t(`workExperience.descriptions.${work.id}`)}
            </p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default WorkExperienceSection;
