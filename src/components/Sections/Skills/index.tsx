import { useMemo, useState } from "react";
import { Language } from "../../../pages/Home";
import { myTexts } from "../../../data/MyTexts";
import { SkilsContainer } from "./styles";

interface SkillsProps { language: Language; }

type Group = {
  number: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: string[];
};

const coreGroups: Group[] = [
  {
    number: "01",
    title: { en: "Back-End", pt: "Back-End" },
    description: { en: "Services, APIs and integrations.", pt: "Serviços, APIs e integrações." },
    items: ["Node.js", "TypeScript", "NestJS", "Express", "Python", "FastAPI", "REST"],
  },
  {
    number: "02",
    title: { en: "Front-End", pt: "Front-End" },
    description: { en: "Product interfaces and web applications.", pt: "Interfaces de produto e aplicações web." },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Context API / Redux"],
  },
  {
    number: "03",
    title: { en: "Data", pt: "Dados" },
    description: { en: "Persistence, queries and modeling.", pt: "Persistência, consultas e modelagem." },
    items: ["PostgreSQL", "MongoDB", "SQL", "Data Modeling"],
  },
  {
    number: "04",
    title: { en: "Delivery", pt: "Entrega" },
    description: { en: "Build, ship and maintain.", pt: "Construir, entregar e manter." },
    items: ["Docker", "GitHub Actions", "CI/CD", "AWS", "Git", "Code Review"],
  },
];

const extraGroups: Group[] = [
  {
    number: "05",
    title: { en: "Quality", pt: "Qualidade" },
    description: { en: "Maintainable systems and safer changes.", pt: "Sistemas sustentáveis e mudanças mais seguras." },
    items: ["Jest", "Cypress", "Clean Architecture", "Scrum", "Kanban"],
  },
  {
    number: "06",
    title: { en: "AI & Automation", pt: "IA & Automação" },
    description: { en: "Tools used when they improve the solution.", pt: "Ferramentas usadas quando melhoram a solução." },
    items: ["OpenAI API", "LangChain", "RAG", "LLMs", "Web Scraping", "Selenium", "APIFLASH"],
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
          <h2 className="section-title">{t.title}</h2>
          <p className="section-intro">{t.description}</p>
        </header>

        <div className="skills-grid">
          {groups.map((group) => (
            <article className="skill-group" key={group.number} data-reveal>
              <div className="skill-group-head">
                <span>{group.number}</span>
                <div>
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
