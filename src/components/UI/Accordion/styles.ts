import styled from "styled-components";

export const AccordionContainer = styled.div`

  border: 1px solid ${({ theme }) => theme.colors["textLighter"]};
  border-radius: 5px;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  width: fit-content;
  transition: border .5s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors["primaryColorLighter"]}; // Substitua "novaCor" pela cor desejada
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
  font-size: 14px;
  color: ${({ theme }) => theme.colors["textLighter"]};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors["textColor"]};
  padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  max-height: ${(props) =>
    props.isOpen ? "300px" : "0"}; /* Ajuste o valor conforme necessário */
  overflow: hidden;
  transition: max-height 0.2s ease-out, padding 0.2s ease-out; /* Transição para ambos */
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  transition: transform 0.5s ease;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0")});
`;
