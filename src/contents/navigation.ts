import type { TFunction } from 'i18next';

export interface NavigationItem {
  label: string;
  href: string;
  id: string;
  isExternal?: boolean;
}

export const getNavigationItems = (t: TFunction): NavigationItem[] => [
  { 
    label: t('header.navigation.autobiography'), 
    href: '#autobiography',
    id: 'autobiography' 
  },
  { 
    label: t('header.navigation.workExperience'), 
    href: '#work-experience',
    id: 'work-experience' 
  },
  { 
    label: t('header.navigation.projects'), 
    href: '#projects',
    id: 'projects' 
  },
  { 
    label: t('header.navigation.certificates'), 
    href: '#certificates',
    id: 'certificates' 
  },
  { 
    label: t('header.navigation.events'), 
    href: '#events',
    id: 'events' 
  },
  { 
    label: t('header.navigation.blog'), 
    href: 'https://megabarto.notion.site',
    id: 'blog',
    isExternal: true
  },
  { 
    label: t('header.navigation.cv'), 
    href: 'https://www.canva.com/design/DAFNPRdvE5Y/view',
    id: 'cv',
    isExternal: true
  }
];
