import type { CSSProperties } from "react";
import styled from "styled-components";
import type { Language } from "../../pages/Home";
import { services } from "./content";
import { RevealTitle } from "./RevealTitle";

interface ServicesProps { language: Language; }

const accents = {
  sky: "168, 216, 255",
  mint: "74, 222, 128",
  lilac: "201, 184, 255",
  amber: "255, 190, 92",
  pink: "255, 126, 182",
};

export function RefServices({ language }: ServicesProps) {
  const t = services[language];

  return (
    <Section className="r-wrap">
      <span className="r-eyebrow">{t.eyebrow}</span>
      <RevealTitle lines={t.title} className="r-h2 title" />

      <div className="grid">
        {t.items.map((item, index) => (
          <article
            key={item.title}
            className="card"
            data-reveal
            data-glow
            style={{ "--accent": accents[item.accent], transitionDelay: `${(index % 3) * 80}ms` } as CSSProperties}
          >
            <div className="top">
              <span className="icon"><i className={`bx ${item.icon}`} aria-hidden="true" /></span>
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding-bottom: clamp(6rem, 12vw, 8rem);

  .title { margin-top: 1.4rem; font-size: clamp(2.6rem, 7vw, 4.5rem); }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.1rem;
    margin-top: clamp(3rem, 6vw, 4.5rem);
  }

  .card {
    position: relative;
    overflow: hidden;
    padding: 1.75rem;
    min-height: 15rem;
    border: 1px solid var(--line);
    border-radius: 28px;
    background:
      radial-gradient(120% 90% at 0% 0%, rgba(var(--accent), .14), transparent 60%),
      var(--ink-2);
    transition: opacity .9s var(--expo), transform .9s var(--expo), border-color .35s ease;
  }
  .card:hover { border-color: rgba(var(--accent), .4); }

  .top { display: flex; justify-content: space-between; align-items: flex-start; }
  .icon {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: .8rem;
    background: rgb(var(--accent));
    color: var(--ink);
    font-size: 1.3rem;
  }
  .number { color: rgba(238,242,250,.3); font-family: var(--mono); font-size: .7rem; }

  h3 {
    margin-top: 2.2rem;
    font-family: var(--display);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -.025em;
  }

  p { margin-top: .7rem; color: var(--muted); font-size: .9rem; line-height: 1.6; }

  @media (max-width: 960px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
`;
