import type { TFunction } from 'i18next';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
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
    id: '3',
    title: t('projects.project2.title'),
    description: t('projects.project2.description'),
    technologies: ['Node.js', 'Express', 'MongoDB'],
    status: 'planned'
  },
  {
    id: '4',
    title: t('projects.project3.title'),
    description: t('projects.project3.description'),
    technologies: ['Python', 'Django', 'PostgreSQL'],
    status: 'planned'
  },
  {
    id: '5',
    title: t('projects.legendary-pokedex.title'),
    description: t('projects.legendary-pokedex.description'),
    technologies: ['Flutter', 'Dart', 'Flask', 'Python'],
    status: 'in-progress',
  }
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
