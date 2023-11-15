import { AboutContainer } from "./styles";
import imagem from "../../../../assets/profile.png";
import CV from "../../../../assets/CV-Jean-Victor.pdf";

interface AboutProps {
  language: string;
}

export function About({ language }: AboutProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="section__subtitle">
            My <span>Intro</span>
          </h3>
          <h2 className="section__title">About Me</h2>
          <p className="about__description">
            As a front-end developer, I use React to create websites with
            intuitive and responsive interfaces. Additionally, I have experience
            in testing code, troubleshooting, and enhancing website
            accessibility. By combining my passion for design with my technical
            skills, I strive to create engaging and functional digital
            experiences for users. I am constantly updated on industry best
            practices and trends, aiming to deliver high-quality results.
          </p>
          <a download="CV-Jean-Victor" href={CV} className="button">
            Download my CV
          </a>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="section__subtitle">
            Minha <span>Introdução</span>
          </h3>
          <h2 className="section__title">Sobre Mim</h2>
          <p className="about__description">
            Como desenvolvedor front-end, utilizo o React para criar websites
            com interfaces intuitivas e responsivas. Além disso, possuo
            experiência em testar códigos, solucionar problemas e aprimorar a
            acessibilidade de sites. Ao combinar minha paixão pelo design com
            minhas habilidades técnicas, busco criar experiências digitais
            envolventes e funcionais para os usuários. Estou sempre atualizado
            sobre as melhores práticas e tendências do setor, visando entregar
            resultados de alta qualidade.
          </p>
          <a download="CV-Jean-Victor" href={CV} className="button">
            Baixar meu CV
          </a>
        </>
      );
    }
  };
  return (
    <AboutContainer id="about">
      <div className="about__container container grid">
        <div className="about__data">{getText()}</div>
        <div className="about__image">
          <svg
            className="about__blob"
            viewBox="0 0 550 592"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBorder" mask-type="alpha">
              <path
                d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
                            171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
                            448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
                            270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
                            439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z"
                fill="black"
              />
            </mask>
            <g mask="url(#maskBorder)">
              <rect x="37" width="476" height="630" fill="url(#pattern2)" />

              <path
                d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
                            192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
                            580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
                            40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
                            175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z"
                stroke="black"
                strokeWidth="10"
              />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern3)" />

            <defs>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              <image
                id="imageBorder"
                width="1040"
                height="1025"
                x="-170"
                y="-165"
                href={imagem}
              />
            </defs>
          </svg>
        </div>
      </div>
    </AboutContainer>
  );
}
