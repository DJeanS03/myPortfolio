import { useState } from "react";
import styled from "styled-components";
import type { Language } from "../../pages/Home";
import { stack } from "./content";
import { RevealTitle } from "./RevealTitle";

interface StackProps { language: Language; }

// Abas à esquerda com a contagem de itens; chips em relevo à direita.
export function RefStack({ language }: StackProps) {
  const t = stack[language];
  const [active, setActive] = useState(0);
  const group = t.groups[active] ?? t.groups[0];

  return (
    <Section id="stack">
      <div className="r-wrap">
        <span className="r-eyebrow">{t.eyebrow}</span>
        <RevealTitle lines={t.title} className="r-h2 title" />

        <div className="layout" data-reveal>
          <div className="tabs" role="tablist" aria-label={t.eyebrow}>
            {t.groups.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <span>{item.name}</span>
                <small>{String(item.items.length).padStart(2, "0")}</small>
              </button>
            ))}
          </div>

          <div className="panel" role="tabpanel">
            {group.note && <p className="note">{group.note}</p>}
            <div className="chips" key={active}>
              {group.items.map((item, index) => (
                <span className="chip" key={item} style={{ animationDelay: `${index * 40}ms` }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="education" data-reveal>
          <span className="r-eyebrow muted">{t.educationLabel}</span>
          <div className="pills">
            {t.education.map((item) => <span className="r-pill" key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding-block: clamp(6rem, 12vw, 8rem);

  .title { margin-top: 1.4rem; }

  .layout {
    display: grid;
    grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
    gap: 1.6rem;
    margin-top: clamp(3rem, 6vw, 4.5rem);
    align-items: start;
  }

  .tabs { display: grid; gap: .3rem; }
  .tabs button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.05rem 1.2rem;
    border-radius: 14px;
    background: transparent;
    color: var(--muted);
    font-family: var(--display);
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition: background .3s ease, color .3s ease;
  }
  .tabs button:hover { color: var(--text); background: rgba(255,255,255,.04); }
  .tabs button small { font-family: var(--mono); font-size: .7rem; opacity: .7; }
  .tabs button.is-active { background: var(--sky); color: var(--ink); }

  .panel {
    min-height: 17rem;
    padding: clamp(1.4rem, 3vw, 2rem);
    border: 1px solid var(--line);
    border-radius: 28px;
    background: rgba(255,255,255,.02);
  }
  .note {
    margin-bottom: 1.2rem;
    color: var(--lilac);
    font-family: var(--mono);
    font-size: .72rem;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .chips { display: flex; flex-wrap: wrap; gap: .8rem; }
  .chip {
    padding: .7rem 1.1rem;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,.04);
    box-shadow: inset 0 -3px 0 rgba(168,216,255,.33);
    font-family: var(--display);
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: 600;
    animation: chip-in .5s var(--expo) both;
  }
  @keyframes chip-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

  .education { margin-top: 3rem; }
  .muted { color: var(--muted); }
  .pills { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 1rem; }

  @media (max-width: 860px) {
    .layout { grid-template-columns: 1fr; }
    .tabs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .tabs button { padding: .85rem 1rem; font-size: .9rem; }
  }
`;
