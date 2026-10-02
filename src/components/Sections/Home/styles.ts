import styled from "styled-components";

export const HomeContainer = styled.section`
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: center;
  padding: 8rem 0 5rem;
  overflow: hidden;

  .hero-glow {
    position: absolute;
    width: 36rem;
    height: 36rem;
    right: -14rem;
    top: 4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primaryColor};
    opacity: .08;
    filter: blur(80px);
    pointer-events: none;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(320px, .8fr);
    align-items: center;
    gap: clamp(3rem, 8vw, 7rem);
  }

  .hero-role {
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-weight: 600;
    letter-spacing: .04em;
    margin-bottom: 1rem;
  }

  h1 {
    max-width: 11ch;
    font-size: clamp(3.3rem, 4.2vw, 4rem);
    font-weight: 600;
    letter-spacing: -.065em;
  }

  .hero-description {
    max-width: 58ch;
    margin-top: 1.7rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: clamp(1rem, 1.6vw, 1.15rem);
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .hero-primary, .hero-secondary {
    min-height: 3.15rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .55rem;
    border-radius: .8rem;
    padding: .82rem 1.15rem;
    font-weight: 600;
    transition: transform .25s ease, background .25s ease, border-color .25s ease;
  }

  .hero-primary {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: white;
  }

  .hero-primary:hover { transform: translateY(-2px); background: ${({ theme }) => theme.colors.primaryColorLighter}; }

  .hero-secondary {
    border: 1px solid rgba(255,255,255,.12);
    color: ${({ theme }) => theme.colors.titleColor};
    background: rgba(255,255,255,.02);
  }

  .hero-secondary:hover { border-color: rgba(255,255,255,.28); transform: translateY(-2px); }

  .hero-socials {
    display: flex;
    gap: 1.3rem;
    margin-top: 2rem;
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

  .hero-visual { position: relative; justify-self: end; }

  .photo-frame {
    width: min(390px, 34vw);
    min-width: 300px;
    position: relative;
    padding: .65rem;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 2rem;
    background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.015));
    box-shadow: 0 30px 80px rgba(0,0,0,.35);
    transform: rotate(2deg);
    transition: transform .45s cubic-bezier(.2,.75,.2,1);
  }

  .hero-visual:hover .photo-frame { transform: rotate(0deg) translateY(-4px); }

  .photo-frame img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 1.55rem;
    filter: saturate(.92) contrast(1.03);
  }

  .photo-caption {
    position: absolute;
    left: 1.4rem;
    right: 1.4rem;
    bottom: 1.4rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .8rem 1rem;
    border-radius: .9rem;
    background: rgba(13,13,15,.72);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,.08);
  }

  .photo-caption span { color: white; font-weight: 600; }
  .photo-caption small { color: ${({ theme }) => theme.colors.textLighter}; }

  .visual-note {
    position: absolute;
    z-index: 2;
    padding: .7rem .9rem;
    border-radius: .8rem;
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(18,18,20,.82);
    backdrop-filter: blur(18px);
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .74rem;
    box-shadow: 0 16px 40px rgba(0,0,0,.25);
  }

  .note-top { top: 12%; left: -20%; }
  .note-bottom { right: -18%; bottom: 18%; }

  @media (max-width: 900px) {
    min-height: auto;
    padding-top: 7rem;
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 760px; }
    .hero-visual { justify-self: center; }
    .photo-frame { width: min(420px, 78vw); }
    .note-top { left: -8%; }
    .note-bottom { right: -8%; }
  }

  @media (max-width: 560px) {
    padding-bottom: 4rem;
    .hero-grid { gap: 3.5rem; }
    .container { width: min(100% - 2rem, 1180px); }
    h1 { font-size: clamp(3rem, 15vw, 4.7rem); }
    .hero-actions { align-items: stretch; }
    .hero-primary, .hero-secondary { width: 100%; }
    .hero-socials { justify-content: center; }
    .visual-note { display: none; }
    .photo-caption { flex-direction: column; gap: .1rem; }
  }
`;
