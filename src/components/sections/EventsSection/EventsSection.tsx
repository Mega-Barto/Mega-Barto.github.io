import React from 'react';
import { useTranslation } from 'react-i18next';
import './EventsSection.css';
import { getEvents, type Event } from '../../../contents';
import { CollapsibleSection } from '../common';

const EventsSection: React.FC = () => {
  const { t } = useTranslation();

  const events: Event[] = getEvents(t);

  return (
    <CollapsibleSection 
      id="events" 
      title={t('events.name')}
      defaultExpanded={false}
    >
      <p className="section-description">{t('events.description')}</p>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <h3 className="event-title">{event.title}</h3>
              <span className="event-date">{event.date}</span>
            </div>
            <div className="event-location">
              <span className="location-text">{event.location}</span>
            </div>
            <p className="event-description">{event.description}</p>
            {event.source && (
              <div className="event-link">
                <a 
                  href={event.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="event-source-link"
                >
                  {t('events.viewMore', 'Ver más información')}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default EventsSection;
