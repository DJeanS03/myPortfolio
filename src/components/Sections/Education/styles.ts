import styled from "styled-components";

export const EducationContainer = styled.section`
  background: ${({ theme }) => theme.colors.containerColor};
  border-block: 1px solid rgba(255,255,255,.045);

  .education-grid {
    display: grid;
    grid-template-columns: 1.15fr 1.15fr .7fr;
    border-top: 1px solid rgba(255,255,255,.08);
  }

  article { padding: 2rem 2rem 0 0; min-height: 230px; }
  article + article { padding-left: 2rem; border-left: 1px solid rgba(255,255,255,.08); }
  article > span { color: ${({ theme }) => theme.colors.primaryColorLighter}; font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; }
  h3 { margin-top: 1.4rem; font-size: clamp(1.2rem, 2vw, 1.65rem); letter-spacing: -.025em; }
  p { margin-top: .8rem; color: ${({ theme }) => theme.colors.textLighter}; font-size: .88rem; }
  small { display: block; margin-top: .8rem; color: ${({ theme }) => theme.colors.textLighter}; }

  @media (max-width: 850px) {
    .education-grid { grid-template-columns: 1fr; }
    article, article + article { min-height: auto; padding: 1.6rem 0; border-left: 0; border-bottom: 1px solid rgba(255,255,255,.08); }
  }
`;
