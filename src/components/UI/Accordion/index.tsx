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
  defaultValues: defaultValues;
  translations: Translations;
}

interface defaultValues {
  companyName: string;
  location: string;
  startDate: Date;
  exitDate: Date;
  status: string;
}
interface Translations {
  en: {
    jobTitle: string;
    employmentType: string;
    children: React.ReactNode;
  };
  pt: {
    jobTitle: string;
    employmentType: string;
    children: React.ReactNode;
  };
}

interface ExperiencesProps {
  myExperiences: Experiences;
  language: Language;
}

export function Accordion({ myExperiences, language }: ExperiencesProps) {
  const getExperienceData = () => {
    const translation =
      language === "en"
        ? myExperiences.translations.en
        : myExperiences.translations.pt;

    return {
      translation,
      defaultValues: myExperiences.defaultValues,
    };
  };

  const { translation, defaultValues } = getExperienceData();

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
    defaultValues.startDate,
    defaultValues.exitDate,
    defaultValues.status
  );
  /* -------------------------------------------------------------------------------------------------------------------------------------- */

  const formattedDate = (date: Date) => {
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };

  const formattedStartDate = formattedDate(defaultValues.startDate);
  const formattedExitDate = formattedDate(defaultValues.exitDate);

  return (
    <AccordionContainer>
      <div>
        <AccordionHeader onClick={toggleAccordion}>
          <div>
            <strong>{translation.jobTitle}</strong> -{" "}
            {defaultValues.companyName} ({translation.employmentType})
            <InfoLine>
              {formattedStartDate} -{" "}
              {defaultValues.status == "a"
                ? language == "pt"
                  ? "Atualmente"
                  : "Currently"
                : formattedExitDate}{" "}
              • {years} {language == "pt" ? "anos" : "years"} {months}{" "}
              {language == "pt" ? "meses" : "months"} {days}{" "}
              {language == "pt" ? "dias" : "days"} • {defaultValues.location}
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
