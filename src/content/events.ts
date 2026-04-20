import type { EventDef } from './types';

export const EVENT_DEFS: EventDef[] = [
  {
    id: 'flisol-1',
    titleKey: 'events.flisol-1.title',
    dateKey: 'events.flisol-1.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.flisol-1.description',
    source: 'https://flisol.info/FLISOL2023/Colombia/Pereira',
    sortDate: '2023-04-27',
  },
  {
    id: 'flisol-2',
    titleKey: 'events.flisol-2.title',
    dateKey: 'events.flisol-2.date',
    location: 'Pereira - Ibague - Bogotá, Colombia',
    descriptionKey: 'events.flisol-2.description',
    source: 'https://flisol.info/FLISOL2024/Colombia',
    sortDate: '2024-05-16',
  },
  {
    id: 'flisol-3',
    titleKey: 'events.flisol-3.title',
    dateKey: 'events.flisol-3.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.flisol-3.description',
    source: 'https://flisolpereira.vercel.app/',
    sortDate: '2025-05-08',
  },
  {
    id: 'sfd-1',
    titleKey: 'events.sfd-1.title',
    dateKey: 'events.sfd-1.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.sfd-1.description',
    source: 'https://cidt.utp.edu.co/noticias-y-eventos/preparate-para-el-software-freedom-day/',
    sortDate: '2023-09-07',
  },
  {
    id: 'sfd-2',
    titleKey: 'events.sfd-2.title',
    dateKey: 'events.sfd-2.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.sfd-2.description',
    source: 'https://backboneutp.com/events/software-freedom-day-2024',
    sortDate: '2024-10-10',
  },
  {
    id: 'sfd-3',
    titleKey: 'events.sfd-3.title',
    dateKey: 'events.sfd-3.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.sfd-3.description',
    source: 'https://backboneutp.com/events/software-freedom-day-2025',
    sortDate: '2025-10-10',
  },
  {
    id: 'qaconf-1',
    titleKey: 'events.qaconf-1.title',
    dateKey: 'events.qaconf-1.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.qaconf-1.description',
    source: 'https://www.qaconf.co/qaconfpereira',
    sortDate: '2024-09-05',
  },
  {
    id: 'qaconf-2',
    titleKey: 'events.qaconf-2.title',
    dateKey: 'events.qaconf-2.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.qaconf-2.description',
    source: 'https://www.qaconf.co',
    sortDate: '2025-09-11',
  },
  {
    id: 'oth',
    titleKey: 'events.oth.title',
    dateKey: 'events.oth.date',
    location: 'Virtual + Pereira, Colombia',
    descriptionKey: 'events.oth.description',
    source: 'https://opentechhackathon.com/',
    sortDate: '2025-10-06',
  },
  {
    id: 'tribu-hackathon',
    titleKey: 'events.tribu-hackathon.title',
    dateKey: 'events.tribu-hackathon.date',
    location: 'Cartago, Colombia',
    descriptionKey: 'events.tribu-hackathon.description',
    source: 'https://hackathon.thetribu.dev/',
    sortDate: '2026-04-17',
  },
  {
    id: 'pertt',
    titleKey: 'events.pertt.title',
    dateKey: 'events.pertt.date',
    location: 'Pereira, Colombia',
    descriptionKey: 'events.pertt.description',
    source: 'https://www.pereiratechtalks.com/',
    sortDate: '2024-01-01',
    ongoing: true,
  },
];

/**
 * Orden para la landing: primero los "desde/since" (ongoing) y luego por fecha
 * descendente (los más cercanos a hoy primero).
 */
export function sortEventsByRecency(events: EventDef[]): EventDef[] {
  return [...events].sort((a, b) => {
    const aOn = a.ongoing ? 1 : 0;
    const bOn = b.ongoing ? 1 : 0;
    if (aOn !== bOn) return bOn - aOn;
    return (b.sortDate ?? '').localeCompare(a.sortDate ?? '');
  });
}
