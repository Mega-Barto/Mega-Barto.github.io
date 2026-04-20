import { useMemo, useState } from 'react';
import { getStatusColor, PROJECT_DEFS } from '../../content/projects';
import type { ProjectDef, ProjectStatus } from '../../content/types';
import { useClientT } from '../../i18n/useClientT';
import '../sections/ProjectsSection/ProjectsSection.css';

function projectTitle(p: ProjectDef, ct: (k: string) => string): string {
  if (p.titleLiteral) return p.titleLiteral;
  if (p.titleKey) return ct(p.titleKey);
  return '';
}

const ALL_STATUSES: ProjectStatus[] = ['completed', 'in-progress', 'planned'];

export default function ProjectsPageClient() {
  const ct = useClientT();
  const [status, setStatus] = useState<ProjectStatus | 'all'>('all');
  const [tech, setTech] = useState<string>('');

  const techOptions = useMemo(() => {
    const s = new Set<string>();
    for (const p of PROJECT_DEFS) for (const t of p.technologies) s.add(t);
    return [...s].sort();
  }, []);

  const filtered = useMemo(() => {
    return PROJECT_DEFS.filter((p) => {
      if (status !== 'all' && p.status !== status) return false;
      if (tech && !p.technologies.includes(tech)) return false;
      return true;
    });
  }, [status, tech]);

  return (
    <div className="page-detail projects-detail">
      <div className="projects-filters">
        <label>
          <span data-i18n-key="projects.filter.status">{ct('projects.filter.status')}</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as ProjectStatus | 'all')}
            aria-label="status"
          >
            <option value="all" data-i18n-key="projects.filter.all">
              {ct('projects.filter.all')}
            </option>
            {ALL_STATUSES.map((st) => (
              <option key={st} value={st}>
                {ct(`projects.status.${st}`)}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span data-i18n-key="projects.filter.technology">{ct('projects.filter.technology')}</span>
          <select value={tech} onChange={(e) => setTech(e.target.value)} aria-label="technology">
            <option value="" data-i18n-key="projects.filter.all">
              {ct('projects.filter.all')}
            </option>
            {techOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{projectTitle(project, ct)}</h2>
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
              {project.technologies.map((x) => (
                <span key={x} className="tech-tag">
                  {x}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
