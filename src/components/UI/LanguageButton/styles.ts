import styled from "styled-components";

export const LanguageButtonContainer = styled.div`
  position: relative;
  justify-self: end;

  .language-trigger {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    min-height: 2.55rem;
    padding: 0 .75rem;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: .7rem;
    background: rgba(255,255,255,.025);
    color: ${({ theme }) => theme.colors.titleColor};
    cursor: pointer;
    font-size: .72rem;
  }

  .language-trigger i { font-size: 1rem; }

  .language-menu {
    position: absolute;
    top: calc(100% + .5rem);
    right: 0;
    width: 180px;
    padding: .4rem;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: .8rem;
    background: rgba(18,18,20,.96);
    box-shadow: 0 18px 50px rgba(0,0,0,.3);
    backdrop-filter: blur(20px);
  }

  .language-menu button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .7rem .75rem;
    border-radius: .55rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.titleColor};
    cursor: pointer;
    font-size: .78rem;
  }
  .language-menu button:hover { background: rgba(255,255,255,.05); }
  .language-menu span { color: ${({ theme }) => theme.colors.textLighter}; font-size: .65rem; }
`;
