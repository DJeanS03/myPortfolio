import { useMemo, useState } from "react";
import { Button } from "../../UI/Button";
import { SkilsContainer } from "./styles";
import { myTexts } from "../../../data/MyTexts";

type Language = "en" | "pt";

interface SkillsProps {
  language: Language;
}

type Group = {
  title: Record<Language, string>;
  items: string[];
  extra?: string; // fica menor e não polui
};

export function Skills({ language }: SkillsProps) {
  const [showAll, setShowAll] = useState(false);

  const t =
    myTexts[0].skill.translations[language] || myTexts[0].skill.translations.en;

  const groups = useMemo<Group[]>(() => {
    // Versão curta (limpa): só o essencial
    if (!showAll) {
      return [
        {
          title: { en: "Front-End", pt: "Front-End" },
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: { en: "Back-End", pt: "Back-End" },
          items: ["Node.js", "NestJS", "Express", "Python / FastAPI", "REST / GraphQL"],
        },
        {
          title: { en: "DevOps & Cloud", pt: "DevOps & Cloud" },
          items: ["Docker", "Kubernetes", "CI/CD", "AWS"],
        },
        {
          title: { en: "Data & AI", pt: "Dados & IA" },
          items: ["PostgreSQL", "MongoDB", "Redis", "pgvector", "OpenAI / LangChain / RAG"],
        },
      ];
    }

    // Versão completa (fiel ao CV): detalha, mas ainda organizado
    return [
      {
        title: { en: "Front-End", pt: "Front-End" },
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: { en: "Back-End", pt: "Back-End" },
        items: ["Node.js", "NestJS", "Express", "Python", "FastAPI", "REST", "GraphQL"],
      },
      {
        title: { en: "Databases", pt: "Bancos de Dados" },
        items: ["PostgreSQL", "MongoDB", "Redis", "pgvector"],
      },
      {
        title: { en: "DevOps & Cloud", pt: "DevOps & Cloud" },
        items: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "GitLab CI"],
        extra: "AWS: EC2, Lightsail, S3, Lambda, CloudWatch",
      },
      {
        title: { en: "Testing & Quality", pt: "Testes & Qualidade" },
        items: ["Jest", "Cypress", "Pytest", "Clean Architecture", "Code Review"],
      },
      {
        title: { en: "GenAI & Automation", pt: "IA & Automação" },
        items: ["OpenAI", "LangChain", "RAG", "Playwright", "Selenium", "BeautifulSoup", "Requests", "APIFLASH"],
      },
    ];
  }, [showAll]);

  return (
    <SkilsContainer id="skills">
      <div className="skills__container container grid">
        <div className="skills__data">
          <h3
            className="section__subtitle"
            dangerouslySetInnerHTML={{ __html: t.skill__subtitle }}
          />
          <h2 className="section__title">{t.skill__title}</h2>
          <p className="skills__description">{t.skill__description}</p>

          <div className="skills__actions">
            <Button text={t.skill__button} url="#projects" />
            <button
              type="button"
              className="skills__toggle"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? t.skill__toggle__less : t.skill__toggle__more}
            </button>
          </div>
        </div>

        <div className="skills__lists">
          {groups.map((g) => (
            <div key={g.title.en} className="skills__group">
              <h3 className="skills__groupTitle">{g.title[language]}</h3>
              <ul className="skills__items">
                {g.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
              {g.extra ? <p className="skills__extra">{g.extra}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </SkilsContainer>
  );
}
