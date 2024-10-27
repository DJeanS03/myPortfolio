import styled from "styled-components";

export const ButtonContainer = styled.div`
  .scroll-to-top {
    position: fixed;
    bottom: 43px;
    right: 20px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors["primaryColor"]};
    color: ${({ theme }) => theme.colors["inputColor"]};
    font-size: 20px;
    cursor: pointer;
    z-index: 999;
  }

  .scroll-to-top.visible {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 464px) {
    .scroll-to-top.visible {
      display: none;
    }
  }
`;
