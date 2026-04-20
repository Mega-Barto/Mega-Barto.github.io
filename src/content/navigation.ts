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
    hrefHome: '/Juan_Alejandro_Pérez_Bermúdez_CV.pdf',
    pathPage: '/Juan_Alejandro_Pérez_Bermúdez_CV.pdf',
    isExternal: true,
    externalHref: '/Juan_Alejandro_Pérez_Bermúdez_CV.pdf',
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

/** Detecta si un href apunta a un dominio distinto al sitio (true off-site). */
function isOffsiteHref(def: NavDef): boolean {
  if (!def.isExternal || !def.externalHref) return false;
  // Los externalHref que empiezan con "/" son assets locales (ej. /cv.pdf),
  // no cuentan como off-site aunque se abran en nueva pestaña.
  return !def.externalHref.startsWith('/');
}

export function resolveNavItems(pathname: string, base: string): ResolvedNavItem[] {
  return NAV_DEFS.map((d) => ({
    id: d.id,
    href: resolveNavHref(d, pathname, base),
    labelKey: d.labelKey,
    isExternal: d.isExternal,
    isOffsite: isOffsiteHref(d),
  }));
}
