import { ExpertiseContainer } from "./styles";

export interface Expertise {
  id: number;
  icon: JSX.Element;
  translations: Translations;
}

interface Translations {
  en: {
    title: string;
    description: string;
  };
  pt: {
    title: string;
    description: string;
  };
}

interface ExpertiseProps {
  myExpertise: Expertise;
  language: string;
}

export function ExpertiseCard({ myExpertise, language }: ExpertiseProps) {
  const getTranslation = () => {
    if (language === "en") {
      return myExpertise.translations.en;
    } else if (language === "pt") {
      return myExpertise.translations.pt;
    } else {
      return myExpertise.translations.en; // Retorno padrão em inglês
    }
  };

  const translation = getTranslation();

  return (
    <ExpertiseContainer>
      <article className="expertise__card">
        <span className="expertise__header">
          <h2 className="expertise__title">{translation.title}</h2>
          {myExpertise.icon}
        </span>
        <p className="expertise__description">{translation.description}</p>
      </article>
    </ExpertiseContainer>
  );
}
