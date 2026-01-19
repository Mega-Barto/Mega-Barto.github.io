import React, { useState } from 'react';
import './CollapsibleSection.css';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  id,
  title,
  children,
  defaultExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
          <h2 className="section-title">{title}</h2>
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
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div className={`collapsible-content ${isExpanded ? 'expanded' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSection;
