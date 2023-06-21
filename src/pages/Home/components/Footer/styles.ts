import styled from "styled-components";

export const FooterContainer = styled.section`
  padding-block: 3.5rem 2rem;
  background-color: var(--container-color);

  .footer__container {
    row-gap: 2rem;
    text-align: center;
    min-height: 130px;
  }

  .footer__title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    margin-bottom: 0.25rem;
  }

  .footer__title span {
    color: var(--primary-color);
  }

  .footer__education {
    font-size: var(--normal-font-size);
  }
`;
