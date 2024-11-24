import { ServicesContainer } from "./styles";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";
import { Accordion } from "../../UI/Accordion";
import { myExperiences } from "../../../data/MyExperiences";

interface ExperiencesProps {
  language: Language;
}

export function Experiences({ language }: ExperiencesProps) {
  const getTranslation = () => {
    const translation =
      myTexts[0].experiences.translations[language] ||
      myTexts[0].experiences.translations.en;
    return translation;
  };

  const translation = getTranslation();

  return (
    <ServicesContainer id="services">
      {/* {getText()} */}
      <div className="box">
        <h3
          className="section__subtitle"
          dangerouslySetInnerHTML={{
            __html: translation.experiences__subtitle,
          }}
        />
        <h2 className="section__title">{translation.experiences__title}</h2>
        <div className="services__container container grid">
          {myExperiences.map((experience) => (
            <Accordion
              key={experience.id}
              myExperiences={experience}
              language={language}
            />
          ))}
        </div>
      </div>
    </ServicesContainer>
  );
}
