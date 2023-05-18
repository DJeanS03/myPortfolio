import styled from 'styled-components'

export const AboutContainer = styled.section`
padding-block: 5rem 2rem;

.about__container {
    row-gap: 2.5rem;
}

.about__data {
    text-align: center;
}

.about__description {
    margin-bottom: 2rem;
}

.about__image {
    justify-self: center;
}

.about__blob {
    width: 320px;
}

.about__blob path{
    stroke: var(--primary-color);
}
`