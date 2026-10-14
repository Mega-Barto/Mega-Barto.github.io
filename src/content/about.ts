import type { AboutMilestoneDef, AboutMilestoneKind, AboutSkillDef } from './types';

/** Short stack only — roles and soft skills live in the bio and timeline. */
export const ABOUT_SKILLS: AboutSkillDef[] = [
  { label: 'Flutter' },
  { label: 'TypeScript' },
  { label: 'Next.js' },
  { label: 'Firebase' },
  { label: 'Python' },
  { label: 'QA' },
];

export const ABOUT_BIO_KEYS = ['about.bio.p1', 'about.bio.p2', 'about.bio.p3'] as const;

/**
 * Curated identity milestones. Add a row here (plus i18n keys) to update /about/.
 * Not a dump of every work/event entry.
 */
export const ABOUT_MILESTONES: AboutMilestoneDef[] = [
  {
    id: 'dailybot',
    kind: 'work',
    sortDate: '2026-06-01',
    yearLabel: '2026',
    titleKey: 'about.timeline.milestones.dailybot.title',
    descriptionKey: 'about.timeline.milestones.dailybot.description',
    href: 'https://dailybot.com/',
  },
  {
    id: 'aws-ug',
    kind: 'community',
    sortDate: '2026-09-01',
    yearLabel: '2026',
    titleKey: 'about.timeline.milestones.awsUg.title',
    descriptionKey: 'about.timeline.milestones.awsUg.description',
    href: 'https://www.meetup.com/aws-user-group-pereira',
  },
  {
    id: 'tribu',
    kind: 'event',
    sortDate: '2026-04-17',
    yearLabel: '2026',
    titleKey: 'about.timeline.milestones.tribu.title',
    descriptionKey: 'about.timeline.milestones.tribu.description',
    href: 'https://hackathon.thetribu.dev/',
  },
  {
    id: 'oth',
    kind: 'event',
    sortDate: '2025-10-06',
    yearLabel: '2025',
    titleKey: 'about.timeline.milestones.oth.title',
    descriptionKey: 'about.timeline.milestones.oth.description',
    href: 'https://opentechhackathon.com/',
  },
  {
    id: 'qaconf',
    kind: 'event',
    sortDate: '2024-09-05',
    yearLabel: '2024',
    titleKey: 'about.timeline.milestones.qaconf.title',
    descriptionKey: 'about.timeline.milestones.qaconf.description',
    href: 'https://www.qaconf.co',
  },
  {
    id: 'pertt',
    kind: 'community',
    sortDate: '2024-01-01',
    yearLabel: '2024',
    titleKey: 'about.timeline.milestones.pertt.title',
    descriptionKey: 'about.timeline.milestones.pertt.description',
    href: 'https://www.pereiratechtalks.com/',
  },
  {
    id: 'sfd',
    kind: 'event',
    sortDate: '2023-09-07',
    yearLabel: '2023',
    titleKey: 'about.timeline.milestones.sfd.title',
    descriptionKey: 'about.timeline.milestones.sfd.description',
    href: 'https://backboneutp.com/events/software-freedom-day-2025',
  },
  {
    id: 'flisol',
    kind: 'event',
    sortDate: '2023-04-27',
    yearLabel: '2023',
    titleKey: 'about.timeline.milestones.flisol.title',
    descriptionKey: 'about.timeline.milestones.flisol.description',
    href: 'https://flisol.info/FLISOL2023/Colombia/Pereira',
  },
  {
    id: 'taejf',
    kind: 'work',
    sortDate: '2025-08-28',
    yearLabel: '2025–2026',
    titleKey: 'about.timeline.milestones.taejf.title',
    descriptionKey: 'about.timeline.milestones.taejf.description',
    href: 'https://taejf.com/',
  },
  {
    id: 'utp',
    kind: 'education',
    sortDate: '2025-06-01',
    yearLabel: '2025',
    titleKey: 'about.timeline.milestones.utp.title',
    descriptionKey: 'about.timeline.milestones.utp.description',
  },
  {
    id: 'webspro',
    kind: 'work',
    sortDate: '2024-12-18',
    yearLabel: '2024–2025',
    titleKey: 'about.timeline.milestones.webspro.title',
    descriptionKey: 'about.timeline.milestones.webspro.description',
    href: 'https://webspro.co/',
  },
  {
    id: 'sonar',
    kind: 'education',
    sortDate: '2024-01-01',
    yearLabel: '2024',
    titleKey: 'about.timeline.milestones.sonar.title',
    descriptionKey: 'about.timeline.milestones.sonar.description',
  },
];

export function sortMilestonesByRecency(defs: AboutMilestoneDef[]): AboutMilestoneDef[] {
  return [...defs].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

export type AboutTimelineGroupId = 'work' | 'education' | 'community';

export const ABOUT_TIMELINE_GROUP_ORDER: AboutTimelineGroupId[] = [
  'work',
  'education',
  'community',
];

function groupIdForKind(kind: AboutMilestoneKind): AboutTimelineGroupId {
  return kind === 'work' || kind === 'education' ? kind : 'community';
}

export function groupMilestonesByKind(
  defs: AboutMilestoneDef[],
): { id: AboutTimelineGroupId; titleKey: string; items: AboutMilestoneDef[] }[] {
  const sorted = sortMilestonesByRecency(defs);
  return ABOUT_TIMELINE_GROUP_ORDER.map((id) => ({
    id,
    titleKey: `about.timeline.groups.${id}`,
    items: sorted.filter((item) => groupIdForKind(item.kind) === id),
  })).filter((group) => group.items.length > 0);
}
