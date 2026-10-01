import type { CSSProperties } from "react";
import { ExpertiseContainer } from "./styles";

export interface Expertise {
  id: number;
  icon: string;
  translations: {
    en: { title: string; description: string };
    pt: { title: string; description: string };
  };
}

interface ExpertiseProps {
  myExpertise: Expertise;
  language: "en" | "pt";
  index?: number;
}

export function ExpertiseCard({ myExpertise, language, index = 0 }: ExpertiseProps) {
  const translation = myExpertise.translations[language];

  return (
    <ExpertiseContainer style={{ "--index": index } as CSSProperties}>
      <div className="expertise-number">0{index + 1}</div>
      <i className={`${myExpertise.icon} expertise-icon`} aria-hidden="true" />
      <h3>{translation.title}</h3>
      <p>{translation.description}</p>
    </ExpertiseContainer>
  );
}
