import styled from "styled-components";

export const AccordionContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors["textLighter"]};
  border-radius: 5px;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  transition: border 0.5s ease, box-shadow 0.3s ease;
  margin-bottom: 0.5rem;

  //em caso de n ser a lista
  white-space: normal;
  // ----------------------------------------------------------------

  &:hover {
    border-color: ${({ theme }) => theme.colors["primaryColorLighter"]};
  }

  .experiences__icon {
    display: block;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }
`;

export const AccordionHeader = styled.div`
  background-color: ${({ theme }) => theme.colors["containerColor"]};
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["primaryColorAlt"]};
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const InfoLine = styled.div`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes["small"]};
  color: ${({ theme }) => theme.colors["textLighter"]};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors["textColor"]};
  padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  max-height: ${(props) =>
    props.isOpen ? "300px" : "0"}; /* Ajuste o valor conforme necessário */
  overflow: hidden;
  transition: max-height 0.2s ease-out, padding 0.2s ease-out;

  ul {
    list-style-type: disc;
    padding: 0 0.75rem;
  }

  li {
    white-space: normal;
    font-size: ${({ theme }) => theme.fontSizes["normal"]};
  }

  li::marker {
    color: ${({ theme }) => theme.colors["primaryColor"]};
  }
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  transition: transform 0.5s ease;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0")});
`;
