import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useClientT } from '../../i18n/useClientT';
import '../sections/common/CollapsibleSection.css';

interface CollapsibleSectionIslandProps {
  id: string;
  titleKey: string;
  defaultExpanded?: boolean;
  children: ReactNode;
}

export default function CollapsibleSectionIsland({
  id,
  titleKey,
  defaultExpanded = false,
  children,
}: CollapsibleSectionIslandProps) {
  const ct = useClientT();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const title = ct(titleKey);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsExpanded(true);
        setTimeout(() => {
          const section = document.querySelector(`#${id}.collapsible-section`);
          section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [id]);

  const toggleExpanded = () => setIsExpanded((v) => !v);

  return (
    <section id={id} className="collapsible-section">
      <div className="container">
        <div
          className="section-header-wrapper"
          onClick={toggleExpanded}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleExpanded();
            }
          }}
          aria-expanded={isExpanded}
          aria-label={`${title} - ${isExpanded ? 'Colapsar sección' : 'Expandir sección'}`}
        >
          <h2 className="section-title" data-i18n-key={titleKey}>
            {title}
          </h2>
          <div className={`collapse-button ${isExpanded ? 'expanded' : ''}`}>
            <svg
              className="collapse-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <title>Toggle</title>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div className={`collapsible-content ${isExpanded ? 'expanded' : ''}`}>{children}</div>
      </div>
    </section>
  );
}
