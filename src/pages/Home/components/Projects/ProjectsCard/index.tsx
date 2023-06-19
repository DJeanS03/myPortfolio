import { CoffeeCardContainer } from "./styles";

export interface Project {
  id: number;
  tags: string;
  name: string;
  photo: string;
}

interface ProjectsProps {
  myProjects: Project;
}

export function ProjectsCard({ myProjects }: ProjectsProps) {
  return (
    <CoffeeCardContainer>
      <article className="projects__card">
        <img src={myProjects.photo} alt="" className="projects__img" />

        <div className="projects__modal">
          <span className="projects__subtitle">{myProjects.tags}</span>
          <h2 className="projects__title">{myProjects.name}</h2>
          <a href="" className="projects__button">
            View demo <i className="bx bx-link-external"></i>
          </a>
        </div>
      </article>
    </CoffeeCardContainer>
  );
}
