import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectsSection.css';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
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
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      technologies: ['Node.js', 'Express', 'MongoDB'],
      status: 'planned'
    },
    {
      id: '3',
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      technologies: ['Python', 'Django', 'PostgreSQL'],
      status: 'planned'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#28a745';
      case 'in-progress': return '#ffc107';
      case 'planned': return '#6c757d';
      default: return '#6c757d';
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">{t('header.navigation.projects')}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span 
                  className="project-status" 
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {t(`projects.status.${project.status}`)}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    {t('projects.links.github')}
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    {t('projects.links.demo')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
