import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
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
    flex-direction: row;
    column-gap: 3rem;
  }

  .nav__menu {
    width: initial;
  }

  @media screen and (max-width: 898px) {
    display: flex;
    justify-content: center;

    .nav__logo {
      display: none;
    }

    .nav__icon {
      display: block;
    }

    .nav {
      position: fixed;
      bottom: 2rem;

      max-width: 90%;
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
  }

  @media screen and (max-width: 576px) {
    .nav__list {
      column-gap: 2rem;
    }
  }

  @media screen and (max-width: 376px) {
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

  .language-container {
    position: relative;
    display: inline-block;
  }

  .toggle-btn {
    background-color: inherit;
    min-width: 200px;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .language-options {
    position: absolute;
    min-width: 200px;
    top: 100%;
    left: 0;
    display: block;
    margin-top: 5px;
    padding: 5px 0;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .language-options button {
    display: block;
    width: 100%;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .language-options button:hover {
    background-color: #e5e5e5;
  }
`;
