import styled from "styled-components";

export const ServicesContainer = styled.section`
  background: ${({ theme }) => theme.colors.containerColor};
  border-block: 1px solid rgba(255,255,255,.045);

  .experience-layout {
    display: grid;
    grid-template-columns: minmax(260px, .7fr) minmax(0, 1.3fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: start;
  }

  .experience-heading { position: sticky; top: 7rem; margin-bottom: 0; }
  .timeline { position: relative; display: grid; }

  .timeline::before {
    content: "";
    position: absolute;
    left: 1.05rem;
    top: 1.8rem;
    bottom: 2rem;
    width: 1px;
    background: linear-gradient(${({ theme }) => theme.colors.primaryColor}, rgba(255,255,255,.08));
  }

  .timeline-item {
    position: relative;
    display: grid;
    grid-template-columns: 2.2rem 1fr;
    gap: 1.2rem;
    padding-bottom: 1.3rem;
  }

  .timeline-marker {
    position: relative;
    z-index: 1;
    width: 2.1rem;
    height: 2.1rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid rgba(4,138,191,.5);
    background: ${({ theme }) => theme.colors.containerColor};
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-size: .6rem;
  }

  .timeline-card {
    padding: 1.5rem;
    border-radius: 1.15rem;
    border: 1px solid rgba(255,255,255,.065);
    background: rgba(255,255,255,.018);
    transition: border-color .3s ease, transform .3s ease;
  }

  .timeline-card:hover { border-color: rgba(4,138,191,.35); transform: translateX(4px); }

  .timeline-topline {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .company {
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-size: .72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .12em;
    margin-bottom: .55rem;
  }

  h3 { font-size: clamp(1.25rem, 2.2vw, 1.7rem); font-weight: 600; letter-spacing: -.025em; }
  .period { flex: 0 0 auto; color: ${({ theme }) => theme.colors.textLighter}; font-size: .78rem; }

  .experience-meta {
    display: flex;
    gap: .7rem 1rem;
    flex-wrap: wrap;
    margin: .9rem 0 1.2rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .75rem;
  }

  ul { display: grid; gap: .65rem; }
  li {
    position: relative;
    padding-left: 1rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .9rem;
    line-height: 1.65;
  }
  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: .72rem;
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primaryColor};
  }

  @media (max-width: 900px) {
    .experience-layout { grid-template-columns: 1fr; }
    .experience-heading { position: static; }
  }

  @media (max-width: 620px) {
    .timeline-topline { flex-direction: column; gap: .7rem; }
    .timeline-card { padding: 1.2rem; }
  }
`;
