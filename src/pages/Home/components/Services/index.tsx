import { ServicesContainer } from "./styles";

interface ServicesProps {
  language: string;
}

export function Services({ language }: ServicesProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="section__subtitle">
            My <span>Services</span>
          </h3>
          <h2 className="section__title">What I Do</h2>
          <div className="services__container container grid">
            <article className="services__card">
              <i className="bx bx-layout services__icon"></i>
              <h2 className="services__title">Web Developer</h2>
              <p className="services__description">
                I have expertise in creating custom web pages, utilizing
                contemporary libraries and technologies to ensure a professional
                design and a seamless and engaging user experience.
              </p>
            </article>

            <article className="services__card">
              <i className="bx bx-pen services__icon"></i>
              <h2 className="services__title">Graphic Design</h2>
              <p className="services__description">
                As a designer, I have the ability to create professional and
                attractive designs for clients, encompassing a variety of
                projects. I am committed to providing visually impactful and
                coherent solutions, always striving to exceed clients'
                expectations.
              </p>
            </article>
          </div>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="section__subtitle">
            Meus <span>Serviços</span>
          </h3>
          <h2 className="section__title">O Que Eu Faço</h2>
          <div className="services__container container grid">
            <article className="services__card">
              <i className="bx bx-layout services__icon"></i>
              <h2 className="services__title">Desenvolvedor Web</h2>
              <p className="services__description">
                Tenho expertise na criação de páginas web personalizadas,
                utilizando bibliotecas e tecnologias contemporâneas para
                garantir um design profissional e uma experiência de usuário
                fluida e envolvente.
              </p>
            </article>

            <article className="services__card">
              <i className="bx bx-pen services__icon"></i>
              <h2 className="services__title">Design Gráfico</h2>
              <p className="services__description">
                Como designer, tenho a habilidade de criar designs profissionais
                e atrativos para clientes, abrangendo uma variedade de projetos.
                Estou comprometido em oferecer soluções visualmente impactantes
                e coerentes, buscando sempre superar as expectativas dos
                clientes.
              </p>
            </article>
          </div>
        </>
      );
    }
  };
  return <ServicesContainer id="services">{getText()}</ServicesContainer>;
}
