import type { EventDef } from './types';

export const EVENT_DEFS: EventDef[] = [
  {
    id: 'flisol-1',
    titleKey: 'events.flisol-1.title',
    dateKey: 'events.flisol-1.date',
    locationKey: 'events.flisol-1.location',
    descriptionKey: 'events.flisol-1.description',
    source: 'https://flisol.info/FLISOL2023/Colombia/Pereira',
    sortDate: '2023-04-27',
  },
  {
    id: 'flisol-2',
    titleKey: 'events.flisol-2.title',
    dateKey: 'events.flisol-2.date',
    locationKey: 'events.flisol-2.location',
    descriptionKey: 'events.flisol-2.description',
    source: 'https://flisol.info/FLISOL2024/Colombia',
    sortDate: '2024-05-16',
  },
  {
    id: 'flisol-3',
    titleKey: 'events.flisol-3.title',
    dateKey: 'events.flisol-3.date',
    locationKey: 'events.flisol-3.location',
    descriptionKey: 'events.flisol-3.description',
    source: 'https://flisolpereira.vercel.app/',
    sortDate: '2025-05-08',
  },
  {
    id: 'sfd-1',
    titleKey: 'events.sfd-1.title',
    dateKey: 'events.sfd-1.date',
    locationKey: 'events.sfd-1.location',
    descriptionKey: 'events.sfd-1.description',
    source: 'https://cidt.utp.edu.co/noticias-y-eventos/preparate-para-el-software-freedom-day/',
    sortDate: '2023-09-07',
  },
  {
    id: 'sfd-2',
    titleKey: 'events.sfd-2.title',
    dateKey: 'events.sfd-2.date',
    locationKey: 'events.sfd-2.location',
    descriptionKey: 'events.sfd-2.description',
    source: 'https://backboneutp.com/events/software-freedom-day-2024',
    sortDate: '2024-10-10',
  },
  {
    id: 'sfd-3',
    titleKey: 'events.sfd-3.title',
    dateKey: 'events.sfd-3.date',
    locationKey: 'events.sfd-3.location',
    descriptionKey: 'events.sfd-3.description',
    source: 'https://backboneutp.com/events/software-freedom-day-2025',
    sortDate: '2025-10-10',
  },
  {
    id: 'qaconf-1',
    titleKey: 'events.qaconf-1.title',
    dateKey: 'events.qaconf-1.date',
    locationKey: 'events.qaconf-1.location',
    descriptionKey: 'events.qaconf-1.description',
    source: 'https://www.qaconf.co/qaconfpereira',
    sortDate: '2024-09-05',
  },
  {
    id: 'qaconf-2',
    titleKey: 'events.qaconf-2.title',
    dateKey: 'events.qaconf-2.date',
    locationKey: 'events.qaconf-2.location',
    descriptionKey: 'events.qaconf-2.description',
    source: 'https://www.qaconf.co',
    sortDate: '2025-09-11',
  },
  {
    id: 'oth',
    titleKey: 'events.oth.title',
    dateKey: 'events.oth.date',
    locationKey: 'events.oth.location',
    descriptionKey: 'events.oth.description',
    source: 'https://opentechhackathon.com/',
    sortDate: '2025-10-06',
  },
  {
    id: 'pertt',
    titleKey: 'events.pertt.title',
    dateKey: 'events.pertt.date',
    locationKey: 'events.pertt.location',
    descriptionKey: 'events.pertt.description',
    source: 'https://www.pereiratechtalks.com/',
    sortDate: '2024-01-01',
  },
];

/** Sort events by closest-to-today first (sortDate descending). */
export function sortEventsByRecency(events: EventDef[]): EventDef[] {
  return [...events].sort((a, b) => (b.sortDate ?? '').localeCompare(a.sortDate ?? ''));
}
