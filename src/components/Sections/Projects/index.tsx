import { Language } from "../../../pages/Home";
import { myProjects } from "../../../data/MyProjects";
import { ProjectsCard } from "../../UI/ProjectsCard";
import { SplitWords } from "../../Effects/SplitWords";
import { HorizontalScroll } from "../../Effects/HorizontalScroll";
import { ProjectsContainer } from "./styles";

interface ProjectsProps { language: Language; }

export function Projects({ language }: ProjectsProps) {
  const featured = myProjects.filter((project) => project.featured);
  const archive = myProjects.filter((project) => !project.featured);

  const copy = language === "pt"
    ? {
        eyebrow: "Projetos selecionados",
        title: "Sistemas reais e o meu papel em cada um.",
        intro: "Trabalhos profissionais e de pesquisa. Quando não há tela pública que possa ser mostrada, o projeto aparece só em texto.",
        archive: "Outros projetos / Labs",
        hint: "Role para o lado →",
      }
    : {
        eyebrow: "Selected work",
        title: "Real systems and my role in each one.",
        intro: "Professional and research work. When there is no public screen that can be shown, the project is presented in text only.",
        archive: "Other projects / Labs",
        hint: "Scroll sideways →",
      };

  return (
    <ProjectsContainer id="projects" className="section-shell">
      <div className="container">
        <header className="section-heading" data-reveal>
          <span className="section-eyebrow">{copy.eyebrow}</span>
          <SplitWords className="section-title" text={copy.title} accent={2} />
          <p className="section-intro">{copy.intro}</p>
          <p className="scroll-hint">{copy.hint}</p>
        </header>
      </div>

      <HorizontalScroll>
        {featured.map((project, index) => (
          <ProjectsCard key={project.id} myProjects={project} language={language} index={index} featured />
        ))}
      </HorizontalScroll>

      <div className="container">
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
