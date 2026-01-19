import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Función para expandir la sección si el hash coincide
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsExpanded(true);
        
        // Hacer scroll a la sección después de un breve delay para la animación
        setTimeout(() => {
          const section = document.querySelector(`#${id}.collapsible-section`);
          if (section) {
            section.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }
    };

    // Verificar al montar el componente
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [id]);

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
