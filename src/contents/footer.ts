import type { TFunction } from 'i18next';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const getFooterSections = (t: TFunction): FooterSection[] => [
  {
    title: t('footer.sections.navigation.title'),
    links: [
      { label: t('footer.sections.navigation.home'), href: '#home' },
      { label: t('footer.sections.navigation.projects'), href: '#projects' },
      { label: t('footer.sections.navigation.certificates'), href: '#certificates' },
      { label: t('footer.sections.navigation.events'), href: '#events' },
      { label: t('footer.sections.navigation.about'), href: '#about' },
      { label: t('footer.sections.navigation.blog'), href: 'https://megabarto.notion.site/' }
    ]
  }
];
