import styled from "styled-components";

export const HomeContainer = styled.section`
  background-color: ${({ theme }) => theme.colors["containerColor"]};
  padding: 50px 0;

  @media screen and (max-width: 767px) {
    padding: 0;
  }

  .home__container {
    padding-top: 2rem;
    row-gap: 2.5rem;
  }

  .home__content {
    display: grid;
    row-gap: 2rem;
  }

  .home__data {
    text-align: center;
  }

  .home__subtitle,
  .home__education {
    font-size: ${({ theme }) => theme.fontSizes["bigger"]};
  }

  .home__subtitle span,
  .home__title {
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  .home__title {
    font-size: ${({ theme }) => theme.fontSizes["biggest"]};
    font-weight: ${({ theme }) => theme.fontWeights["semiBold"]};
  }

  .home__description {
    margin-block: 1rem 1.5rem;
  }

  .home__social {
    display: flex;
    justify-content: center;
    column-gap: 1.25rem;
  }

  .home__social-link {
    display: flex;
    background-color: ${({ theme }) => theme.colors["primaryColorAlt"]};
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-size: 1.5rem;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: transform 0.4s;
  }

  .home__social-link:hover {
    transform: translateY(-0.25rem);
  }

  .home__image {
    justify-self: center;
  }

  .home__blob {
    width: 320px;
    fill: ${({ theme }) => theme.colors["primaryColor"]};
    filter: drop-shadow(0 12px 12px rgb(90, 67, 203));
  }

  svg {
    width: 700px;
    fill: ${({ theme }) => theme.colors["primaryColor"]};
    filter: drop-shadow(0 12px 12px rgb(90, 67, 203));
  }
`;

export const RoundImage = styled.img`
  width: 420px; 
  border: 4px solid ${({ theme }) => theme.colors["primaryColor"]};
  border-radius: 50%;
`;
