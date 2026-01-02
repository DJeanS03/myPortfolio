import styled from "styled-components";

export const ProjectsCardContainer = styled.nav`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  /* ✅ define um "tamanho padrão" para todos os cards */
  .projects__card {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10; /* ajuste: 16/9 se quiser mais "wide" */
    overflow: hidden;
    border-radius: 1rem;
  }

  /* ✅ imagem sempre cobre o card sem distorcer */
  .projects__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.5s ease-in-out;
    display: block;
  }

  .projects__card:hover .projects__img {
    transform: scale(1.12);
    filter: grayscale(1);
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
    -webkit-backdrop-filter: blur(4px);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: bottom 0.4s;
    padding: 1rem; /* ✅ evita texto colado nas bordas */
    text-align: center;
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
