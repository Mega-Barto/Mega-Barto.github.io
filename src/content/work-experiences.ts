import type { WorkDef } from './types';

export const WORK_DEFS: WorkDef[] = [
  {
    id: 'webspro',
    labelKey: 'works.webspro',
    href: 'https://webspro.co/',
    timeKey: 'works.periods.webspro',
    durationKey: 'works.durations.webspro',
    sortDate: '2024-01-01',
  },
  {
    id: 'taejf',
    labelKey: 'works.taejf',
    href: 'https://taejf.com/',
    timeKey: 'works.periods.taejf',
    actual: true,
    sortDate: '2025-01-01',
  },
];

/**
 * Sort by `actual` first (current role on top), then by `sortDate` descending
 * so the most recent experiences always appear first on the landing page.
 */
export function sortWorksByRecency(defs: WorkDef[]): WorkDef[] {
  return [...defs].sort((a, b) => {
    const aActual = a.actual ? 1 : 0;
    const bActual = b.actual ? 1 : 0;
    if (aActual !== bActual) return bActual - aActual;
    return (b.sortDate ?? '').localeCompare(a.sortDate ?? '');
  });
}
