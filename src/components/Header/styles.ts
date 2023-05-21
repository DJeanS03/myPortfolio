import styled from 'styled-components'

export const HeaderContainer = styled.header`
position: fixed;
width: 100%;
/* background: var(--container-color); */
top: 0;
left: 0;
z-index: var(--z-fixed);

.nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo {
    color: var(--title-color);
    font-weight: var(--font-medium);
}

.nav__logo span {
    color: var(--primary-color);
}

.nav__toggle,
.nav__close,
.nav__icon {
    display: none;
    font-size: 1.25rem;
    color: var(--title-color);
}

.nav__list {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
}

.nav__menu {
    width: initial;
}


@media screen and (max-width: 898px) {
  /*   .nav__menu {
        position: fixed;
        top: 0;
        right: -100%;
        background-color: hsla(0, 0%, 10%, .3);
        width: 55%;
        height: 100%;
        padding: 4.5rem 0 0 3rem;
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        transition: right .5s;
    }

    .nav__list {
        display: flex;
        flex-direction: column;
        row-gap: 3rem;
        font-size: var(--h2-font-size);
    }
    
    .nav__close,
    .nav__toggle,
    .nav__icon  {
        display: block;
    } */


    .nav__close,
    .nav__toggle,
    .nav__icon  {
        display: block;
    } 

    .nav__close {
        position: absolute;
        right: 1.5rem;
        bottom: .7rem;
        font-size: 1.5rem;
    }

    .nav {
        position: fixed;
        bottom: 2rem;
        left: 0;
        width: 94%;
        z-index: 1000;
        height: calc(var(--header-height) + .5rem);

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 5rem;
        background-color: pink;

        padding: 0 30px;
        margin: 0 30px;
    }

    .nav__menu {
        position: fixed;
        width: 94%;
        left: 24px;
        bottom: 2rem;
        margin: 0 auto;
        background-color: lightblue;
        padding: 2rem 1.5rem 5rem;
        border-radius: 2rem;

    }

    .nav__list {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        justify-content: center;
        gap: 2rem 3rem;
    }

    .nav__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: .25rem;
    }

    
}



.show-menu {
    bottom: -100%;
}


.nav__link {
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: color .4s;

    display: flex;
    align-items: center;
    gap: .5rem;
}
.active-link, 
.nav__link:hover {
    color: var(--primary-color);
}

/* .nav__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
} */

.blur-header {
    background-color: transparent;
}

.blur-header::after {
    content: '';
    position: absolute;
    width: 1000%;
    height: 100%;
    background-color: hsla(0, 0%, 10%, .3);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px); 
    z-index: -1;
    top: 0;
    left: 0;

}

@media screen and (min-width: 1023px){


}
`