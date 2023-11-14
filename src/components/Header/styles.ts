import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);

  .nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo {
    color: var(--title-color);
    font-weight: var(--font-medium);
    display: flex;
    align-items: center;
  }

  .nav__logo span {
    color: var(--primary-color);
  }

  .nav__icon {
    display: none;
    font-size: 1.25rem;
    color: var(--title-color);
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
      height: calc(var(--header-height) + 0.5rem);

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
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: color 0.4s;

    display: flex;
    align-items: center;
  }

  .active-link,
  .nav__link:hover {
    color: var(--primary-color);
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
