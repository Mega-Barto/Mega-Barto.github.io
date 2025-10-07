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
    source: 'https://flisol.info/FLISOL2023/Colombia/Pereira'
  },
  {
    id: 'flisol-2',
    title: t('events.flisol-2.title'),
    date: t('events.flisol-2.date'),
    location: t('events.flisol-2.location'),
    description: t('events.flisol-2.description'),
    source: 'https://flisol.info/FLISOL2024/Colombia'
  },
  {
    id: 'flisol-3',
    title: t('events.flisol-3.title'),
    date: t('events.flisol-3.date'),
    location: t('events.flisol-3.location'),
    description: t('events.flisol-3.description'),
    source: 'https://flisolpereira.vercel.app/'
  },
  {
    id: 'sfd-1',
    title: t('events.sfd-1.title'),
    date: t('events.sfd-1.date'),
    location: t('events.sfd-1.location'),
    description: t('events.sfd-1.description'),
    source: 'https://cidt.utp.edu.co/noticias-y-eventos/preparate-para-el-software-freedom-day/'
  },
  {
    id: 'sfd-2',
    title: t('events.sfd-2.title'),
    date: t('events.sfd-2.date'),
    location: t('events.sfd-2.location'),
    description: t('events.sfd-2.description'),
    source: 'https://backboneutp.com/events/software-freedom-day-2024'
  },
  {
    id: 'sfd-3',
    title: t('events.sfd-3.title'),
    date: t('events.sfd-3.date'),
    location: t('events.sfd-3.location'),
    description: t('events.sfd-3.description'),
    source: 'https://backboneutp.com/events/software-freedom-day-2025'
  },
  {
    id: 'qaconf-1',
    title: t('events.qaconf-1.title'),
    date: t('events.qaconf-1.date'),
    location: t('events.qaconf-1.location'),
    description: t('events.qaconf-1.description'),
    source: 'https://www.qaconf.co/qaconfpereira'
  },
  {
    id: 'qaconf-2',
    title: t('events.qaconf-2.title'),
    date: t('events.qaconf-2.date'),
    location: t('events.qaconf-2.location'),
    description: t('events.qaconf-2.description'),
    source: 'https://www.qaconf.co'
  },
  {
    id: 'oth',
    title: t('events.oth.title'),
    date: t('events.oth.date'),
    location: t('events.oth.location'),
    description: t('events.oth.description'),
    source: 'https://opentechhackathon.com/'
  },
  {
    id: 'pertt',
    title: t('events.pertt.title'),
    date: t('events.pertt.date'),
    location: t('events.pertt.location'),
    description: t('events.pertt.description'),
    source: 'https://www.pereiratechtalks.com/'
  }
];
