import { myProjects } from "../../../../data/MyProjects";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectsContainer } from "./styles";

export function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h3 className="section__subtitle">
        My <span>Works</span>
      </h3>
      <h2 className="section__title">Recent Projects</h2>

      <div className="projects__container container grid">
        {myProjects.map((myProjects) => (
          <ProjectsCard key={myProjects.id} myProjects={myProjects} />
        ))}
      </div>
    </ProjectsContainer>
  );
}
