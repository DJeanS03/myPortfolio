import { HomeContainer } from "./styles";
import imagem from "../../../../assets/profile.png";

interface HomeProps {
  language: string;
}

export function Home({ language }: HomeProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="home__subtitle">
            Hello, <span>I&apos;m</span>
          </h3>
          <h1 className="home__title">Jean Victor</h1>
          <h3 className="home__education">Front-end Developer</h3>

          <p className="home__description">
            I am dedicated to produce the most excellent digital experience.
            With a deep love for technology and design, I dedicate my career to
            transform creative concepts into intuitive and interactive web
            interfaces.
          </p>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="home__subtitle">
            Olá, <span>Eu sou</span>
          </h3>
          <h1 className="home__title">Jean Victor</h1>
          <h3 className="home__education">Desenvolvedor Front-end</h3>

          <p className="home__description">
            Sou dedicado a produzir a melhor experiência digital. Com um amor
            profundo por tecnologia e design, dedico minha carreira a
            transformar conceitos criativos em interfaces web intuitivas e
            interativas.
          </p>
        </>
      );
    }
  };

  return (
    <HomeContainer id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <div className="home__data">{getText()}</div>
          <div className="home__social">
            <a
              href="https://github.com/DJeanS03"
              target="_blank"
              className="home__social-link"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jean-victor-7bb04519a/"
              target="_blank"
              className="home__social-link"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className="home__image">
          <svg
            className="home__blob"
            viewBox="0 0 550 591"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBlob" mask-type="alpha">
              <path
                d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                            170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                            447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                            587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                            438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
              />
            </mask>
            <g mask="url(#maskBlob)">
              <path
                d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                            170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                            447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                            587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                            438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
              />

              <rect x="37" width="476" height="630" fill="url(#pattern0)" />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern1)" />

            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBlob"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBlob"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              <image
                id="imageBlob"
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
    </HomeContainer>
  );
}
