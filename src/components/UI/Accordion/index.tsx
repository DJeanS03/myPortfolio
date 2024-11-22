import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  Arrow,
  InfoLine,
} from "./styles";

interface AccordionProps {
  companyName: string;
  jobTitle: string;
  employmentType: string;
  startDate: Date; // Data de início
  location: string;
  children: React.ReactNode;
}

export function Accordion({
  companyName,
  jobTitle,
  employmentType,
  startDate,
  location,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Função para calcular o tempo desde a data de início
  const calculateDuration = (startDate: Date) => {
    const now = new Date();
    const duration = now.getTime() - startDate.getTime();
    const days = Math.floor(duration / (1000 * 60 * 60 * 24) - 1); //verificar data correta
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    return { years, months, remainingDays };
  };

  const { years, months, remainingDays } = calculateDuration(startDate);

  const formattedStartDate = startDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  return (
    <AccordionContainer>
      <div>
        <AccordionHeader onClick={toggleAccordion}>
          <div>
            <strong>{jobTitle}</strong> - {companyName} ({employmentType})
            <InfoLine>
              {formattedStartDate} - Present • {years} years {months} months{" "}
              {remainingDays} days • {location}.
            </InfoLine>
          </div>

          <Arrow isOpen={isOpen}>
            <i className="bx bx-up-arrow-alt experiences__icon"></i>
          </Arrow>
        </AccordionHeader>
        <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
      </div>
    </AccordionContainer>
  );
}
