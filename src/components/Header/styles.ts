import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  /* background: var(--container-color); */
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
  }

  .nav__logo span {
    color: var(--primary-color);
  }

  .nav__toggle,
  .nav__close,
  .nav__icon {
    display: none;
    font-size: 1.25rem;
    color: var(--title-color);
  }

  .nav__list {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
  }

  .nav__menu {
    width: initial;
  }

  @media screen and (max-width: 898px) {
    display: flex;
    justify-content: center;
    .nav__close,
    .nav__toggle,
    .nav__icon {
      display: block;
    }

    .nav__close {
      position: absolute;
      right: 1.5rem;
      bottom: 0.5rem;
      font-size: 1.95rem;
    }

    .nav {
      position: fixed;
      bottom: 2rem;

      width: 90%;
      z-index: 1000;
      height: calc(var(--header-height) + 0.5rem);

      border-radius: 5rem;
      background-color: hsla(0, 0%, 10%, 0.3);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);

      padding: 0 30px;
    }

    .nav__menu {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: -500%;
      margin: 0 auto;
      padding: 2rem 1.5rem 5rem;
      border-radius: 2rem;

      background-color: hsla(0, 0%, 0%, 0.7);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(24px);
      transition: bottom 0.5s;
    }

    .nav__list {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      justify-content: center;
      gap: 2rem 3rem;
      transition: botton 0.5s;
    }

    .nav__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0.25rem;
    }
  }

  .show-menu {
    bottom: 0;
  }

  .nav__link {
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: color 0.4s;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .active-link,
  .nav__link:hover {
    color: var(--primary-color);
  }

  /* .nav__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
} */

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

  @media screen and (min-width: 1023px) {
  }
`;
