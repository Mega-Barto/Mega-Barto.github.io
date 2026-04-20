import { getStatusColor, PROJECT_DEFS } from '../../content/projects';
import type { ProjectDef } from '../../content/types';
import { useClientT } from '../../i18n/useClientT';
import CollapsibleSectionIsland from './CollapsibleSectionIsland';
import '../sections/ProjectsSection/ProjectsSection.css';

function projectTitle(p: ProjectDef, ct: (k: string) => string): string {
  if (p.titleLiteral) return p.titleLiteral;
  if (p.titleKey) return ct(p.titleKey);
  return '';
}

interface ProjectsSectionIslandProps {
  variant: 'summary' | 'full';
  viewAllHref?: string;
}

export default function ProjectsSectionIsland({
  variant,
  viewAllHref,
}: ProjectsSectionIslandProps) {
  const ct = useClientT();
  const defs = variant === 'summary' ? PROJECT_DEFS.slice(0, 3) : PROJECT_DEFS;

  return (
    <CollapsibleSectionIsland id="projects" titleKey="header.navigation.projects">
      <div className="projects-grid">
        {defs.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{projectTitle(project, ct)}</h3>
              <span
                className="project-status"
                style={{ backgroundColor: getStatusColor(project.status) }}
                data-i18n-key={`projects.status.${project.status}`}
              >
                {ct(`projects.status.${project.status}`)}
              </span>
            </div>
            <p className="project-description" data-i18n-key={project.descriptionKey}>
              {ct(project.descriptionKey)}
            </p>
            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  data-i18n-key="projects.links.github"
                >
                  {ct('projects.links.github')}
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                  data-i18n-key="projects.links.demo"
                >
                  {ct('projects.links.demo')}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                  data-i18n-key="projects.links.demo"
                >
                  {ct('projects.links.demo')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {variant === 'summary' && viewAllHref && (
        <p className="section-view-all">
          <a href={viewAllHref} className="view-all-link" data-i18n-key="common.viewAll">
            {ct('common.viewAll')}
          </a>
        </p>
      )}
    </CollapsibleSectionIsland>
  );
}
