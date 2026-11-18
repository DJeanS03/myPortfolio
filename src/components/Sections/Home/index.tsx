import imagem from "../../../assets/profile2.jpg";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";
import { Marquee } from "../../Effects/Marquee";
import { HomeContainer } from "./styles";

interface HomeProps { language: Language; }

const marqueeItems = {
  pt: ["APIs", "Integrações", "Automação", "Backend", "Full-stack", "TypeScript", "Node.js", "NestJS", "React"],
  en: ["APIs", "Integrations", "Automation", "Backend", "Full-stack", "TypeScript", "Node.js", "NestJS", "React"],
};

const badgeText = {
  pt: "DISPONÍVEL PARA PROJETOS • DISPONÍVEL PARA PROJETOS • ",
  en: "OPEN TO NEW PROJECTS • OPEN TO NEW PROJECTS • ",
};

export function Home({ language }: HomeProps) {
  const t = myTexts[0].hero.translations[language];

  return (
    <HomeContainer id="home">
      <div className="hero-aura" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="container hero-stage">
        <h1 className="hero-name" aria-label="Jean Victor">
          <span className="mask" aria-hidden="true"><span className="name-solid">Jean</span></span>
          <span className="mask" aria-hidden="true"><span className="name-outline">Victor</span></span>
        </h1>

        <div className="hero-photo">
          <div className="photo-frame">
            <img src={imagem} alt="Jean Victor" />
          </div>
          <svg className="hero-badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="hero-badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
            </defs>
            <text>
              <textPath href="#hero-badge-circle">{badgeText[language]}</textPath>
            </text>
          </svg>
        </div>

        <div className="hero-bottom">
          <div className="hero-left">
            <p className="hero-role">{t.eyebrow}</p>
            <p className="hero-title">{t.title}</p>
            <p className="hero-description">{t.description}</p>
            <p className="hero-location">
              <i className="bx bx-map" aria-hidden="true" />
              {t.location}
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-actions">
              <a className="hero-primary" href="#projects" data-cursor="">
                {t.primaryCta} <i className="bx bx-right-arrow-alt" aria-hidden="true" />
              </a>
              <a className="hero-secondary" href="#contact" data-cursor="">{t.secondaryCta}</a>
            </div>

            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/DJeanS03" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bx bxl-github" aria-hidden="true" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jean-victor200" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bx bxl-linkedin-square" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <Marquee items={marqueeItems[language]} />
      </div>
    </HomeContainer>
  );
}
