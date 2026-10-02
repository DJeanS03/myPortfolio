import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: background .3s ease, border-color .3s ease, backdrop-filter .3s ease;

  &.is-scrolled {
    background: rgba(16,16,18,.78);
    border-color: rgba(255,255,255,.06);
    backdrop-filter: blur(22px);
  }

  .nav {
    min-height: 4.5rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
  }

  .brand { display: inline-flex; align-items: center; gap: .65rem; color: white; font-size: .86rem; font-weight: 600; }
  .brand img { width: 1.8rem; height: 1.8rem; }

  .nav-list { display: flex; justify-content: center; align-items: center; gap: clamp(.6rem, 2vw, 1.6rem); }
  .nav-list a {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .5rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .76rem;
    transition: color .25s ease;
  }
  .nav-list a:hover { color: white; }
  .nav-list i { display: none; font-size: 1.2rem; }

  @media (max-width: 760px) {
    .nav { min-height: 4.1rem; grid-template-columns: 1fr auto; }
    .brand span { display: none; }
    .nav-list {
      position: fixed;
      left: 50%;
      bottom: 1rem;
      transform: translateX(-50%);
      z-index: 200;
      width: min(92vw, 420px);
      justify-content: space-around;
      gap: .2rem;
      padding: .65rem .7rem;
      border-radius: 1.2rem;
      background: rgba(18,18,20,.84);
      border: 1px solid rgba(255,255,255,.08);
      backdrop-filter: blur(22px);
      box-shadow: 0 12px 36px rgba(0,0,0,.3);
    }
    .nav-list a { flex-direction: column; gap: .18rem; font-size: .6rem; }
    .nav-list i { display: block; }
  }
`;
