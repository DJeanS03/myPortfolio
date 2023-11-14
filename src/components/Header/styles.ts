import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;

  .nav {
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo {
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
    display: flex;
    align-items: center;
  }

  .nav__logo span {
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  .nav__icon {
    display: none;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors["titleColor"]};
  }

  .nav__list {
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 2rem;
  }

  .nav__menu {
    width: initial;
    display: flex;
    gap: 2rem;
  }

  .haha {
    position: absolute;
    right: 20px;
  }

  @media screen and (max-width: 898px) {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;

    .nav__logo {
      display: none;
    }

    .nav__icon {
      display: block;
    }

    .nav__menu {
      display: flex;
      justify-content: center;
    }

    .nav__list {
      position: fixed;
      bottom: 2rem;

      max-width: 90vw;
      z-index: 1000;
      height: 4rem;

      border-radius: 5rem;
      background-color: hsla(0, 0%, 10%, 0.3);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);

      padding: 0 30px;
      display: flex;
      justify-content: center;
    }

    .nav__link {
      font-size: 0;
    }

    .haha {
      position: absolute;
      left: 0;
    }
  }

  @media screen and (max-width: 321px) {
    .nav__list {
      column-gap: 1.5rem;
    }
  }

  .nav__link {
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
    transition: color 0.4s;

    display: flex;
    align-items: center;
  }

  .active-link,
  .nav__link:hover {
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }

  .blur-header {
    background-color: transparent;
  }

  .blur-header::after {
    content: "";
    position: absolute;
    width: 1000%;
    height: 100%;
    background-color: hsla(0, 0%, 10%, 0.3);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    z-index: -1;
    top: 0;
    left: 0;
  }
`;
