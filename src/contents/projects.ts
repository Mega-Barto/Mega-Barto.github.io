import type { TFunction } from 'i18next';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const getProjects = (t: TFunction): Project[] => [
  {
    id: '1',
    title: t('projects.portfolio.title'),
    description: t('projects.portfolio.description'),
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/Mega-Barto/Mega-Barto.github.io',
    status: 'in-progress'
  },
  {
    id: '2',
    title: t('projects.pr-extractor.title'),
    description: t('projects.pr-extractor.description'),
    technologies: ['HTML', 'CSS', 'JavaScript', 'Electron'],
    github: 'https://github.com/Mega-Barto/PR-Extractor',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Legendary Pokedex API',
    description: t('projects.legendary_pokedex_api.description'),
    technologies: ['Python', 'Flask', 'MySQL', 'PythonAnywhere'],
    github: 'https://github.com/Mega-Barto/legendary-pokemon-api',
    demo: 'https://megabarto.pythonanywhere.com/',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Chess games API',
    description: t('projects.project2.description'),
    technologies: ['Python', 'Django'],
    status: 'completed',
    github: 'https://github.com/Mega-Barto/Chess-Games-Api'
  },
  {
    id: '3',
    title: t('projects.project2.title'),
    description: t('projects.project2.description'),
    technologies: ['Next.JS', 'MongoDB'],
    status: 'planned'
  },
];

// Función para obtener colores de estado
export const getStatusColor = (status: Project['status']): string => {
  switch (status) {
    case 'completed': return '#28a745';
    case 'in-progress': return '#ffc107';
    case 'planned': return '#6c757d';
    default: return '#6c757d';
  }
};
