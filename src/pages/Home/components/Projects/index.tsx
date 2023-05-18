import { ProjectsContainer } from "./styles";

export function Projects() {
    return(
        <ProjectsContainer id="projects">
            <h3 className="section__subtitle">
                My <span>Jobs</span>
            </h3>
            <h2 className="section__title">
                Recent Projects
            </h2>

            <div className="projects__container container grid">
                <article className="projects__card">
                    <img src="https://source.unsplash.com/800x600/?computer" alt="" className="projects__img"/>

                    <div className="projects__modal">
                        <span className="projects__subtitle">Web</span>
                        <h2 className="projects__title">Modern Website</h2>
                        <a href="" className="projects__button">
                            View demo <i className='bx bx-link-external' ></i>
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <img src="https://source.unsplash.com/800x600/?computer" alt="" className="projects__img"/>

                    <div className="projects__modal">
                        <span className="projects__subtitle">Web</span>
                        <h2 className="projects__title">Modern Website</h2>
                        <a href="" className="projects__button">
                            View demo <i className='bx bx-link-external' ></i>
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <img src="https://source.unsplash.com/800x600/?random" alt="" className="projects__img"/>

                    <div className="projects__modal">
                        <span className="projects__subtitle">Web</span>
                        <h2 className="projects__title">Modern Website</h2>
                        <a href="" className="projects__button">
                            View demo <i className='bx bx-link-external' ></i>
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <img src="https://source.unsplash.com/800x600/?computer" alt="" className="projects__img"/>

                    <div className="projects__modal">
                        <span className="projects__subtitle">Web</span>
                        <h2 className="projects__title">Modern Website</h2>
                        <a href="" className="projects__button">
                            View demo <i className='bx bx-link-external' ></i>
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <img src="https://source.unsplash.com/800x600/?computer" alt="" className="projects__img"/>

                    <div className="projects__modal">
                        <span className="projects__subtitle">Web</span>
                        <h2 className="projects__title">Modern Website</h2>
                        <a href="" className="projects__button">
                            View demo <i className='bx bx-link-external' ></i>
                        </a>
                    </div>
                </article>
            </div>
        </ProjectsContainer>
    )
}