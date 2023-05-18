import styled from 'styled-components'

export const ServicesContainer = styled.section`
padding-block: 5rem 2rem;

.services_container {
    row-gap: 2rem;
}

.services__card {
    text-align: center;
    background-color: var(--container-color);
    padding: 3rem 1.25rem;

    border-radius: 1rem;
    border: 2px solid var(--container-color);
    transition: border .4s;
}

.services__card:hover {
    border: 2px solid var(--primary-color);
}

.services__icon {
    display: block;
    font-size: 4rem;
    color: var(--primary-color);
    margin-bottom: .75rem;
}

.services__title {
    font-size: var(--h2-font-size);
    margin-bottom: 1.5rem;
}

`