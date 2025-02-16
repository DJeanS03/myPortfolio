import styled from "styled-components";

export const ContactContainer = styled.section`
  padding-block: 5rem 2rem;

  .contact__form,
  .contact__group {
    display: grid;
    row-gap: 1rem;
  }

  .contact__input {
    width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors["containerColor"]};
    color: ${({ theme }) => theme.colors["titleColor"]};
  }

  .contact__input::placeholder {
    color: ${({ theme }) => theme.colors["textColor"]};
  }

  .contact__form textarea {
    max-height: 11rem;
    resize: none;
    margin-bottom: 1rem;
  }

  .contact__button {
    justify-self: center;
    cursor: pointer;
  }
`;

export const ContactMessage = styled.div`
  left: 0;
  bottom: 4.5rem;
  font-size: ${({ theme }) => theme.fontSizes["small"]};

  .__error {
    color: ${({ theme }) => theme.colors["errorMessage"]};
  }

  .__sucess {
    color: ${({ theme }) => theme.colors["concluded"]};
  }
`;
