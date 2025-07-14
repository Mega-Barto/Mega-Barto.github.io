import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectsSection.css';
import { getProjects, getStatusColor, type Project } from '../../../contents';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = getProjects(t);

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
