import { Project } from "../../../data/MyProjects";
import { ProjectsCardContainer } from "./styles";

interface ProjectsProps {
  myProjects: Project;
  language: "en" | "pt";
  index?: number;
  featured?: boolean;
}

export function ProjectsCard({ myProjects, language, featured = false }: ProjectsProps) {
  const t = myProjects.translations[language];
  const openLabel = language === "pt" ? "Abrir projeto" : "Open project";

  return (
    <ProjectsCardContainer $featured={featured} data-reveal>
      <article className="project-card" data-glow data-cursor={myProjects.link ? (language === "pt" ? "abrir" : "open") : ""}>
        <div className={`project-visual ${myProjects.photo ? "has-image" : "is-abstract"}`}>
          {myProjects.photo ? (
            <img
              src={myProjects.photo}
              alt={language === "pt" ? `Captura de tela do projeto ${t.name}` : `Screenshot of the ${t.name} project`}
              loading="lazy"
            />
          ) : (
            // Sem captura pública: o espaço da imagem mostra fatos do projeto em texto,
            // sem simular uma interface.
            <div className="abstract-visual">
              <span className="abstract-name" aria-hidden="true">{t.name}</span>
              {t.highlights && (
                <ul className="abstract-facts">
                  {t.highlights.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>
              )}
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
