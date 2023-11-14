import styled from "styled-components";

export const ServicesContainer = styled.section`
  padding-block: 5rem 2rem;

  .services_container {
    row-gap: 2rem;
  }

  .services__card {
    text-align: center;
    background-color: ${({ theme }) => theme.colors["containerColor"]};
    padding: 3rem 1.25rem;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.colors["containerColor"]};
    transition: border 0.4s;
  }

  .services__card:hover {
    border: 2px solid ${({ theme }) => theme.colors["primaryColor"]};
  }

  .services__icon {
    display: block;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors["primaryColor"]};
    margin-bottom: 0.75rem;
  }

  .services__title {
    font-size: ${({ theme }) => theme.fontSizes["h2"]};
    margin-bottom: 1.5rem;
  }
`;
