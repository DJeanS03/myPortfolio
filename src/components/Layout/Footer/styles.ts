import styled from "styled-components";

export const FooterContainer = styled.section`
  padding-block: 3.5rem 2rem;
  background-color: ${({ theme }) => theme.colors["containerColor"]};

  .footer__container {
    row-gap: 2rem;
    text-align: center;
    min-height: 130px;
  }

  .footer__title {
    font-size: ${({ theme }) => theme.fontSizes["h1"]};
    font-weight: ${({ theme }) => theme.colors["primaryColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["semiBold"]};
    margin-bottom: 0.25rem;
  }

  .footer__title span {
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  .footer__education {
    font-size: ${({ theme }) => theme.fontSizes["normal"]};
  }
`;
