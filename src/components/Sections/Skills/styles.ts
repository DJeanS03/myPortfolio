import styled from "styled-components";

export const SkilsContainer = styled.section`
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid rgba(255,255,255,.08);
  }

  .skill-group {
    min-height: 260px;
    padding: 2rem 2rem 2rem 0;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .skill-group:nth-child(even) { padding-left: 2rem; border-left: 1px solid rgba(255,255,255,.08); }

  .skill-group-head { display: flex; gap: 1.1rem; }
  .skill-group-head > span { color: ${({ theme }) => theme.colors.primaryColorLighter}; font-size: .68rem; letter-spacing: .1em; padding-top: .3rem; }
  h3 { font-size: 1.4rem; letter-spacing: -.025em; }
  .skill-group-head p { margin-top: .35rem; color: ${({ theme }) => theme.colors.textLighter}; font-size: .8rem; }

  .skill-list { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: 2rem; }
  .skill-list span {
    padding: .5rem .72rem;
    border: 1px solid rgba(255,255,255,.07);
    border-radius: .55rem;
    background: rgba(255,255,255,.02);
    color: ${({ theme }) => theme.colors.titleColor};
    font-size: .78rem;
  }

  .skills-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 2rem; }
  .skills-actions button, .skills-actions a {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.titleColor};
    cursor: pointer;
    font-weight: 600;
    font-size: .9rem;
  }
  .skills-actions button { padding: .7rem 0; }
  .skills-actions a { color: ${({ theme }) => theme.colors.primaryColorLighter}; }

  @media (max-width: 760px) {
    .skills-grid { grid-template-columns: 1fr; }
    .skill-group, .skill-group:nth-child(even) { padding: 1.6rem 0; border-left: 0; }
    .skills-actions { align-items: flex-start; flex-direction: column; }
  }
`;
