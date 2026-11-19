import styled from "styled-components";
import stageTalk from "../../assets/stage-talk.jpg";
import stageEvent from "../../assets/stage-event.jpg";
import type { Language } from "../../pages/Home";
import { about, aboutHighlights } from "./content";
import { LitText } from "./LitText";
import { RevealTitle } from "./RevealTitle";

interface AboutProps { language: Language; }

export function RefAbout({ language }: AboutProps) {
  const t = about[language];

  return (
    <Section id="sobre" className="r-wrap">
      <span className="r-eyebrow">{t.eyebrow}</span>
      <RevealTitle lines={t.title} className="r-h2 title" />

      <div className="grid">
        <div className="photos" data-reveal>
          <figure className="card main">
            <img src={stageTalk} alt={language === "pt" ? "Jean Victor falando ao microfone em um palco" : "Jean Victor speaking on stage"} loading="lazy" />
          </figure>
          <figure className="card second">
            <img src={stageEvent} alt={language === "pt" ? "Jean Victor apresentando em um evento ao ar livre" : "Jean Victor presenting at an outdoor event"} loading="lazy" />
          </figure>
          <svg className="badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="about-badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <circle cx="60" cy="60" r="58" />
            <text><textPath href="#about-badge-circle">{t.badge}</textPath></text>
            <text className="star" x="60" y="67" textAnchor="middle">✦</text>
          </svg>
        </div>

        <div className="copy">
          <LitText className="lead" text={t.lead} highlights={aboutHighlights} />
          {t.paragraphs.map((paragraph) => (
            <p className="text" key={paragraph} data-reveal>{paragraph}</p>
          ))}

          <div className="stats" data-reveal>
            {t.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="chips" data-reveal>
            {t.education.map((item) => (
              <span className="r-pill" key={item}>
                <i className="bx bxs-graduation" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding-block: clamp(8rem, 14vw, 11rem);

  .title { margin-top: 1.4rem; }

  .grid {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: clamp(2.5rem, 6vw, 5rem);
    margin-top: clamp(3rem, 6vw, 5rem);
    align-items: start;
  }

  .photos {
    position: sticky;
    top: 7rem;
  }

  /* Duas fotos de palco sobrepostas, inclinadas para lados opostos. */
  .photos { padding-bottom: 22%; }
  .card {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 28px;
    background: var(--ink-2);
    box-shadow: 0 30px 80px rgba(0,0,0,.45);
    transition: transform .8s var(--expo);
  }
  .card img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
  .main { width: 84%; transform: rotate(-4deg); }
  .main img { object-position: 50% 20%; }
  .second {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    border: 6px solid var(--ink);
    outline: 1px solid var(--line);
    transform: rotate(5deg);
  }
  .second img { object-position: 45% 25%; }
  .photos:hover .main { transform: rotate(-2deg) translateY(-6px); }
  .photos:hover .second { transform: rotate(2deg) translate(6px, -4px); }

  .badge {
    position: absolute;
    top: -2.6rem;
    right: 4%;
    width: 8.5rem;
    height: 8.5rem;
    animation: spin 14s linear infinite;
  }
  .badge circle { fill: var(--amber); }
  .badge text { fill: var(--ink); font-family: var(--mono); font-size: 8.6px; font-weight: 500; letter-spacing: .14em; }
  .badge .star { font-size: 18px; letter-spacing: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .lead {
    font-family: var(--display);
    font-size: clamp(1.6rem, 3vw, 2.25rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -.025em;
  }

  .text {
    margin-top: 1.6rem;
    max-width: 38rem;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.7;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .9rem;
    margin-top: 2.6rem;
  }
  .stat {
    padding: 1.4rem 1.5rem;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: rgba(255,255,255,.03);
  }
  .stat strong {
    display: block;
    font-family: var(--display);
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -.03em;
  }
  .stat span { display: block; margin-top: .6rem; color: var(--muted); font-size: .85rem; line-height: 1.4; }

  .chips { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 1.6rem; }
  .chips i { color: var(--sky); }

  @media (max-width: 860px) {
    .grid { grid-template-columns: 1fr; }
    .photos { position: relative; top: 0; max-width: 22rem; margin-inline: auto; }
    .badge { right: 0; width: 7rem; height: 7rem; }
  }
`;
