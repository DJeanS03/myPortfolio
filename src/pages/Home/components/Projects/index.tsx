import { myProjects } from "../../../../data/MyProjects";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectsContainer } from "./styles";

interface ProjectsProps {
  language: string;
}

export function Projects({ language }: ProjectsProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="section__subtitle">
            Work <span>Examples</span>
          </h3>
          <h2 className="section__title">Recent Projects</h2>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="section__subtitle">
            Exemplos de <span>Trabalho</span>
          </h3>
          <h2 className="section__title">Realizações Recentes</h2>
        </>
      );
    }
  };
  return (
    <ProjectsContainer id="projects">
      {getText()}

      <div className="projects__container container grid box">
        {myProjects.map((myProjects) => (
          <ProjectsCard
            key={myProjects.id}
            myProjects={myProjects}
            language={language}
          />
        ))}
      </div>
    </ProjectsContainer>
  );
}
