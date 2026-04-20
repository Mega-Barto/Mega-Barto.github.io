import { WORK_DEFS } from '../../content/work-experiences';
import { useClientT } from '../../i18n/useClientT';
import CollapsibleSectionIsland from './CollapsibleSectionIsland';
import '../sections/WorkExperienceSection/WorkExperienceSection.css';

interface WorkExperienceSectionIslandProps {
  variant: 'summary' | 'full';
  viewAllHref?: string;
}

export default function WorkExperienceSectionIsland({
  variant,
  viewAllHref,
}: WorkExperienceSectionIslandProps) {
  const ct = useClientT();
  const defs = variant === 'summary' ? WORK_DEFS.slice(0, 2) : WORK_DEFS;

  return (
    <CollapsibleSectionIsland id="work-experience" titleKey="header.navigation.workExperience">
      <div className="work-experience-grid">
        {defs.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-header">
              <h3 className="work-title">
                <a href={work.href} target="_blank" rel="noopener noreferrer" className="work-link">
                  <span data-i18n-key={work.labelKey}>{ct(work.labelKey)}</span>
                </a>
              </h3>
              {work.actual && (
                <span className="work-current-badge" data-i18n-key="workExperience.current">
                  {ct('workExperience.current')}
                </span>
              )}
            </div>
            <div className="work-info">
              <span className="work-time" data-i18n-key={work.timeKey}>
                {ct(work.timeKey)}
              </span>
              {work.durationKey && (
                <span className="work-duration">
                  <span data-i18n-key="workExperience.duration">
                    {ct('workExperience.duration')}
                  </span>
                  {': '}
                  <span data-i18n-key={work.durationKey}>{ct(work.durationKey)}</span>
                </span>
              )}
            </div>
            <p
              className="work-description"
              data-i18n-key={`workExperience.descriptions.${work.id}`}
            >
              {ct(`workExperience.descriptions.${work.id}`)}
            </p>
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
