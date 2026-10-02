import { Project } from "../../../data/MyProjects";
import { ProjectsCardContainer } from "./styles";

interface ProjectsProps {
  myProjects: Project;
  language: "en" | "pt";
  index?: number;
  featured?: boolean;
}

export function ProjectsCard({ myProjects, language, index = 0, featured = false }: ProjectsProps) {
  const t = myProjects.translations[language];
  const openLabel = language === "pt" ? "Abrir projeto" : "Open project";

  return (
    <ProjectsCardContainer $featured={featured} data-reveal>
      <article className="project-card">
        <div className={`project-visual ${myProjects.photo ? "has-image" : "is-abstract"}`}>
          {myProjects.photo ? (
            <img src={myProjects.photo} alt={`Preview do projeto ${t.name}`} loading="lazy" />
          ) : (
            <div className="abstract-visual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="abstract-lines"><i /><i /><i /></div>
            </div>
          )}
          <span className="project-status">{t.status}</span>
        </div>

        <div className="project-content">
          <div>
            <p className="project-eyebrow">{t.eyebrow}</p>
            <h3>{t.name}</h3>
          </div>
          <p className="project-description">{t.description}</p>
          <div className="project-meta">
            <span>{t.role}</span>
            <div className="project-tags">
              {myProjects.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          {myProjects.link && (
            <a href={myProjects.link} target="_blank" rel="noreferrer" className="project-link">
              {openLabel} <i className="bx bx-up-arrow-alt" aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </ProjectsCardContainer>
  );
}
