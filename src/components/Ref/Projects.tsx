import styled from "styled-components";
import type { Language } from "../../pages/Home";
import { myProjects, Project } from "../../data/MyProjects";
import { HorizontalScroll } from "../Effects/HorizontalScroll";
import { projects } from "./content";
import { RevealTitle } from "./RevealTitle";

interface ProjectsProps { language: Language; }

const host = (url?: string) => (url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "");

// Cor do selo de estado: no ar (verde), beta (âmbar), restante (azul).
const tone = (project: Project) => {
  if (project.id === 1) return "amber";
  if (project.link && project.featured) return "mint";
  return "sky";
};

export function RefProjects({ language }: ProjectsProps) {
  const t = projects[language];

  return (
    <Section id="projetos">
      <HorizontalScroll
        itemWidth="min(560px, 46vw)"
        header={
            <header className="r-wrap head">
              <div>
                <span className="r-eyebrow">{t.eyebrow}</span>
                <RevealTitle lines={t.title} className="r-h2 title" />
              </div>
              <p className="meta">{t.count(myProjects.length)}</p>
            </header>
        }
      >
        {myProjects.map((project, index) => {
          const copy = project.translations[language];
          return (
            <article className="project" key={project.id} data-cursor={project.link ? (language === "pt" ? "abrir" : "open") : undefined}>
              <div className="window">
                <div className="chrome">
                  <span className="lights" aria-hidden="true"><i /><i /><i /></span>
                  <span className="url">{host(project.link) || `${copy.name.toLowerCase()} · ${t.privateUrl}`}</span>
                </div>
                <div className="screen">
                  {project.photo ? (
                    <img
                      src={project.photo}
                      alt={language === "pt" ? `Captura de tela do projeto ${copy.name}` : `Screenshot of the ${copy.name} project`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-only">
                      <span className="ghost-name" aria-hidden="true">{copy.name}</span>
                      <ul>
                        {copy.highlights?.map((fact) => <li key={fact}>{fact}</li>)}
                      </ul>
                      <small>{t.hint}</small>
                    </div>
                  )}
                </div>
              </div>

              <div className="info">
                <div>
                  <p className="kicker">
                    <span className="num">{String(index + 1).padStart(2, "0")}</span>
                    <span>{copy.eyebrow}</span>
                    <span className={`status is-${tone(project)}`}>{copy.status}</span>
                  </p>
                  <h3>{copy.name}</h3>
                  <p className="desc">{copy.description}</p>
                  <p className="role">{copy.role}</p>
                </div>
                {project.link && (
                  <a className="open" href={project.link} target="_blank" rel="noreferrer" aria-label={`${copy.name}: ${language === "pt" ? "abrir" : "open"}`}>
                    <i className="bx bx-up-arrow-alt" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </HorizontalScroll>
    </Section>
  );
}

const Section = styled.section`
  padding-bottom: clamp(4rem, 8vw, 6rem);

  /* Sem a seção fixada (telas menores), o título precisa de respiro. */
  & > div:not(.is-pinned) { padding-top: clamp(6rem, 12vw, 8rem); }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }
  .title { margin-top: 1.2rem; font-size: clamp(2.5rem, 5vw, 3.2rem); line-height: 1; }
  .meta {
    max-width: 14rem;
    color: var(--muted);
    font-size: .9rem;
    line-height: 1.5;
    text-align: right;
  }

  /* Com a seção fixada, o título fica preso no topo enquanto os cartões andam. */
  .is-pinned .pin { padding-top: 5.5rem; }
  .is-pinned .head { width: 100%; }
  .is-pinned .title { font-size: clamp(2.2rem, 4vw, 3.1rem); }
  .is-pinned .screen { aspect-ratio: 16 / 9; max-height: 38svh; width: 100%; }

  .project { display: grid; gap: 1.4rem; }

  .window {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: var(--ink-2);
    box-shadow: 0 30px 70px rgba(0,0,0,.45);
  }
  .chrome {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding: .7rem 1rem;
    border-bottom: 1px solid var(--line);
  }
  .lights { display: flex; gap: .35rem; }
  .lights i { width: .6rem; height: .6rem; border-radius: 50%; background: #ff5f57; }
  .lights i:nth-child(2) { background: #febc2e; }
  .lights i:nth-child(3) { background: #28c840; }
  .url {
    overflow: hidden;
    color: var(--muted);
    font-family: var(--mono);
    font-size: .72rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .screen { position: relative; aspect-ratio: 16 / 10; overflow: hidden; }
  .screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform .8s var(--expo);
  }
  .project:hover .screen img { transform: scale(1.04); }

  .text-only {
    container-type: inline-size;
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.6rem;
    background:
      radial-gradient(circle at 85% 15%, rgba(201,184,255,.18), transparent 45%),
      radial-gradient(circle at 10% 90%, rgba(168,216,255,.12), transparent 45%),
      #0a0d14;
  }
  .ghost-name {
    color: transparent;
    -webkit-text-stroke: 1.2px rgba(238,242,250,.35);
    font-family: var(--display);
    font-size: min(12cqi, 4.6rem);
    font-weight: 800;
    line-height: .95;
    letter-spacing: -.03em;
    white-space: nowrap;
  }
  .text-only ul { display: grid; }
  .text-only li {
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .55rem 0;
    border-top: 1px solid rgba(255,255,255,.08);
    font-size: .88rem;
  }
  .text-only li::before {
    content: "";
    flex: 0 0 .4rem;
    height: .4rem;
    border-radius: 50%;
    background: var(--lilac);
  }
  .text-only small { color: var(--muted); font-family: var(--mono); font-size: .66rem; letter-spacing: .08em; }

  .info { display: flex; justify-content: space-between; gap: 1.2rem; align-items: flex-start; }

  .kicker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .6rem;
    color: var(--muted);
    font-family: var(--mono);
    font-size: .7rem;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .num { color: var(--sky); }
  .status {
    padding: .18rem .5rem;
    border-radius: .35rem;
    letter-spacing: .08em;
  }
  .status.is-mint { background: rgba(74,222,128,.14); color: var(--mint); }
  .status.is-amber { background: rgba(255,190,92,.14); color: var(--amber); }
  .status.is-sky { background: rgba(168,216,255,.12); color: var(--sky); }

  h3 {
    margin-top: .8rem;
    font-family: var(--display);
    font-size: clamp(1.6rem, 2.6vw, 1.9rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -.025em;
  }
  .desc { margin-top: .6rem; color: var(--muted); font-size: .9rem; line-height: 1.6; }
  .role { margin-top: .7rem; color: var(--sky); font-size: .8rem; }

  .open {
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid var(--line);
    border-radius: 50%;
    font-size: 1.3rem;
    transition: background .3s ease, color .3s ease;
  }
  .open i { transform: rotate(45deg); }
  .open:hover { background: var(--text); color: var(--ink); }

  /* Abaixo de 901px vira lista vertical. */
  @media (max-width: 900px) {
    .head { flex-direction: column; align-items: flex-start; }
    .meta { text-align: left; }
    .project { margin-top: 2.5rem; }
  }
`;
