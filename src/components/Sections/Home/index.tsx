import { HomeContainer } from "./styles";
import imagem from "../../../assets/profile2.jpeg";
import { RoundImage } from "../Home/styles";
import { myTexts } from "../../../data/MyTexts";


interface HomeProps {
  language: string;
}

export function Home({ language }: HomeProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="home__subtitle">
            {myTexts.map((myTexts) => (
              <div
                dangerouslySetInnerHTML={{
                  __html: myTexts.hero.translations.en.home__subtitle, //interpreta o span com html element
                }}
              />
            ))}
          </h3>
          <h1 className="home__title">
            {" "}
            {myTexts.map((myTexts) => (
              <>{myTexts.hero.translations.en.home__title}</>
            ))}
          </h1>
          <h3 className="home__education">
            {myTexts.map((myTexts) => (
              <>{myTexts.hero.translations.en.home__education}</>
            ))}
          </h3>

          <p className="home__description">
            {myTexts.map((myTexts) => (
              <>{myTexts.hero.translations.en.home__description}</>
            ))}
          </p>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="home__subtitle">
            {myTexts.map((myTexts) => (
              <div
                dangerouslySetInnerHTML={{
                  __html: myTexts.hero.translations.pt.home__subtitle, //interpreta o span com html element
                }}
              />
            ))}
          </h3>
          <h1 className="home__title">
            {myTexts.map((myTexts) => (
              <>{myTexts.hero.translations.pt.home__title}</>
            ))}
          </h1>
          <h3 className="home__education">
            {myTexts.map((myTexts) => (
              <>{myTexts.hero.translations.pt.home__education}</>
            ))}
          </h3>
          <p className="home__description">
            {myTexts.map((myTexts) => (
              <>{myTexts.hero.translations.pt.home__description}</>
            ))}
          </p>
        </>
      );
    }
  };

  return (
    <HomeContainer id="home">
      <div className="home__container container grid box">
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
          <RoundImage src={imagem} alt="Imagem Redonda" />
        </div>
      </div>
    </HomeContainer>
  );
}
