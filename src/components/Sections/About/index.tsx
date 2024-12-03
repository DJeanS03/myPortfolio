import { AboutContainer } from "./styles";
//import CV from "../../../assets/CV-Jean-Victor.pdf";
import { Button } from "../../UI/Button";
import { myTexts } from "../../../data/MyTexts";
import { ExpertiseCard } from "../../UI/ExpertiseCard";
import { myExpertise } from "../../../data/MyExpertise";
import { Language } from "../../../pages/Home";

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const getTranslation = () => {
    const translation =
      myTexts[0].aboutMe.translations[language] ||
      myTexts[0].aboutMe.translations.en;
    return translation;
  };

  const translation = getTranslation();

  return (
    <AboutContainer id="about">
      <h3
        className="section__subtitle"
        dangerouslySetInnerHTML={{ __html: translation.aboutMe__subtitle }}
      />
      <h2 className="section__title">{translation.aboutMe__title}</h2>
      
      <div className="about__container container grid box">
        <div className="about__data">
          <p
            className="about__description"
            dangerouslySetInnerHTML={{
              __html: translation.aboutMe__description,
            }}
          />
          {/* <Button text={translation.aboutMe__button} url={CV} fileName={"CV-Jean-Victor"} /> */}
          <Button text={translation.aboutMe__button} />
        </div>

        <div className="about__expertise">
          {myExpertise.map((myExpertise) => (
            <ExpertiseCard
              key={myExpertise.id}
              myExpertise={myExpertise}
              language={language}
            />
          ))}
        </div>
      </div>
    </AboutContainer>
  );
}
