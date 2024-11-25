import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  Arrow,
  InfoLine,
} from "./styles";
import { Language } from "../../../pages/Home";

export interface Experiences {
  id: number;
  translations: Translations;
}

interface Translations {
  en: {
    companyName: string;
    jobTitle: string;
    employmentType: string;
    startDate: Date;
    exitDate: Date;
    status: string;
    location: string;
    children: React.ReactNode;
  };
  pt: {
    companyName: string;
    jobTitle: string;
    employmentType: string;
    startDate: Date;
    exitDate: Date;
    status: string;
    location: string;
    children: React.ReactNode;
  };
}

interface ExperiencesProps {
  myExperiences: Experiences;
  language: Language;
}

export function Accordion({ myExperiences, language }: ExperiencesProps) {
  const getTranslation = () => {
    if (language === "en") {
      return myExperiences.translations.en;
    } else if (language === "pt") {
      return myExperiences.translations.pt;
    } else {
      return myExperiences.translations.en;
    }
  };

  const translation = getTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  /* -------------------------------------------------------------------------------------------------------------------------------------- */
  const calculateDuration = (
    startDate: Date,
    exitDate: Date,
    status: string
  ) => {
    const now = new Date();

    // Se o status for "a" (ativo), usamos a data atual (now)
    const endDate = status === "a" ? now : exitDate;

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const lastMonth = new Date(
        endDate.getFullYear(),
        endDate.getMonth() - 1,
        0
      );
      days += lastMonth.getDate();
    }

    return { years, months, days };
  };

  const { years, months, days } = calculateDuration(
    translation.startDate,
    translation.exitDate,
    translation.status
  );
  /* -------------------------------------------------------------------------------------------------------------------------------------- */

  const formattedStartDate = translation.startDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  const formattedExitDate = translation.exitDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  return (
    <AccordionContainer>
      <div>
        <AccordionHeader onClick={toggleAccordion}>
          <div>
            <strong>{translation.jobTitle}</strong> - {translation.companyName}{" "}
            ({translation.employmentType})
            <InfoLine>
              {formattedStartDate} -{" "}
              {translation.status == "a"
                ? language == "pt"
                  ? "Atualmente"
                  : "Currently"
                : formattedExitDate}{" "}
              • {years} {language == "pt" ? "anos" : "years"} {months}{" "}
              {language == "pt" ? "meses" : "months"} {days}{" "}
              {language == "pt" ? "dias" : "days"} • {translation.location}
            </InfoLine>
          </div>

          <Arrow isOpen={isOpen}>
            <i className="bx bx-up-arrow-alt experiences__icon"></i>
          </Arrow>
        </AccordionHeader>
        <AccordionContent isOpen={isOpen}>
          {Array.isArray(translation.children) &&
          translation.children.length > 0 ? (
            <ul>
              {translation.children.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          ) : (
            <p>No activities available.</p> // Exibe uma mensagem ou renderiza algo caso não haja atividades
          )}
        </AccordionContent>
      </div>
    </AccordionContainer>
  );
}
