import { ProjectsCardContainer } from "./styles";

export interface Project {
  id: number;
  tags: string;
  name: string;
  photo: string;
  link: string;
  status: string;
  state: string;
  translations: Translations;
}

interface Translations {
  en: {
    name: string;
    status: string;
  };
  pt: {
    name: string;
    status: string;
  };
}

interface ProjectsProps {
  myProjects: Project;
  language: string;
}

export function ProjectsCard({ myProjects, language }: ProjectsProps) {
  const getButtonText = () => (language === "en" ? "View demo" : "Ver demo");

  const getTranslation = () => {
    if (language === "en") {
      return myProjects.translations.en;
    } else if (language === "pt") {
      return myProjects.translations.pt;
    } else {
      return myProjects.translations.en; // Retorno padrão em inglês
    }
  };

  const translation = getTranslation();

  return (
    <ProjectsCardContainer>
      <article className="projects__card">
        <img src={myProjects.photo} alt="" className="projects__img" />

        <div className="projects__modal">
          <span className="projects__subtitle">{myProjects.tags}</span>
          <span className="projects__subtitle" id={myProjects.state}>
            {translation?.status}
          </span>
          <h2 className="projects__title">{translation?.name}</h2>
          <a
            href={myProjects.link}
            className="projects__button"
            target="_blank"
          >
            {getButtonText()} <i className="bx bx-link-external"></i>
          </a>
        </div>
      </article>
    </ProjectsCardContainer>
  );
}
