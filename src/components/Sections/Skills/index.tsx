import { useMemo, useState } from "react";
import { Language } from "../../../pages/Home";
import { myTexts } from "../../../data/MyTexts";
import { SplitWords } from "../../Effects/SplitWords";
import { SkilsContainer } from "./styles";

interface SkillsProps { language: Language; }

type Level = "practice" | "study" | "occasional";

type Group = {
  number: string;
  level: Level;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: string[];
};

const levelLabel: Record<Level, Record<Language, string>> = {
  practice: { pt: "Experiência prática", en: "Project experience" },
  study: { pt: "Em estudo", en: "Currently learning" },
  occasional: { pt: "Uso pontual", en: "Occasional use" },
};

// Grupos sempre visíveis: o que uso no trabalho e o que estou estudando.
const coreGroups: Group[] = [
  {
    number: "01",
    level: "practice",
    title: { en: "Back-End", pt: "Back-End" },
    description: { en: "Services, APIs and automation.", pt: "Serviços, APIs e automações." },
    items: ["Node.js", "TypeScript", "NestJS", "Express", "Python", "REST APIs"],
  },
  {
    number: "02",
    level: "practice",
    title: { en: "Front-End", pt: "Front-End" },
    description: { en: "Product interfaces and web applications.", pt: "Interfaces de produto e aplicações web." },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "03",
    level: "practice",
    title: { en: "Data & integrations", pt: "Dados & integrações" },
    description: { en: "Persistence, queries and connected systems.", pt: "Persistência, consultas e sistemas conectados." },
    items: ["PostgreSQL", "Oracle", "SQL", "Fluig", "System integrations"],
  },
  {
    number: "04",
    level: "practice",
    title: { en: "Delivery", pt: "Entrega" },
    description: { en: "Build, ship and maintain.", pt: "Construir, entregar e manter." },
    items: ["Docker", "CI/CD", "GitHub Actions", "Git", "Code Review"],
  },
  {
    number: "05",
    level: "study",
    title: { en: "Applied AI", pt: "IA aplicada" },
    description: {
      en: "Topics I am studying in my postgraduate program and on my own.",
      pt: "Temas que estudo na pós-graduação e por conta própria.",
    },
    items: ["LLMs", "RAG", "Embeddings", "AI system architecture", "AI model integration"],
  },
];

const extraGroups: Group[] = [
  {
    number: "06",
    level: "occasional",
    title: { en: "Also used", pt: "Também usei" },
    description: {
      en: "Used in projects or studies, without the same depth.",
      pt: "Usadas em projetos ou estudos, sem a mesma profundidade.",
    },
    items: ["PHP/Laravel", "Selenium", "Jest", "Cypress", "FastAPI", "MongoDB", "AWS", "LangChain", "OpenAI API"],
  },
];

export function Skills({ language }: SkillsProps) {
  const [showAll, setShowAll] = useState(false);
  const t = myTexts[0].skill.translations[language];
  const groups = useMemo(() => showAll ? [...coreGroups, ...extraGroups] : coreGroups, [showAll]);

  return (
    <SkilsContainer id="skills" className="section-shell">
      <div className="container">
        <header className="section-heading" data-reveal>
          <span className="section-eyebrow">{t.eyebrow}</span>
          <SplitWords className="section-title" text={t.title} accent={2} />
          <p className="section-intro">{t.description}</p>
        </header>

        <div className="skills-grid">
          {groups.map((group) => (
            <article className="skill-group" key={group.number} data-reveal>
              <div className="skill-group-head">
                <span>{group.number}</span>
                <div>
                  <em className={`skill-level is-${group.level}`}>{levelLabel[group.level][language]}</em>
                  <h3>{group.title[language]}</h3>
                  <p>{group.description[language]}</p>
                </div>
              </div>
              <div className="skill-list">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-actions" data-reveal>
          <button type="button" onClick={() => setShowAll((value) => !value)}>
            {showAll ? t.toggleLess : t.toggleMore}
            <i className={`bx ${showAll ? "bx-minus" : "bx-plus"}`} aria-hidden="true" />
          </button>
          <a href="#projects">{t.button} <i className="bx bx-right-arrow-alt" aria-hidden="true" /></a>
        </div>
      </div>
    </SkilsContainer>
  );
}
