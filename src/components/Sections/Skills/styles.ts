import styled from "styled-components";

export const SkilsContainer = styled.section`
  padding-block: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors["containerColor"]};

  .skills__container {
    padding-bottom: 2rem;
    row-gap: 3.5rem;
  }

  .skills__data {
    text-align: center;
  }

  .skills__description {
    margin-bottom: 2rem;
  }

  .skills__content,
  .skills__group {
    display: grid;
  }

  .skills__content {
    grid-template-columns: repeat(2, max-content);
    column-gap: 4rem;
    justify-content: center;
    align-items: baseline;
  }

  .skills__group {
    row-gap: 1rem;
    list-style: decimal-leading-zero;
  }

  .skills__item {
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
    color: ${({ theme }) => theme.colors["titleColor"]};
  }

  .skills__item::marker {
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  @media screen and (max-width: 464px) {
    .skills__content {
    }
  }
`;
