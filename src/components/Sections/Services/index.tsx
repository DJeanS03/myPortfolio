import { ServicesContainer } from "./styles";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";
import { Accordion } from "../../UI/Accordion";
import { myExperiences } from "../../../data/MyExperiences";

export interface Experiences {
  id: number;
  translations: Translations;
}

interface Translations {
  en: {
    companyName: string;
    jobTitle: string;
    employmentType: string;
    location: string;
  };
  pt: {
    companyName: string;
    jobTitle: string;
    employmentType: string;
    location: string;
  };
}

interface ExperiencesProps {
  experiences: Experiences;
  language: Language;
}

export function Experiences({ experiences, language }: ExperiencesProps) {
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
          {/* <Accordion
            companyName="Minha Empresa"
            jobTitle="Desenvolvedor Front-end"
            employmentType="CLT"
            startDate={new Date("2024-10-26")} // Data de início
            location="São Paulo, SP"
          >
            <p>Detalhes sobre meu trabalho na empresa.</p>
          </Accordion> */}

          {/*  <Accordion
            companyName={translations.companyName}
            jobTitle={translations.jobTitle}
            employmentType={translations.employmentType}
            startDate={new Date("2024-10-26")}
            location={translations.location}
          >
            <p>Detalhes sobre meu trabalho na empresa.</p>
          </Accordion> */}

          {/* {experiences.map((experience) => (
            <Accordion
              key={experience.id}
              companyName={translation.companyName || experience.translations.en.companyName}
              jobTitle={translation.jobTitle || experience.translations.en.jobTitle}
              employmentType={translation.employmentType || experience.translations.en.employmentType}
              startDate={new Date(experience.startDate)}
              location={translation.location || experience.translations.en.location}
            >
              <p>Detalhes sobre meu trabalho na empresa.</p>
            </Accordion>
          ))} */}
        </div>
      </div>
    </ServicesContainer>
  );
}
