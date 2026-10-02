import { Language } from "../../../pages/Home";
import { myProjects } from "../../../data/MyProjects";
import { ProjectsCard } from "../../UI/ProjectsCard";
import { ProjectsContainer } from "./styles";

interface ProjectsProps { language: Language; }

export function Projects({ language }: ProjectsProps) {
  const featured = myProjects.filter((project) => project.featured);
  const archive = myProjects.filter((project) => !project.featured);

  const copy = language === "pt"
    ? {
        eyebrow: "Projetos selecionados",
        title: "Problema, contexto e decisão — não apenas screenshots.",
        intro: "Uma seleção de projetos profissionais, acadêmicos e técnicos que representam melhor a forma como construo software.",
        archive: "Outros projetos / Labs",
      }
    : {
        eyebrow: "Selected work",
        title: "Problem, context and decisions — not just screenshots.",
        intro: "A selection of professional, academic and technical projects that better represent how I build software.",
        archive: "Other projects / Labs",
      };

  return (
    <ProjectsContainer id="projects" className="section-shell">
      <div className="container">
        <header className="section-heading" data-reveal>
          <span className="section-eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-intro">{copy.intro}</p>
        </header>

        <div className="featured-projects">
          {featured.map((project, index) => (
            <ProjectsCard key={project.id} myProjects={project} language={language} index={index} featured />
          ))}
        </div>

        <div className="archive" data-reveal>
          <div className="archive-heading">
            <h3>{copy.archive}</h3>
            <span>{String(archive.length).padStart(2, "0")}</span>
          </div>
          <div className="archive-grid">
            {archive.map((project, index) => (
              <ProjectsCard key={project.id} myProjects={project} language={language} index={index} />
            ))}
          </div>
        </div>
      </div>
    </ProjectsContainer>
  );
}
