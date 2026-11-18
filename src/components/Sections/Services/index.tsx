import { Language } from "../../../pages/Home";
import { myExperiences } from "../../../data/MyExperiences";
import { myTexts } from "../../../data/MyTexts";
import { useEffect, useRef } from "react";
import { SplitWords } from "../../Effects/SplitWords";
import { clamp01, subscribeScroll } from "../../Effects/scroll";
import { ServicesContainer } from "./styles";

interface ExperiencesProps { language: Language; }

const monthYear = (date: Date, language: Language) =>
  new Intl.DateTimeFormat(language === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

export function Experiences({ language }: ExperiencesProps) {
  const t = myTexts[0].experiences.translations[language];
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // A linha da timeline preenche conforme a página rola.
  useEffect(() => {
    const timeline = timelineRef.current;
    const fill = fillRef.current;
    if (!timeline || !fill) return;
    return subscribeScroll(() => {
      const rect = timeline.getBoundingClientRect();
      const progress = clamp01((window.innerHeight * 0.6 - rect.top) / rect.height);
      fill.style.transform = `scaleY(${progress})`;
    });
  }, []);

  return (
    <ServicesContainer id="experience" className="section-shell">
      <div className="container experience-layout">
        <header className="section-heading experience-heading" data-reveal>
          <span className="section-eyebrow">{t.eyebrow}</span>
          <SplitWords className="section-title" text={t.title} accent={2} />
          <p className="section-intro">{t.intro}</p>
        </header>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-fill" ref={fillRef} />
          </div>
          {myExperiences.map((experience, index) => {
            const role = experience.translations[language];
            const current = experience.defaultValues.status === "a";
            return (
              <article className="timeline-item" key={experience.id} data-reveal="slide">
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-card" data-glow>
                  <div className="timeline-topline">
                    <div>
                      <p className="company">{experience.defaultValues.companyName}</p>
                      <h3>{role.jobTitle}</h3>
                    </div>
                    <p className="period">
                      {monthYear(experience.defaultValues.startDate, language)} — {current
                        ? language === "pt" ? "Atual" : "Present"
                        : monthYear(experience.defaultValues.exitDate, language)}
                    </p>
                  </div>
                  <div className="experience-meta">
                    <span>{role.employmentType}</span>
                    <span>{experience.defaultValues.location}</span>
                  </div>
                  <ul>
                    {Array.isArray(role.children) && role.children.slice(0, 4).map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </ServicesContainer>
  );
}
