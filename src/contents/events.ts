import type { TFunction } from 'i18next';

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  source?: string;
}

export const getEvents = (t: TFunction): Event[] => [
  {
    id: 'flisol-1',
    title: t('events.flisol-1.title'),
    date: t('events.flisol-1.date'),
    location: t('events.flisol-1.location'),
    description: t('events.flisol-1.description'),
    source: t('events.flisol-1.source')
  },
  {
    id: 'flisol-2',
    title: t('events.flisol-2.title'),
    date: t('events.flisol-2.date'),
    location: t('events.flisol-2.location'),
    description: t('events.flisol-2.description'),
    source: t('events.flisol-2.source')
  },
  {
    id: 'flisol-3',
    title: t('events.flisol-3.title'),
    date: t('events.flisol-3.date'),
    location: t('events.flisol-3.location'),
    description: t('events.flisol-3.description'),
    source: t('events.flisol-3.source')
  },
  {
    id: 'sfd-1',
    title: t('events.sfd-1.title'),
    date: t('events.sfd-1.date'),
    location: t('events.sfd-1.location'),
    description: t('events.sfd-1.description'),
    source: t('events.sfd-1.source')
  },
  {
    id: 'sfd-2',
    title: t('events.sfd-2.title'),
    date: t('events.sfd-2.date'),
    location: t('events.sfd-2.location'),
    description: t('events.sfd-2.description'),
    source: t('events.sfd-2.source')
  },
  {
    id: 'qaconf-1',
    title: t('events.qaconf-1.title'),
    date: t('events.qaconf-1.date'),
    location: t('events.qaconf-1.location'),
    description: t('events.qaconf-1.description'),
    source: t('events.qaconf-1.source')
  },
  {
    id: 'qaconf-2',
    title: t('events.qaconf-2.title'),
    date: t('events.qaconf-2.date'),
    location: t('events.qaconf-2.location'),
    description: t('events.qaconf-2.description'),
    source: t('events.qaconf-2.source')
  },
  {
    id: 'pertt',
    title: t('events.pertt.title'),
    date: t('events.pertt.date'),
    location: t('events.pertt.location'),
    description: t('events.pertt.description'),
    source: t('events.pertt.source')
  }
];
