import imagem from "../../../assets/profile2.jpg";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";
import { HomeContainer } from "./styles";

interface HomeProps { language: Language; }

export function Home({ language }: HomeProps) {
  const t = myTexts[0].hero.translations[language];

  return (
    <HomeContainer id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-role">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-description">{t.description}</p>

          <div className="hero-actions">
            <a className="hero-primary" href="#projects">
              {t.primaryCta} <i className="bx bx-right-arrow-alt" aria-hidden="true" />
            </a>
            <a className="hero-secondary" href="#contact">{t.secondaryCta}</a>
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

        <div className="hero-visual" data-reveal>
          <div className="photo-frame">
            <img src={imagem} alt="Jean Victor" />
            <div className="photo-caption">
              <span>Jean Victor</span>
              <small>Software Engineer</small>
            </div>
          </div>
          <div className="visual-note note-top">APIs · Integrations · Automation</div>
          <div className="visual-note note-bottom">React · Node · TypeScript</div>
        </div>
      </div>
    </HomeContainer>
  );
}
