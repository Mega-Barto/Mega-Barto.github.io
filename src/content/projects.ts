import type { ProjectCategory, ProjectDef, ProjectStatus } from './types';

export const PROJECT_DEFS: ProjectDef[] = [
  {
    id: '1',
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    technologies: ['Astro', 'TypeScript', 'Bun', 'CSS'],
    github: 'https://github.com/Mega-Barto/Mega-Barto.github.io',
    status: 'in-progress',
    category: 'personal',
  },
  {
    id: '2',
    titleKey: 'projects.pr-extractor.title',
    descriptionKey: 'projects.pr-extractor.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Electron'],
    github: 'https://github.com/Mega-Barto/PR-Extractor',
    status: 'completed',
    category: 'personal',
  },
  {
    id: '5',
    titleLiteral: 'Legendary Pokedex API',
    descriptionKey: 'projects.legendary_pokedex_api.description',
    technologies: ['Python', 'Flask', 'MySQL', 'PythonAnywhere'],
    github: 'https://github.com/Mega-Barto/legendary-pokemon-api',
    demo: 'https://megabarto.pythonanywhere.com/',
    status: 'completed',
    category: 'personal',
  },
  {
    id: '7',
    titleLiteral: 'pereiratechtalks.org',
    descriptionKey: 'projects.pereiratechtalks-org.description',
    technologies: ['AstroWind'],
    status: 'contributing',
    github: 'https://github.com/pereira-tech-talks/pereiratechtalks.com',
    demo: 'https://pereiratechtalks.org/',
    category: 'personal',
  },
  {
    id: '8',
    titleKey: 'projects.sollte.title',
    descriptionKey: 'projects.sollte.description',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    demo: 'https://play.google.com/store/apps/details?id=co.com.sollte&hl=es_CO',
    demoLabelKey: 'projects.links.viewProject',
    status: 'completed',
    category: 'professional',
  },
  {
    id: '9',
    titleKey: 'projects.qaconf-co.title',
    descriptionKey: 'projects.qaconf-co.description',
    technologies: ['Nuxt', 'Supabase', 'Cloudflare Workers'],
    demo: 'https://www.qaconf.co',
    demoLabelKey: 'projects.links.viewProject',
    status: 'in-progress',
    category: 'professional',
  },
];

export function getStatusColor(status: ProjectStatus): string {
  switch (status) {
    case 'completed':
      return '#22c55e'; // green
    case 'in-progress':
      return '#eab308'; // yellow
    case 'planned':
      return '#ef4444'; // red
    case 'contributing':
      return '#f97316'; // orange
    default:
      return '#6c757d';
  }
}

const STATUS_PRIORITY: Record<ProjectStatus, number> = {
  contributing: 0,
  'in-progress': 1,
  completed: 2,
  planned: 3,
};

/** Sort projects so currently active items appear first on the landing page. */
export function sortProjectsByRelevance(defs: ProjectDef[]): ProjectDef[] {
  return [...defs].sort((a, b) => STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status]);
}

export const PROJECT_CATEGORIES: ProjectCategory[] = ['professional', 'personal'];
