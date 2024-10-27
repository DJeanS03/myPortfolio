import styled from "styled-components";

export const ProjectsCardContainer = styled.nav`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  .projects__img {
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
  }

  .projects__card:hover .projects__img {
    transform: scale(1.3);
    filter: brightness(40%);
  }

  .projects__modal {
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 0) 0%,
      ${({ theme }) => theme.colors["primaryColorAlt"]}
    );
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px); /*for safari*/
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: bottom 0.4s;
  }

  .projects__subtitle,
  .projects__button {
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-size: ${({ theme }) => theme.fontSizes["small"]};
  }

  .projects__subtitle {
    display: block;
    margin-bottom: 0.25rem;
  }

  .projects__title {
    font-size: ${({ theme }) => theme.fontSizes["h2"]};
    margin-bottom: 0.75rem;
  }

  .projects__button {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
  }

  .projects__button i {
    font-size: 1.25rem;
  }

  .projects__card:hover .projects__modal {
    bottom: 0;
  }

  #concluded {
    color: ${({ theme }) => theme.colors["concluded"]};
  }
  #in__progress {
    color: ${({ theme }) => theme.colors["inProgress"]};
  }
`;
