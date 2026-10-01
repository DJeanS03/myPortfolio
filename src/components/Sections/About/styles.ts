import styled from "styled-components";

export const AboutContainer = styled.section`
  background: ${({ theme }) => theme.colors.containerColor};
  border-block: 1px solid rgba(255,255,255,.045);

  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: start;
  }

  .about-copy { position: sticky; top: 7rem; }
  .about-lead { margin-top: 1.5rem; color: ${({ theme }) => theme.colors.titleColor}; }
  .about-copy > p { max-width: 58ch; }
  .about-copy > p + p { margin-top: 1rem; color: ${({ theme }) => theme.colors.textLighter}; }

  .resume-link {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: 600;
    border-bottom: 1px solid rgba(255,255,255,.2);
    padding-bottom: .35rem;
    transition: color .25s ease, border-color .25s ease;
  }

  .resume-link:hover {
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    border-color: ${({ theme }) => theme.colors.primaryColorLighter};
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; }
    .about-copy { position: static; }
  }

  @media (max-width: 620px) {
    .expertise-grid { grid-template-columns: 1fr; }
  }
`;
