import styled from "styled-components";

const noise =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export const EffectsLayer = styled.div`
  /* Grão parado: animado, ele forçava a tela inteira (e o blur do header)
     a ser recomposta 10 vezes por segundo, e a 7% de opacidade o movimento
     quase não aparece. */
  .grain {
    position: fixed;
    inset: 0;
    z-index: 90;
    pointer-events: none;
    opacity: .06;
    background-image: url("${noise}");
  }

  .progress {
    position: fixed;
    inset: 0 0 auto;
    height: 2px;
    z-index: 120;
    transform-origin: left;
    transform: scaleX(0);
    background: linear-gradient(90deg, #05A3D4, #8fd8ff, #a99bff);
    pointer-events: none;
  }

  .cursor-dot, .cursor-ring {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 130;
    pointer-events: none;
    border-radius: 50%;
    opacity: 0;
    transition: opacity .3s ease;
  }

  /* Sem mix-blend-mode: ele obrigava o navegador a misturar o ponto com
     tudo o que está embaixo a cada movimento do mouse. */
  .cursor-dot {
    width: 6px;
    height: 6px;
    margin: -3px 0 0 -3px;
    background: #fff;
    box-shadow: 0 0 0 1px rgba(16, 16, 18, .6);
  }

  /* O anel cresce com transform: scale (feito pela GPU), não mudando
     width/height, que recalculava o layout a cada quadro. */
  .cursor-ring {
    width: 84px;
    height: 84px;
    margin: -42px 0 0 -42px;
    display: grid;
    place-items: center;
    border-radius: 0;
  }

  .cursor-ring .shape {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid rgba(242, 242, 242, .5);
    transform: scale(.45);
    transition: transform .35s cubic-bezier(.16, 1, .3, 1), background-color .3s ease, border-color .3s ease;
  }

  .cursor-ring span {
    position: relative;
    color: #101012;
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: .62rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity .2s ease;
  }

  .cursor-ring.is-big .shape {
    transform: scale(1);
    background-color: #F2F2F2;
    border-color: #F2F2F2;
  }

  .cursor-ring.is-big span { opacity: 1; }

  :root.cursor-on & .cursor-dot,
  :root.cursor-on & .cursor-ring { opacity: 1; }
`;
