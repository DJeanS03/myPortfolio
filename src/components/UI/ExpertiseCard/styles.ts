import styled from "styled-components";

export const ExpertiseContainer = styled.article`
  min-height: 240px;
  position: relative;
  padding: 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(255,255,255,.07);
  background: linear-gradient(145deg, rgba(255,255,255,.035), rgba(255,255,255,.012));
  overflow: hidden;
  transition: transform .35s cubic-bezier(.2,.75,.2,1), border-color .35s ease, background .35s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(4,138,191,.5);
    background: linear-gradient(145deg, rgba(4,138,191,.09), rgba(255,255,255,.015));
  }

  .expertise-number {
    color: rgba(255,255,255,.22);
    font-size: .7rem;
    letter-spacing: .16em;
  }

  .expertise-icon {
    display: block;
    margin: 2.4rem 0 1.2rem;
    color: ${({ theme }) => theme.colors.primaryColorLighter};
    font-size: 2rem;
  }

  h3 { font-size: 1.15rem; font-weight: 600; }
  p { margin-top: .75rem; color: ${({ theme }) => theme.colors.textLighter}; font-size: .9rem; }
`;
