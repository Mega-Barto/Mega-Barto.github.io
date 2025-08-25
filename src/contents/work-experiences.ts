import type { TFunction } from 'i18next';

export interface Works {
  label: string;
  href: string;
  id: string;
  actual?: boolean;
  time: string;
  duration?: string;

}

export const getWorks = (t: TFunction): Works[] => [
  { 
    label: t('works.webspro'), 
    href: 'https://webspro.co/',
    id: 'webspro',
    time: t('works.periods.webspro'),
    duration: t('works.durations.webspro')
  },
  { 
    label: t('works.taejf'), 
    href: 'https://taejf.com/',
    id: 'taejf',
    time: t('works.periods.taejf'),
    actual: true
  },
  
];