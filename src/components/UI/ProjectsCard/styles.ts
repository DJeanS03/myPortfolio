import styled from "styled-components";

export const ProjectsCardContainer = styled.div<{ $featured: boolean }>`
  .project-card {
    display: grid;
    grid-template-columns: ${({ $featured }) => ($featured ? "minmax(0, 1.05fr) minmax(320px, .95fr)" : "1fr")};
    min-height: ${({ $featured }) => ($featured ? "430px" : "100%")};
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.075);
    border-radius: 1.4rem;
    background: ${({ theme }) => theme.colors.containerColor};
    transition: transform .4s cubic-bezier(.2,.75,.2,1), border-color .35s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(4,138,191,.4);
  }

  .project-visual {
    position: relative;
    overflow: hidden;
    min-height: ${({ $featured }) => ($featured ? "390px" : "220px")};
    background: linear-gradient(145deg, rgba(4,138,191,.18), rgba(255,255,255,.025));
  }

  .project-visual img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    transition: transform .7s cubic-bezier(.2,.75,.2,1), filter .5s ease;
  }

  .project-card:hover .project-visual img { transform: scale(1.035); filter: saturate(1.06); }

  .project-status {
    position: absolute;
    left: 1rem;
    top: 1rem;
    z-index: 2;
    padding: .48rem .7rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.11);
    background: rgba(12,12,14,.72);
    backdrop-filter: blur(14px);
    color: white;
    font-size: .68rem;
  }

  .abstract-visual {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    background:
      radial-gradient(circle at 80% 20%, rgba(5,163,212,.25), transparent 38%),
      linear-gradient(135deg, #111419, #0d0d0f);
  }

  .abstract-visual > span {
    color: rgba(255,255,255,.15);
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 600;
    letter-spacing: -.08em;
  }

  .abstract-lines { display: grid; gap: .55rem; width: 70%; }
  .abstract-lines i { display: block; height: 1px; background: rgba(255,255,255,.14); }
  .abstract-lines i:nth-child(2) { width: 75%; }
  .abstract-lines i:nth-child(3) { width: 50%; }

  .project-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.35rem;
    padding: ${({ $featured }) => ($featured ? "clamp(1.6rem, 4vw, 3.2rem)" : "1.4rem")};
  }

  .project-eyebrow {
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: .13em;
    margin-bottom: .65rem;
  }

  h3 {
    font-size: ${({ $featured }) => ($featured ? "clamp(1.7rem, 3vw, 3rem)" : "1.25rem")};
    letter-spacing: -.035em;
  }

  .project-description { color: ${({ theme }) => theme.colors.textLighter}; font-size: .92rem; }
  .project-meta { display: grid; gap: .9rem; color: ${({ theme }) => theme.colors.textLighter}; font-size: .78rem; }

  .project-tags { display: flex; flex-wrap: wrap; gap: .45rem; }
  .project-tags span {
    padding: .35rem .55rem;
    border-radius: .45rem;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.055);
  }

  .project-link {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: 600;
    font-size: .9rem;
  }

  .project-link i { font-size: 1.15rem; transform: rotate(45deg); transition: transform .25s ease; }
  .project-link:hover i { transform: rotate(45deg) translateY(-3px); }

  @media (max-width: 860px) {
    .project-card { grid-template-columns: 1fr; }
    .project-visual { min-height: ${({ $featured }) => ($featured ? "320px" : "220px")}; }
  }
`;
