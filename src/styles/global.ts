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
    font-size: .78rem;
    font-weight: 600;
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
    max-width: 16ch;
    font-size: clamp(2rem, 5vw, 4.5rem);
    font-weight: 600;
    letter-spacing: -.045em;
  }

  .section-intro {
    max-width: 62ch;
    margin-top: 1.2rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: clamp(1rem, 1.7vw, 1.08rem);
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(26px);
    transition:
      opacity .7s cubic-bezier(.2,.75,.2,1),
      transform .7s cubic-bezier(.2,.75,.2,1);
  }

  [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
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
