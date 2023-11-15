import styled from "styled-components";

export const ButtonStyles = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors["primaryColor"]};
  padding: 1rem 1.75rem;
  border-radius: 0%.5rem; 
  color: ${({ theme }) => theme.colors["titleColor"]};
  font-weight: ${({ theme }) => theme.fontWeights["medium"]};
  transition: box-shadow 0.4s;
  cursor: pointer;
  justify-self: center;

  :hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors["primaryColorAlt"]};;
}
`;
