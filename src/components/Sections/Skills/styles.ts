import styled from "styled-components";

export const SkilsContainer = styled.section`
  padding-block: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors["containerColor"]};

  .skills__container {
    row-gap: 2.25rem;
    align-items: start;
  }

  .skills__data {
    text-align: center;
    max-width: 46rem;
    margin: 0 auto;
  }

  .skills__description {
    margin: 0 auto 1.25rem;
    max-width: 40rem;
    line-height: 1.6;
  }

  .skills__actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .skills__toggle {
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: transparent;
    color: ${({ theme }) => theme.colors["titleColor"]};
    padding: 0.65rem 0.95rem;
    border-radius: 0.75rem;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
  }

  .skills__lists {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.25rem;
    max-width: 62rem;
    margin: 0 auto;
  }

  .skills__group {
    background: ${({ theme }) => theme.colors["bodyColor"]};
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.9rem;
    padding: 1rem 1rem 1.05rem;
  }

  .skills__groupTitle {
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  .skills__items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }

  .skills__item {
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
    line-height: 1.25;
    font-size: 0.95rem;
    word-break: keep-all; /* evita quebrar palavras */
  }

  .skills__item::before {
    content: "•";
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  .skills__extra {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    line-height: 1.35;
    opacity: 0.85;
  }

  @media screen and (max-width: 900px) {
    .skills__lists {
      grid-template-columns: 1fr;
      max-width: 40rem;
    }
  }
`;
