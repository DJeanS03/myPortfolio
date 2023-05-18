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
.nav__close {
    display: flex;
    font-size: 1.25rem;
    color: var(--title-color);
}



@media screen and (max-width: 1023px) {
    .nav__menu {
        position: fixed;
        top: 0;
        right: -100%;
        background-color: hsla(0, 0%, 10%, .3);
        width: 75%;
        height: 100%;
        padding: 4.5rem 0 0 3rem;
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        transition: right .5s;
        display: none;
    }
}

.nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
}

.nav__link {
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: color .4s;
}

.nav__link:hover {
    color: var(--primary-color);
}

.nav__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

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
    -webkit-backdrop-filter: blur(24px); /* for safari*/
    z-index: -1;
    top: 0;
    left: 0;

}

.active-link {
    color: pink;
}


@media screen and (min-width: 1023px){


}
`