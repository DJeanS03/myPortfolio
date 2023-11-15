import styled from 'styled-components'

export const ContactContainer = styled.section`
padding-block: 5rem 2rem;

.contact__container {
    padding-top: 1rem;
}

.contact__form,
.contact__group {
    display: grid;
    row-gap: 1rem;
}

.contact__form {
    position: relative;
}

.contact__input {
    padding: 1rem 1.25rem;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.colors["containerColor"]};
    color: ${({ theme }) => theme.colors["titleColor"]};
}

.contact__input::placeholder {
    color: ${({ theme }) => theme.colors["textColor"]};
}

.contact__form textarea{
    height: 11rem;
    resize: none;
    margin-bottom: 2rem;
}

.contact__button {
    justify-self: center;
    cursor: pointer;
}

.contact__message {
    position: absolute;
    left: 0;
    bottom: 4.5rem; 
    font-size: ${({ theme }) => theme.fontSizes["small"]};
    color: ${({ theme }) => theme.colors["titleColor"]};
}

`