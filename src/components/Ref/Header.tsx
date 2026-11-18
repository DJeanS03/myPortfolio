import styled from "styled-components";
import type { Language } from "../../pages/Home";
import { nav } from "./content";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

// Barra flutuante em pílula, com vidro fosco, idiomas e botão de contratação.
export function RefHeader({ language, onLanguageChange }: HeaderProps) {
  const t = nav[language];

  return (
    <Bar>
      <nav aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
        <a className="brand" href="#topo" aria-label="Jean Victor">
          <span className="mark">JV</span>
          <span className="name">jeanvictor<em>/dev</em></span>
        </a>

        <ul className="links">
          {t.links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>
                <span data-text={label}>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="actions">
          <div className="lang" role="group" aria-label="Idioma / Language">
            {(["pt", "en"] as Language[]).map((code) => (
              <button
                key={code}
                type="button"
                className={language === code ? "is-active" : ""}
                aria-pressed={language === code}
                onClick={() => onLanguageChange(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="hire" href="#contato" data-cursor="">
            <span className="ping" aria-hidden="true"><i /><i /></span>
            {t.hire}
          </a>
        </div>
      </nav>
    </Bar>
  );
}

const Bar = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 70;
  padding: 1rem 1rem 0;

  nav {
    max-width: 80rem;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: .55rem .6rem .55rem 1.1rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(12, 14, 20, .55);
    backdrop-filter: blur(24px);
  }

  .brand { display: inline-flex; align-items: center; gap: .6rem; }
  .mark {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: .6rem;
    background: linear-gradient(135deg, var(--sky), var(--lilac));
    color: var(--ink);
    font-family: var(--display);
    font-weight: 800;
    font-size: .8rem;
  }
  .name { font-family: var(--display); font-weight: 800; font-size: 1rem; letter-spacing: -.02em; }
  .name em { font-style: normal; color: var(--muted); font-weight: 600; }

  .links { display: flex; gap: .2rem; }
  .links a {
    display: block;
    padding: .5rem .85rem;
    border-radius: 999px;
    color: var(--muted);
    font-size: .875rem;
    transition: color .25s ease, background .25s ease;
  }
  .links a:hover { color: var(--text); background: rgba(255,255,255,.05); }

  .actions { display: flex; align-items: center; gap: .6rem; }

  .lang {
    display: flex;
    padding: .2rem;
    border: 1px solid var(--line);
    border-radius: 999px;
  }
  .lang button {
    padding: .3rem .6rem;
    border-radius: 999px;
    background: transparent;
    color: var(--muted);
    font-family: var(--mono);
    font-size: .7rem;
    cursor: pointer;
  }
  .lang button.is-active { background: rgba(255,255,255,.1); color: var(--text); }

  .hire {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    padding: .65rem 1.15rem;
    border-radius: 999px;
    background: var(--text);
    color: var(--ink);
    font-size: .875rem;
    font-weight: 600;
    transition: transform .3s var(--expo);
  }
  .hire:hover { transform: translateY(-2px); }

  .ping { position: relative; display: inline-flex; width: .5rem; height: .5rem; }
  .ping i { position: absolute; inset: 0; border-radius: 50%; background: var(--mint); }
  .ping i:first-child { animation: ping 1.4s cubic-bezier(0, 0, .2, 1) infinite; opacity: .75; }
  @keyframes ping { 75%, 100% { transform: scale(2.2); opacity: 0; } }

  @media (max-width: 900px) {
    .links { display: none; }
  }

  @media (max-width: 520px) {
    padding: .75rem .75rem 0;
    .name { display: none; }
    .hire { padding: .6rem .9rem; font-size: .8rem; }
  }
`;
