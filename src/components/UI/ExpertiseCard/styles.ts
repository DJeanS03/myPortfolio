import styled from "styled-components";

export const ExpertiseContainer = styled.article`
  width: 100%;  
  max-width: 550px;  
  margin-bottom: 1rem;

  .expertise__card {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors["containerColor"]};
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.colors["containerColor"]};
    transition: border 0.4s;
  }
  .expertise__card:hover {
    border: 2px solid ${({ theme }) => theme.colors["primaryColor"]};
  }

  .expertise__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .expertise__title {
    font-size: ${({ theme }) => theme.fontSizes["h2"]};
  }

  .expertise__icon {
    display: block;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  @media screen and (max-width: 767px) {
    .expertise__card {
      min-height: 100%;
      min-width: 100%;
    }
  }
`;
