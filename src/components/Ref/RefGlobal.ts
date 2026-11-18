import { createGlobalStyle } from "styled-components";

// Base visual do layout novo: paleta, tipografia e utilitários de texto.
export const RefGlobal = createGlobalStyle`
  :root {
    --ink: #06070b;
    --ink-2: #0c0f17;
    --text: #eef2fa;
    --muted: #98a2b6;
    --line: rgba(255, 255, 255, .1);
    --sky: #a8d8ff;
    --lilac: #c9b8ff;
    --amber: #ffbe5c;
    --mint: #4ade80;
    --pink: #ff7eb6;
    --display: "Syne", system-ui, sans-serif;
    --sans: "Inter", system-ui, sans-serif;
    --mono: "JetBrains Mono", ui-monospace, monospace;
    --expo: cubic-bezier(.16, 1, .3, 1);
  }

  html { scroll-padding-top: 6rem; }

  body {
    background: var(--ink);
    color: var(--text);
  }

  body, input, textarea, button, select { font-family: var(--sans); }
  h1, h2, h3, h4 { color: var(--text); }
  ::selection { background: var(--sky); color: var(--ink); }

  .r-wrap {
    width: 100%;
    max-width: 80rem;
    margin-inline: auto;
    padding-inline: clamp(1.25rem, 4vw, 2rem);
  }

  .r-eyebrow {
    display: block;
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: var(--sky);
  }

  .r-h2 {
    font-family: var(--display);
    font-weight: 800;
    letter-spacing: -.05em;
    line-height: .92;
    font-size: clamp(2.9rem, 9vw, 6rem);
  }

  .r-h2 .line { display: block; }
  .r-h2 .word { display: inline-block; white-space: nowrap; }

  .r-grad {
    background: linear-gradient(100deg, var(--sky), var(--lilac), var(--amber), var(--sky));
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: r-grad 8s linear infinite;
  }
  @keyframes r-grad { to { background-position: 300% 0; } }

  .r-outline { color: transparent; -webkit-text-stroke: 1.5px rgba(238, 242, 250, .75); }
  .r-sky { color: var(--sky); }
  .r-lilac { color: var(--lilac); }
  .r-amber { color: var(--amber); }
  .r-mint { color: var(--mint); }

  /* Título revelado letra a letra: começa escondido até o observer disparar. */
  .rv:not(.in) .rv-unit { opacity: 0; }
  .rv-unit { display: inline-block; }

  /* Parágrafo que acende com o scroll. */
  .lit .lw { opacity: .22; transition: opacity .35s linear; }
  .lit .lw.on { opacity: 1; }

  .r-pill {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem .9rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 255, 255, .04);
    color: var(--text);
    font-size: .8rem;
    line-height: 1.35;
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity .9s var(--expo), transform .9s var(--expo);
  }
  [data-reveal].is-visible { opacity: 1; transform: none; }
`;
