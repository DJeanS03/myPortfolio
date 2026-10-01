import styled from "styled-components";

export const ProjectsContainer = styled.section`
  .featured-projects { display: grid; gap: 1.4rem; }

  .archive {
    margin-top: clamp(4rem, 8vw, 7rem);
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,.08);
  }

  .archive-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .archive-heading h3 { font-size: clamp(1.4rem, 3vw, 2rem); }
  .archive-heading span { color: ${({ theme }) => theme.colors.textLighter}; font-size: .78rem; }

  .archive-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (max-width: 900px) {
    .archive-grid { grid-template-columns: 1fr; }
  }
`;
