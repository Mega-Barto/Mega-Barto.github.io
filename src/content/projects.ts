import type { ProjectDef, ProjectStatus } from './types';

export const PROJECT_DEFS: ProjectDef[] = [
  {
    id: '1',
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/Mega-Barto/Mega-Barto.github.io',
    status: 'in-progress',
  },
  {
    id: '2',
    titleKey: 'projects.pr-extractor.title',
    descriptionKey: 'projects.pr-extractor.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Electron'],
    github: 'https://github.com/Mega-Barto/PR-Extractor',
    status: 'completed',
  },
  {
    id: '5',
    titleLiteral: 'Legendary Pokedex API',
    descriptionKey: 'projects.legendary_pokedex_api.description',
    technologies: ['Python', 'Flask', 'MySQL', 'PythonAnywhere'],
    github: 'https://github.com/Mega-Barto/legendary-pokemon-api',
    demo: 'https://megabarto.pythonanywhere.com/',
    status: 'completed',
  },
  {
    id: '6',
    titleLiteral: 'Chess games API',
    descriptionKey: 'projects.chess_api.description',
    technologies: ['Python', 'Django'],
    status: 'completed',
    github: 'https://github.com/Mega-Barto/Chess-Games-Api',
  },
  {
    id: '3',
    titleKey: 'projects.project2.title',
    descriptionKey: 'projects.project2.description',
    technologies: ['Next.JS', 'MongoDB'],
    status: 'planned',
  },
];

export function getStatusColor(status: ProjectStatus): string {
  switch (status) {
    case 'completed':
      return '#28a745';
    case 'in-progress':
      return '#ffc107';
    case 'planned':
      return '#6c757d';
    default:
      return '#6c757d';
  }
}
