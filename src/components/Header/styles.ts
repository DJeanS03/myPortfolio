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
    align-items: center;
    flex-direction: row;
    column-gap: 2rem;
  }

  .nav__menu {
    width: initial;
  }

  .language-container {
    position: relative;
    display: inline-block;
  }

  .toggle-btn {
    background-color: rgb(110, 87, 224);
    color: #fff;
    padding: 0.625rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .toggle-btn i {
    font-size: 20px;
  }

  .language-options {
    position: absolute;
    min-width: 100%;
    top: 100%;
    left: 0;
    display: block;
    margin-top: 5px;
    padding: 0.313rem 0;
    background-color: hsla(0, 0%, 10%, 0.8);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 0.313rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .language-options button {
    display: block;
    width: 100%;
    padding: 0.313rem 0.625rem;
    border: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  .language-options button:hover {
    background-color: rgb(90, 67, 203);
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

    .nav__item:nth-child(4) {
      order: 4;
    }

    .nav__item:nth-child(5) {
      order: 5;
    }

    .nav__item:nth-child(6) {
      order: 6;
    }

    .language-container {
      order: 3;
    }

    .language-options {
      top: auto;
      bottom: 130%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0;
      margin-bottom: 5px;
      min-width: 11rem;
    }

    .language__name {
      display: none;
    }

    .toggle-btn {
      flex-direction: column;
      border-radius: 99999px;
    }
  }

  @media screen and (max-width: 576px) {
    .nav__list {
      column-gap: 2rem;
    }
  }

  @media screen and (max-width: 376px) {
    .nav__list {
      column-gap: 0.75rem;
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
