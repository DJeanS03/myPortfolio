import { ServicesContainer } from "./styles";

export function Services(){
    return(
        <ServicesContainer id="services">
            <h3 className="section__subtitle">
                My <span>Services</span>
            </h3>
            <h2 className="section__title">
                What I Do
            </h2>
            <div className="services__container container grid">
                <article className="services__card">
                    <i className='bx bx-layout services__icon' ></i>
                    <h2 className="services__title">Web Developer</h2>
                    <p className="services__description">
                        Custom web page creation. Using contemporary labor-related technologies and libraries.
                    </p>
                </article>

                <article className="services__card">
                    <i className='bx bx-pen services__icon' ></i>
                    <h2 className="services__title">Graphic Design</h2>
                    <p className="services__description">
                        I create designs for clients, such as banners, posters, and digital graphics, among other things.
                    </p>
                </article>
            </div>
        </ServicesContainer>
    )
}