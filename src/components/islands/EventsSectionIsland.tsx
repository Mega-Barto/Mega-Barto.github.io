import { EVENT_DEFS } from '../../content/events';
import { useClientT } from '../../i18n/useClientT';
import CollapsibleSectionIsland from './CollapsibleSectionIsland';
import '../sections/EventsSection/EventsSection.css';

interface EventsSectionIslandProps {
  variant: 'summary' | 'full';
  viewAllHref?: string;
}

export default function EventsSectionIsland({ variant, viewAllHref }: EventsSectionIslandProps) {
  const ct = useClientT();
  const defs = variant === 'summary' ? EVENT_DEFS.slice(0, 3) : EVENT_DEFS;

  return (
    <CollapsibleSectionIsland id="events" titleKey="events.name">
      <p className="section-description" data-i18n-key="events.description">
        {ct('events.description')}
      </p>
      <div className="events-grid">
        {defs.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <h3 className="event-title" data-i18n-key={event.titleKey}>
                {ct(event.titleKey)}
              </h3>
              <span className="event-date" data-i18n-key={event.dateKey}>
                {ct(event.dateKey)}
              </span>
            </div>
            <div className="event-location">
              <span className="location-text" data-i18n-key={event.locationKey}>
                {ct(event.locationKey)}
              </span>
            </div>
            <p className="event-description" data-i18n-key={event.descriptionKey}>
              {ct(event.descriptionKey)}
            </p>
            {event.source && (
              <div className="event-link">
                <a
                  href={event.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-source-link"
                >
                  <span data-i18n-key="events.viewMore">{ct('events.viewMore')}</span>
                </a>
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
