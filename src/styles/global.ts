import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5.5rem;
  }

  body {
    min-width: 320px;
    background:
      radial-gradient(circle at 82% 8%, rgba(4, 138, 191, .12), transparent 28rem),
      ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button, select {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  button, input, textarea, select { font: inherit; }
  button { border: 0; }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.titleColor};
    line-height: 1.08;
  }

  p { line-height: 1.75; }
  ul { list-style: none; }
  a { color: inherit; text-decoration: none; }
  img, svg { max-width: 100%; height: auto; }
  button, a { -webkit-tap-highlight-color: transparent; }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryColorLighter};
    outline-offset: 4px;
  }

  .container {
    width: min(1180px, calc(100% - 3rem));
    margin-inline: auto;
  }

  .section-shell {
    padding: clamp(5rem, 9vw, 8.5rem) 0;
  }

  .section-heading {
    max-width: 760px;
    margin-bottom: clamp(2.2rem, 5vw, 4rem);
  }

  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    margin-bottom: .9rem;
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: .74rem;
    font-weight: 500;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .section-eyebrow::before {
    content: "";
    width: 1.7rem;
    height: 1px;
    background: currentColor;
  }

  .section-title {
    max-width: 18ch;
    font-family: "Syne", "Poppins", sans-serif;
    font-size: clamp(1.6rem, 5.4vw, 4.8rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -.035em;
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  /* Títulos em colunas laterais (Sobre, Experiência, Contato) são menores
     para palavras longas como "oportunidade" não vazarem da coluna. */
  .about-copy .section-title,
  .experience-heading .section-title,
  .contact-copy .section-title {
    font-size: clamp(1.9rem, 3vw, 2.9rem);
  }

  @media (max-width: 900px) {
    .about-copy .section-title,
    .experience-heading .section-title,
    .contact-copy .section-title {
      font-size: clamp(2rem, 8vw, 3.4rem);
    }
  }

  /* ---------- Efeitos ---------- */

  /* Títulos palavra por palavra (SplitWords) */
  .split-words .sw { display: inline-block; margin-right: .22em; }
  .split-words .sw:last-child { margin-right: 0; }
  .split-words:not(.is-in) .sw { opacity: 0; }

  /* Gradiente animado no texto */
  .aurora {
    background: linear-gradient(90deg, #05A3D4, #8fd8ff, #a99bff, #8fd8ff, #05A3D4);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: aurora 8s linear infinite;
  }
  @keyframes aurora { to { background-position: 300% 0; } }
  .split-words:not(.on-screen) .aurora { animation-play-state: paused; }

  /* Texto vazado */
  .outline {
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(242, 242, 242, .55);
  }

  /* Parágrafo que acende com o scroll (ScrollLitText) */
  .scroll-lit .lw { opacity: .2; transition: opacity .3s linear; }
  .scroll-lit .lw.on { opacity: 1; }

  /* Luz que segue o mouse nos cards */
  [data-glow] { position: relative; }
  [data-glow]::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 3;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity .4s ease;
    background: radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(5, 163, 212, .16), transparent 60%);
  }
  [data-glow]:hover::after { opacity: 1; }

  /* Cursor customizado: some o nativo só com mouse, menos em campos de texto */
  @media (hover: hover) and (pointer: fine) {
    html.cursor-on, html.cursor-on *:not(input):not(textarea):not(select) { cursor: none !important; }
  }

  .section-intro {
    max-width: 62ch;
    margin-top: 1.2rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: clamp(1rem, 1.7vw, 1.08rem);
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(40px);
    transition:
      opacity .9s cubic-bezier(.16, 1, .3, 1),
      transform .9s cubic-bezier(.16, 1, .3, 1);
  }

  [data-reveal="slide"] { transform: translateX(-60px); }

  [data-reveal].is-visible {
    opacity: 1;
    transform: none;
  }

  /* Os efeitos ficam ligados mesmo com "reduzir movimento" no sistema,
     como o Motion faz por padrão. Só o scroll suave é desligado. */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: white;
  }

  ::-webkit-scrollbar { width: .55rem; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.containerColor}; }
  ::-webkit-scrollbar-thumb {
    background: #41414a;
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover { background: #575763; }
`;
