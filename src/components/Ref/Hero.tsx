import styled from "styled-components";
import portrait from "../../assets/profile2.jpg";
import type { Language } from "../../pages/Home";
import { Marquee } from "../Effects/Marquee";
import { hero } from "./content";
import { Scramble } from "./Scramble";

interface HeroProps { language: Language; }

// Primeira dobra: nome gigante (sobrenome vazado atrás do retrato em arco),
// texto que embaralha entre papéis, localização, ações e a faixa inclinada.
export function RefHero({ language }: HeroProps) {
  const t = hero[language];

  return (
    <Section id="topo">
      <div className="glow" aria-hidden="true"><span /><span /></div>

      <p className="top-label">{t.top}</p>

      <h1 className="name" aria-label="Jean Victor">
        <span className="mask" aria-hidden="true"><span className="first">Jean</span></span>
        <span className="mask" aria-hidden="true"><span className="last">Victor</span></span>
      </h1>

      <div className="arch-line" aria-hidden="true" />
      <figure className="portrait">
        <img src={portrait} alt="Jean Victor" />
      </figure>
      <div className="fade" aria-hidden="true" />

      <div className="bottom r-wrap">
        <div className="left">
          <span className="r-eyebrow today">{t.today}</span>
          <p className="role">
            <Scramble words={t.roles} />
          </p>
          <p className="location">{t.location}</p>
        </div>
        <div className="right">
          <a className="talk" href="#contato" data-cursor="">{t.talk} <span aria-hidden="true">→</span></a>
          <a className="ghost" href="https://www.linkedin.com/in/jean-victor200" target="_blank" rel="noreferrer">{t.linkedin}</a>
        </div>
      </div>

      <div className="band">
        <Marquee items={t.band} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  height: 100svh;
  min-height: 640px;
  overflow: hidden;

  .glow span {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .glow span:nth-child(1) {
    width: 70rem; height: 70rem; left: 50%; top: -20rem; margin-left: -35rem;
    background: radial-gradient(closest-side, rgba(168,216,255,.13), rgba(168,216,255,.03) 55%, transparent);
    animation: drift-a 18s ease-in-out infinite alternate;
  }
  .glow span:nth-child(2) {
    width: 50rem; height: 50rem; right: -18rem; bottom: -12rem;
    background: radial-gradient(closest-side, rgba(201,184,255,.12), transparent);
    animation: drift-b 22s ease-in-out infinite alternate;
  }
  @keyframes drift-a { to { transform: translate3d(-6rem, 4rem, 0); } }
  @keyframes drift-b { to { transform: translate3d(-8rem, -6rem, 0); } }

  .top-label {
    position: absolute;
    top: 6.6rem;
    left: 0; right: 0;
    z-index: 1;
    text-align: center;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: .45em;
    text-transform: uppercase;
    animation: rise .8s ease-out .3s both;
  }

  .name {
    position: absolute;
    top: 8.2rem;
    left: 0; right: 0;
    z-index: 1;
    display: grid;
    justify-items: center;
    font-family: var(--display);
    font-weight: 800;
    text-transform: uppercase;
    line-height: .82;
    letter-spacing: -.05em;
    pointer-events: none;
  }
  .mask { display: block; overflow: hidden; padding-bottom: .03em; }
  .mask > span { display: block; animation: mask-up 1.1s var(--expo) both; }
  /* O tamanho também respeita a altura da tela, para o nome não invadir o texto de baixo. */
  .first { font-size: clamp(5rem, min(20vw, 25svh), 18rem); color: var(--text); }
  .last {
    font-size: clamp(3.4rem, min(13.5vw, 17svh), 12rem);
    letter-spacing: -.02em;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(238,242,250,.6);
    animation-delay: .12s !important;
  }
  @keyframes mask-up { from { transform: translateY(110%); } to { transform: translateY(0); } }

  /* Retrato em arco, com um contorno lilás deslocado atrás dele. */
  .portrait, .arch-line {
    position: absolute;
    left: 50%;
    bottom: 0;
    aspect-ratio: 4 / 5;
    border-radius: 999px 999px 0 0;
    transform: translateX(-50%);
  }
  .portrait {
    z-index: 2;
    height: min(60svh, 44vw, 620px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.14);
    border-bottom: 0;
    background: var(--ink-2);
    box-shadow: 0 -30px 90px rgba(168,216,255,.10);
    animation: portrait-in 1.4s var(--expo) .5s both;
  }
  .portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
    filter: saturate(.9) contrast(1.04);
  }
  .portrait::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(120% 60% at 50% 0%, rgba(168,216,255,.16), transparent 60%),
      linear-gradient(to top, rgba(6,7,11,.55), transparent 40%);
    pointer-events: none;
  }
  .arch-line {
    z-index: 1;
    height: calc(min(60svh, 44vw, 620px) + 3.2rem);
    border: 1px solid rgba(201,184,255,.35);
    border-bottom: 0;
    margin-left: 1.6rem;
    animation: arch-in 1.6s var(--expo) .7s both;
  }
  @keyframes arch-in {
    from { opacity: 0; transform: translate(-50%, 60px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  @keyframes portrait-in {
    from { opacity: 0; filter: blur(20px); transform: translate(-50%, 120px); }
    to { opacity: 1; filter: blur(0); transform: translate(-50%, 0); }
  }

  .fade {
    position: absolute;
    inset: auto 0 0;
    height: 42%;
    z-index: 3;
    background: linear-gradient(to top, var(--ink) 18%, rgba(6,7,11,.75) 48%, transparent);
    pointer-events: none;
  }

  .bottom {
    position: absolute;
    left: 0; right: 0;
    bottom: clamp(9.5rem, 19svh, 11.5rem);
    z-index: 4;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }

  .left { max-width: 26rem; animation: rise .8s ease-out 1s both; }
  .today { color: var(--muted); letter-spacing: .35em; }
  .role {
    min-height: 2.6em;
    margin-top: .7rem;
    color: var(--sky);
    font-family: var(--display);
    font-size: clamp(1.5rem, 2.6vw, 2.1rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -.02em;
  }
  .location { margin-top: .9rem; color: var(--muted); font-size: .875rem; line-height: 1.5; }

  .right {
    display: grid;
    justify-items: end;
    gap: .8rem;
    animation: rise .8s ease-out 1.15s both;
  }
  .talk {
    display: inline-flex;
    gap: .5rem;
    padding: 1rem 1.6rem;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 999px;
    background: rgba(12,15,23,.75);
    color: var(--text);
    font-family: var(--display);
    font-weight: 700;
    font-size: 1.05rem;
    transition: transform .4s var(--expo), border-color .3s ease;
  }
  .talk:hover { transform: translateY(-3px); border-color: rgba(255,255,255,.3); }
  .ghost {
    padding: .65rem 1.2rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    font-size: .875rem;
    transition: color .25s ease;
  }
  .ghost:hover { color: var(--text); }

  @keyframes rise { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }

  .band {
    position: absolute;
    left: 0; right: 0;
    bottom: clamp(1.2rem, 3svh, 2rem);
    z-index: 5;
    animation: rise .8s ease-out 1.4s both;
  }
  .band > div { background: var(--text); color: var(--ink); }
  .band i { color: var(--lilac); }

  @media (max-width: 760px) {
    .top-label { top: 5.6rem; letter-spacing: .3em; font-size: 10px; }
    .name { top: 7rem; }
    /* No celular o arco fica logo abaixo do nome, sem deixar vazio no meio. */
    .portrait, .arch-line { bottom: auto; }
    .portrait { top: 15rem; height: min(38svh, 70vw); }
    .arch-line { top: 13rem; height: calc(min(38svh, 70vw) + 2rem); margin-left: 1rem; }
    .bottom { flex-direction: column; align-items: stretch; bottom: 7rem; gap: 1.2rem; }
    .right { justify-items: stretch; grid-template-columns: 1fr 1fr; }
    .talk, .ghost { justify-content: center; text-align: center; }
    .talk { padding: .9rem 1rem; font-size: .95rem; }
  }
`;
