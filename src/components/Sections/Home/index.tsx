import { HomeContainer } from "./styles";
import imagem from "../../../assets/profile2.jpeg";
import { RoundImage } from "../Home/styles";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";

interface HomeProps {
  language: Language;
}

export function Home({ language }: HomeProps) {
  const getTranslation = () => {
    const translation = myTexts[0].hero.translations[language] || myTexts[0].hero.translations.en;
    return translation;
  };

  const translation = getTranslation();

  return (
    <HomeContainer id="home">
      <div className="home__container container grid box">
        <div className="home__content">
          <div className="home__data">
            <h3 className="home__subtitle" dangerouslySetInnerHTML={{ __html: translation.home__subtitle }} />
            <h1 className="home__title">{translation.home__title}</h1>
            <h3 className="home__education">{translation.home__education}</h3>
            <p className="home__description">{translation.home__description}</p>
          </div>
          <div className="home__social">
            <a href="https://github.com/DJeanS03" target="_blank" className="home__social-link">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jean-victor-7bb04519a/" target="_blank" className="home__social-link">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className="home__image">
          <RoundImage src={imagem} alt="Imagem Redonda" />
        </div>
      </div>
    </HomeContainer>
  );
}
