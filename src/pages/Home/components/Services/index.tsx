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
                I create customized webpages using libraries and contemporary
                technologies.
              </p>
            </article>

            <article className="services__card">
              <i className="bx bx-pen services__icon"></i>
              <h2 className="services__title">Graphic Design</h2>
              <p className="services__description">
                I create designs for clients, such as banners, posters, and
                digital graphics, among other things.
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
                Crio páginas da web personalizadas usando bibliotecas e
                tecnologias contemporâneas.
              </p>
            </article>

            <article className="services__card">
              <i className="bx bx-pen services__icon"></i>
              <h2 className="services__title">Design Gráfico</h2>
              <p className="services__description">
                Crio designs para clientes, como banners, cartazes e gráficos
                digitais, entre outros.
              </p>
            </article>
          </div>
        </>
      );
    }
  };
  return <ServicesContainer id="services">{getText()}</ServicesContainer>;
}
