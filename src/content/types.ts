export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface ProjectDef {
  id: string;
  titleKey?: string;
  titleLiteral?: string;
  descriptionKey: string;
  technologies: string[];
  link?: string;
  github?: string;
  demo?: string;
  status: ProjectStatus;
}

export interface EventDef {
  id: string;
  titleKey: string;
  dateKey: string;
  locationKey: string;
  descriptionKey: string;
  source?: string;
  /** ISO date (YYYY-MM-DD) used to sort entries; falls back to a very old date if missing. */
  sortDate?: string;
}

export interface CertificateDef {
  id: string;
  titleKey: string;
  academyKey: string;
  dateObtainedKey: string;
  verificationCode?: string;
  /** ISO date (YYYY-MM-DD) used to sort entries. */
  sortDate?: string;
}

export interface WorkDef {
  id: string;
  labelKey: string;
  href: string;
  timeKey: string;
  durationKey?: string;
  actual?: boolean;
  /** ISO date (YYYY-MM-DD) marking the start of the role, used to sort. */
  sortDate?: string;
}

export interface CarouselItemDef {
  name: string;
  imageFile: string;
  url: string;
}

export interface NavDef {
  id: string;
  labelKey: string;
  hrefHome: string;
  pathPage: string;
  isExternal?: boolean;
  externalHref?: string;
}

export interface ResolvedNavItem {
  id: string;
  href: string;
  labelKey: string;
  isExternal?: boolean;
}
