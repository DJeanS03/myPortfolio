import styled from "styled-components";

export const LanguageButtonContainer = styled.header`
  .language-container {
    position: relative;
    display: inline-block;
  }

  .toggle-btn {
    background-color: ${({ theme }) => theme.colors["primaryColor"]};
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
    min-width: 12.5rem;
    top: 100%;
    right: 0px;
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
    color: ${({ theme }) => theme.colors["white"]};
  }

  .language-options button:hover {
    background-color: ${({ theme }) => theme.colors["primaryColorAlt"]};
  }

  @media screen and (max-width: 898px) {
    position: relative;
    width: 100%;
    top: 5px;
    left: 20px;
    background-color: hsl(228, 15%, 15%);

    .language-options {
      left: 0;
      min-width: 12.5rem;
    }

    .language__name {
      transition: all 10s;
    }

    .hidden {
      display: none;
    }
  }
`;
