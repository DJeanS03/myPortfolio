import styled from "styled-components";

const expo = "cubic-bezier(.16, 1, .3, 1)";

// Sequência de entrada:
// 0–1,1 s   nome sobe pela máscara
// 0,6–2 s   foto sai do desfoque
// 1–1,9 s   textos de baixo sobem em cascata
// 1,5 s     selo aparece e segue girando
export const HomeContainer = styled.section`
  position: relative;
  padding: 7.5rem 0 0;
  overflow: hidden;

  /* ---------- Fundo ---------- */
  /* Brilhos do fundo feitos com radial-gradient em vez de filter: blur(90px).
     O blur com scale animado obrigava o navegador a redesenhar o desfoque
     inteiro a cada quadro; o gradiente só é movido pela GPU. */
  .hero-aura span {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .hero-aura span:nth-child(1) {
    width: 56rem;
    height: 56rem;
    left: 50%;
    top: 0;
    margin-left: -28rem;
    background: radial-gradient(closest-side, rgba(4, 138, 191, .2), rgba(4, 138, 191, .06) 55%, transparent);
    animation: drift-a 18s ease-in-out infinite alternate;
  }

  .hero-aura span:nth-child(2) {
    width: 44rem;
    height: 44rem;
    right: -16rem;
    top: -6rem;
    background: radial-gradient(closest-side, rgba(123, 108, 255, .14), rgba(123, 108, 255, .04) 55%, transparent);
    animation: drift-b 22s ease-in-out infinite alternate;
  }

  @keyframes drift-a { to { transform: translate3d(-8rem, 4rem, 0); } }
  @keyframes drift-b { to { transform: translate3d(-10rem, 8rem, 0); } }

  .hero-stage { position: relative; }

  /* ---------- Nome gigante ---------- */
  .hero-name {
    position: relative;
    z-index: 2;
    display: grid;
    justify-items: center;
    font-family: "Syne", "Poppins", sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    line-height: .86;
    pointer-events: none;
  }

  .mask {
    display: block;
    overflow: hidden;
    padding-bottom: .04em;
  }

  .mask > span {
    display: block;
    animation: mask-up 1.1s ${expo} both;
  }

  .name-solid {
    color: ${({ theme }) => theme.colors.titleColor};
    font-size: clamp(5rem, 21vw, 19rem);
    letter-spacing: -.04em;
  }

  .name-outline {
    font-size: clamp(3rem, 13vw, 11.5rem);
    letter-spacing: .01em;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(242, 242, 242, .55);
    animation-delay: .12s !important;
  }

  @keyframes mask-up {
    from { transform: translateY(110%); }
    to { transform: translateY(0); }
  }

  /* ---------- Foto ---------- */
  .hero-photo {
    position: relative;
    z-index: 1;
    width: min(330px, 62vw);
    margin: clamp(-7rem, -9vw, -2.5rem) auto 0;
    animation: blur-in 1.4s ${expo} .6s both;
  }

  @keyframes blur-in {
    from { opacity: 0; filter: blur(20px); transform: translateY(120px); }
    to { opacity: 1; filter: blur(0); transform: translateY(0); }
  }

  .photo-frame {
    padding: .55rem;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 2rem;
    background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.015));
    box-shadow: 0 30px 80px rgba(0,0,0,.4);
  }

  .photo-frame img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 1.6rem;
    filter: saturate(.92) contrast(1.03);
  }

  .hero-badge {
    position: absolute;
    top: -2.2rem;
    right: -3.2rem;
    width: 7.5rem;
    height: 7.5rem;
    animation:
      fade-in .4s ease-out 1.5s both,
      spin 14s linear infinite;
  }

  .hero-badge text {
    fill: ${({ theme }) => theme.colors.titleColor};
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: 8.4px;
    letter-spacing: .2em;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

  /* ---------- Linha de baixo ---------- */
  .hero-bottom {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2.5rem;
    margin-top: 3rem;
  }

  .hero-left {
    max-width: 34rem;
    animation: rise .8s ease-out 1s both;
  }

  .hero-right {
    display: grid;
    justify-items: end;
    gap: 1.4rem;
    animation: rise .8s ease-out 1.15s both;
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-role {
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: .74rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    margin-bottom: .9rem;
  }

  .hero-title {
    color: ${({ theme }) => theme.colors.titleColor};
    font-family: "Syne", "Poppins", sans-serif;
    font-size: clamp(1.4rem, 2.4vw, 2rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -.02em;
  }

  .hero-description {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .98rem;
  }

  .hero-location {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: .76rem;
    letter-spacing: .04em;
  }

  .hero-location i { color: ${({ theme }) => theme.colors.primaryColorLighter}; font-size: 1rem; }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: .8rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .hero-primary, .hero-secondary {
    min-height: 3.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .55rem;
    border-radius: 999px;
    padding: .8rem 1.4rem;
    font-weight: 600;
    transition: transform .4s ${expo}, background .25s ease, border-color .25s ease;
  }

  .hero-primary {
    background: ${({ theme }) => theme.colors.titleColor};
    color: #101012;
  }

  .hero-primary:hover { transform: translateY(-3px); background: white; }

  .hero-secondary {
    border: 1px solid rgba(255,255,255,.14);
    color: ${({ theme }) => theme.colors.titleColor};
    background: rgba(255,255,255,.02);
  }

  .hero-secondary:hover { border-color: rgba(255,255,255,.3); transform: translateY(-3px); }

  .hero-socials {
    display: flex;
    gap: 1.3rem;
  }

  .hero-socials a {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .9rem;
    transition: color .25s ease;
  }

  .hero-socials a:hover { color: ${({ theme }) => theme.colors.titleColor}; }
  .hero-socials i { font-size: 1.25rem; }

  /* ---------- Faixa ---------- */
  .hero-marquee {
    margin-top: clamp(3.5rem, 7vw, 6rem);
    padding-bottom: 2.5rem;
    animation: fade-in .8s ease-out 1.4s both;
  }

  @media (max-width: 760px) {
    padding-top: 6.5rem;
    .hero-bottom { flex-direction: column; align-items: stretch; }
    .hero-right { justify-items: start; }
    .hero-actions { justify-content: flex-start; }
    .hero-badge { right: -1.5rem; width: 6rem; height: 6rem; top: -1.6rem; }
  }

  @media (max-width: 560px) {
    .container { width: min(100% - 2rem, 1180px); }
    .hero-actions { align-items: stretch; width: 100%; }
    .hero-primary, .hero-secondary { width: 100%; }
  }
`;
