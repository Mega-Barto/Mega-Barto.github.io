import type { NavDef, ResolvedNavItem } from './types';

export const NAV_DEFS: NavDef[] = [
  {
    id: 'autobiography',
    labelKey: 'header.navigation.autobiography',
    hrefHome: '#autobiography',
    pathPage: '/about/',
  },
  {
    id: 'work-experience',
    labelKey: 'header.navigation.workExperience',
    hrefHome: '#work-experience',
    pathPage: '/work-experience/',
  },
  {
    id: 'projects',
    labelKey: 'header.navigation.projects',
    hrefHome: '#projects',
    pathPage: '/projects/',
  },
  {
    id: 'certificates',
    labelKey: 'header.navigation.certificates',
    hrefHome: '#certificates',
    pathPage: '/certificates/',
  },
  {
    id: 'events',
    labelKey: 'header.navigation.events',
    hrefHome: '#events',
    pathPage: '/events/',
  },
  {
    id: 'blog',
    labelKey: 'header.navigation.blog',
    hrefHome: 'https://megabarto.notion.site',
    pathPage: '/',
    isExternal: true,
    externalHref: 'https://megabarto.notion.site',
  },
  {
    id: 'cv',
    labelKey: 'header.navigation.cv',
    hrefHome: '/cv.pdf',
    pathPage: '/cv.pdf',
    isExternal: true,
    externalHref: '/cv.pdf',
  },
];

export function isLandingPath(pathname: string, base: string): boolean {
  const p = pathname.replace(/\/+$/, '') || '/';
  const b = (base.endsWith('/') ? base.slice(0, -1) : base) || '/';
  return p === b || p === `${b}/index.html`;
}

export function resolveNavHref(def: NavDef, _pathname: string, base: string): string {
  const baseNorm = base.endsWith('/') ? base.slice(0, -1) : base;
  if (def.isExternal && def.externalHref) {
    // Los externalHref relativos (ej. un PDF dentro de /public) se prefijan
    // con la base del sitio para que funcionen también en GitHub Pages.
    if (def.externalHref.startsWith('/')) return `${baseNorm}${def.externalHref}`;
    return def.externalHref;
  }
  const page = def.pathPage.startsWith('/') ? def.pathPage : `/${def.pathPage}`;
  return `${baseNorm}${page}`;
}

export function resolveNavItems(pathname: string, base: string): ResolvedNavItem[] {
  return NAV_DEFS.map((d) => ({
    id: d.id,
    href: resolveNavHref(d, pathname, base),
    labelKey: d.labelKey,
    isExternal: d.isExternal,
  }));
}
