import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2.2rem 0 6rem;
  border-top: 1px solid rgba(255,255,255,.06);
  background: ${({ theme }) => theme.colors.containerColor};

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 2rem;
  }
  strong { color: ${({ theme }) => theme.colors.titleColor}; }
  p, small { color: ${({ theme }) => theme.colors.textLighter}; font-size: .75rem; }
  p { margin-top: .2rem; }
  .footer-links { display: flex; gap: 1rem; }
  .footer-links a { color: ${({ theme }) => theme.colors.textLighter}; font-size: .78rem; }
  .footer-links a:hover { color: white; }

  @media (max-width: 720px) {
    .footer-grid { grid-template-columns: 1fr; }
    small { margin-top: .5rem; }
  }
`;
