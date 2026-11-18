import { useEffect, useRef } from "react";
import styled from "styled-components";
import type { Language } from "../../pages/Home";
import { myExperiences } from "../../data/MyExperiences";
import { clamp01, subscribeScroll } from "../Effects/scroll";
import { experience, experienceDetails } from "./content";
import { RevealTitle } from "./RevealTitle";

interface ExperienceProps { language: Language; }

const monthsBetween = (start: Date, end: Date) =>
  (end.getUTCFullYear() - start.getUTCFullYear()) * 12 + (end.getUTCMonth() - start.getUTCMonth());

const duration = (months: number, language: Language) => {
  const total = Math.max(1, months);
  const years = Math.floor(total / 12);
  const rest = total % 12;
  const y = language === "pt" ? (years > 1 ? "anos" : "ano") : years > 1 ? "years" : "year";
  const m = language === "pt" ? (rest > 1 ? "meses" : "mês") : rest > 1 ? "months" : "month";
  if (years === 0) return `${rest} ${m}`;
  if (rest === 0) return `${years} ${y}`;
  return language === "pt" ? `${years} ${y} e ${rest} ${m}` : `${years} ${y} ${rest} ${m}`;
};

const period = (date: Date, language: Language) =>
  new Intl.DateTimeFormat(language === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric", timeZone: "UTC" })
    .format(date)
    .replace(".", "")
    .replace(" de ", " ");

export function RefExperience({ language }: ExperienceProps) {
  const t = experience[language];
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // A linha central preenche conforme a página rola.
  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;
    return subscribeScroll(() => {
      const rect = list.getBoundingClientRect();
      fill.style.transform = `scaleY(${clamp01((window.innerHeight * 0.6 - rect.top) / rect.height)})`;
    });
  }, []);

  return (
    <Section id="experiencia" className="r-wrap">
      <span className="r-eyebrow">{t.eyebrow}</span>
      <RevealTitle lines={t.title} className="r-h2 title" />

      <div className="list" ref={listRef}>
        <div className="rail" aria-hidden="true"><div className="fill" ref={fillRef} /></div>

        {myExperiences.map((item, index) => {
          const details = experienceDetails[item.id];
          const copy = details[language];
          const role = item.translations[language];
          const current = item.defaultValues.status === "a";
          const end = current ? new Date() : item.defaultValues.exitDate;
          const months = monthsBetween(item.defaultValues.startDate, end);

          return (
            <article className={`item ${index % 2 ? "is-right" : "is-left"}`} key={item.id}>
              <span className="dot" aria-hidden="true" />
              <div className="card" data-reveal data-glow>
                <div className="chips">
                  <span className="duration">{duration(months, language)}</span>
                  {current ? (
                    <span className="current"><i aria-hidden="true" />{t.current}</span>
                  ) : (
                    <span className="period">
                      {period(item.defaultValues.startDate, language)} — {period(item.defaultValues.exitDate, language)}
                    </span>
                  )}
                </div>
                <h3>{details.company}</h3>
                <p className="role">{role.jobTitle} · {role.employmentType}</p>
                <p className="summary">{copy.summary}</p>
                <ul>
                  {copy.pills.map((pill) => <li key={pill}>{pill}</li>)}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding-block: clamp(6rem, 12vw, 8rem);

  .title { margin-top: 1.4rem; }

  .list {
    position: relative;
    margin-top: clamp(3.5rem, 7vw, 6rem);
    display: grid;
    gap: 2.5rem;
  }

  .rail {
    position: absolute;
    top: 0; bottom: 0;
    left: 50%;
    width: 2px;
    margin-left: -1px;
    background: rgba(255,255,255,.08);
    overflow: hidden;
  }
  .fill {
    height: 100%;
    background: linear-gradient(to bottom, var(--sky), var(--lilac), var(--amber));
    transform: scaleY(0);
    transform-origin: top;
  }

  .item { position: relative; display: flex; }
  .item.is-left { justify-content: flex-start; }
  .item.is-right { justify-content: flex-end; }

  .dot {
    position: absolute;
    top: 2rem;
    left: 50%;
    width: .8rem;
    height: .8rem;
    margin-left: -.4rem;
    border-radius: 50%;
    background: var(--sky);
    box-shadow: 0 0 0 5px rgba(168,216,255,.15), 0 0 18px rgba(168,216,255,.6);
  }

  .card {
    width: calc(50% - 3rem);
    padding: 1.8rem;
    border: 1px solid var(--line);
    border-radius: 28px;
    background: var(--ink-2);
  }

  .chips { display: flex; flex-wrap: wrap; align-items: center; gap: .7rem; }
  .duration {
    padding: .25rem .65rem;
    border-radius: 999px;
    background: var(--sky);
    color: var(--ink);
    font-size: .75rem;
    font-weight: 600;
  }
  .current, .period {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    font-family: var(--mono);
    font-size: .7rem;
    letter-spacing: .18em;
    text-transform: uppercase;
  }
  .current { color: var(--mint); }
  .current i { width: .45rem; height: .45rem; border-radius: 50%; background: var(--mint); }
  .period { color: var(--muted); letter-spacing: .1em; }

  h3 {
    margin-top: 1.2rem;
    font-family: var(--display);
    font-size: clamp(1.8rem, 3.2vw, 2.25rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -.025em;
  }

  .role { margin-top: .5rem; color: var(--sky); font-size: .9rem; line-height: 1.5; }
  .summary { margin-top: 1rem; color: var(--muted); font-size: .92rem; line-height: 1.65; }

  ul { display: grid; gap: .5rem; margin-top: 1.2rem; justify-items: start; }
  li {
    padding: .45rem .85rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--text);
    font-size: .78rem;
    line-height: 1.35;
  }

  @media (max-width: 860px) {
    .rail { left: .4rem; }
    .dot { left: .4rem; }
    .item.is-left, .item.is-right { justify-content: flex-end; }
    .card { width: calc(100% - 2rem); padding: 1.4rem; }
  }
`;
