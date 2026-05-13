import type { WorkDef } from './types';

export const WORK_DEFS: WorkDef[] = [
  {
    id: 'webspro',
    labelKey: 'works.webspro',
    href: 'https://webspro.co/',
    timeKey: 'works.periods.webspro',
    durationKey: 'works.durations.webspro',
    startDate: '2024-12-18',
    endDate: '2025-08-04',
  },
  {
    id: 'taejf',
    labelKey: 'works.taejf',
    href: 'https://taejf.com/',
    timeKey: 'works.periods.taejf',
    actual: true,
    startDate: '2025-08-28',
  },
];

/**
 * Sort by `actual` first (current role on top), then by `startDate` descending
 * so the most recent experiences always appear first on the landing page.
 */
export function sortWorksByRecency(defs: WorkDef[]): WorkDef[] {
  return [...defs].sort((a, b) => {
    const aActual = a.actual ? 1 : 0;
    const bActual = b.actual ? 1 : 0;
    if (aActual !== bActual) return bActual - aActual;
    const aTime = a.startDate ? new Date(a.startDate).getTime() : 0;
    const bTime = b.startDate ? new Date(b.startDate).getTime() : 0;
    return bTime - aTime;
  });
}
