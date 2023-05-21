import styled from 'styled-components'

export const MainContainer = styled.main`
overflow: hidden;

@media screen and (max-width: 320px) {
    .container {
        margin-inline: 1rem;
    }

    .skills__content {
        grid-template-columns: max-content;
        row-gap: 1rem;
    }

    .services__card {
        padding-block: 1.5rem;
    }

    .home__data{
        text-align: center;
    }

}

@media screen and (min-width: 576px) {
    .home__container,
    .about__container,
    .skills__container,
    .services__container,
    .projects__container,
    .contact__container {
        grid-template-columns: 470px;
        justify-content: center;
    }

    .home__data {
        text-align: center;
    }
}

@media screen and (min-width: 768px) {
    .nav__menu {
        width: 55%;
    }

    .home__container,
    .about__container,
    .skills__container {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .home__education,
    .home__subtitle {
        font-size: var(--h1-font-size);
    }

    .home__data,
    .about__data,
    .skills__data,
    :is(.about__data, .skills__data) :is(.section__subtitle, .section__title, .about__description, .skills__description) {
        text-align: initial;
    }

    .home__blob,
    .about__blob {
        width: 400px;
    }

    .about__data{
        order: 1;
    }

    .services__container,
    .projects__container {
        grid-template-columns: repeat( 2, 352px);
    }
}

@media screen and (min-width: 1023px){
    .section {
        padding-block: 7rem 2rem;
    }

    .section__subtitle {
        font-size: var(--normal-font-size);
    }

    .nav {
        height: calc(var(--header-height) + 1.5rem);
    }

    .nav__menu {
        width: initial;
    }
}

@media screen and (min-width: 1152px){
    .container {
        margin-inline: auto;
    }

    .home__container {
        grid-template-columns: 550px 460px;
        column-gap: 7rem;
        padding-block: 2rem 3rem;
    }

    .home__blob,
    .about__blob { /* verifixar*/
        width: 450px;
    }

    .home__description {
        margin-block: 1.5rem 2.5rem;
    }

    .home__social {
        column-gap: 1.5rem;
    }

    .about__container {
        grid-template-columns: 550px 460px;
        column-gap: 4.5rem;
        padding-bottom: 1rem;
    }

    .about__description {
        margin-bottom: 3rem;
    }

    /* .skills__container {
        grid-template-columns: 340px 425px;
    } */

    .skills__description {
        margin-bottom: 3rem;
    }

    .skills__content {
        column-gap: 8rem;
    }

    .skills__group {
        row-gap: 1.5rem;
    }

    .skills__item {
        font-size: var(--h3-font-size);
    }

    .services__container {
        padding-block: 2.5rem 4rem;
    }

    .services__card {
        padding: 3.5rem 2rem;
    }

    .projects__container {
        grid-template-columns: repeat(3 ,350px);
        row-gap: 3rem;
        padding-block: 2.5rem 4rem;
    }

    .projects__button {
        font-size: var(--normal-font-size);
    }

    .contact__container {
        grid-template-columns: 680px;
        padding-block: 2.5rem 2rem;
    }

    .contact__form {
        row-gap: 1.5rem;
    }

    .contact__form textarea{
        height: 18rem;
    }

    .contact__group {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.5rem;
    }

    .contact__input {
        padding: 1.5rem;
    }
}
`