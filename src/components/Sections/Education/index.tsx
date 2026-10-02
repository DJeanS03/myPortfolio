import { Language } from "../../../pages/Home";
import { EducationContainer } from "./styles";

interface EducationProps { language: Language; }

export function Education({ language }: EducationProps) {
  const copy = language === "pt"
    ? {
        eyebrow: "Formação & pesquisa",
        title: "Base acadêmica conectada à prática.",
        degreeLabel: "Formação",
        degree: "Bacharelado Interdisciplinar em Ciência e Tecnologia",
        university: "Universidade Federal da Bahia (UFBA)",
        degreePeriod: "2021 — 2025",
        researchLabel: "Iniciação científica",
        research: "Projeto KubeRNP · UFBA / RNP",
        researchDescription: "Pesquisa e desenvolvimento envolvendo Kubernetes, redes e uma prova de conceito de Digital Twin com ContainerLab.",
        languageLabel: "Idioma",
        english: "Inglês avançado · C1",
        englishDescription: "Uso frequente em documentação, estudo e contextos técnicos.",
      }
    : {
        eyebrow: "Education & research",
        title: "Academic foundations connected to practice.",
        degreeLabel: "Education",
        degree: "Interdisciplinary Bachelor's Degree in Science and Technology",
        university: "Federal University of Bahia (UFBA)",
        degreePeriod: "2021 — 2025",
        researchLabel: "Undergraduate research",
        research: "KubeRNP Project · UFBA / RNP",
        researchDescription: "Research and software development involving Kubernetes, networking and a Digital Twin proof of concept with ContainerLab.",
        languageLabel: "Language",
        english: "Advanced English · C1",
        englishDescription: "Frequent use in technical documentation, study and software contexts.",
      };

  return (
    <EducationContainer id="education" className="section-shell">
      <div className="container">
        <header className="section-heading" data-reveal>
          <span className="section-eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
        </header>

        <div className="education-grid">
          <article data-reveal>
            <span>{copy.degreeLabel}</span>
            <h3>{copy.degree}</h3>
            <p>{copy.university}</p>
            <small>{copy.degreePeriod}</small>
          </article>
          <article data-reveal>
            <span>{copy.researchLabel}</span>
            <h3>{copy.research}</h3>
            <p>{copy.researchDescription}</p>
          </article>
          <article data-reveal>
            <span>{copy.languageLabel}</span>
            <h3>{copy.english}</h3>
            <p>{copy.englishDescription}</p>
          </article>
        </div>
      </div>
    </EducationContainer>
  );
}
