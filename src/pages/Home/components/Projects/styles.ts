import styled from "styled-components";

export const ProjectsContainer = styled.section`
padding-block: 5rem 2rem;
background-color: var(--container-color);

.project__container {
    row-gap: 2rem;
    justify-content: center;
    padding-block: 1rem;
}

.projects__card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
}

.projects__img {
    width: 100%;
    height: 100%;
}

.projects__modal {
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,
                hsla(0, 0%, 0%, 0) 0%,
                rgb(110, 87, 224));
    backdrop-filter: blur(4px);
   -webkit-backdrop-filter: blur(4px); /*for safari*/
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: bottom .4s;
}

.projects__subtitle,
.projects__button {
    color: var(--title-color);
    font-size: var(--small-font-size);
}

.projects__subtitle {
    display: block;
    margin-bottom: .25rem;
}

.projects__title {
    font-size: var(--h2-font-size);
    margin-bottom: .75rem;
}

.projects__button {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: var(--font-medium);
}

.projects__button i {
    font-size: 1.25rem;
}

.projects__card:hover .projects__modal {
    bottom: 0;
}

`