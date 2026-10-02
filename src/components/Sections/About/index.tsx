import { Language } from "../../../pages/Home";
import { myTexts } from "../../../data/MyTexts";
import { myExpertise } from "../../../data/MyExpertise";
import { ExpertiseCard } from "../../UI/ExpertiseCard";
import { AboutContainer } from "./styles";

interface AboutProps { language: Language; }

export function About({ language }: AboutProps) {
  const t = myTexts[0].aboutMe.translations[language];

  return (
    <AboutContainer id="about" className="section-shell">
      <div className="container about-grid">
        <div className="about-copy" data-reveal>
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="about-lead">{t.description}</p>
          <p>{t.descriptionSecondary}</p>
          <a
            className="resume-link"
            href="https://www.linkedin.com/in/jean-victor200"
            target="_blank"
            rel="noreferrer"
          >
            {t.button} <i className="bx bx-up-arrow-alt" aria-hidden="true" />
          </a>
        </div>

        <div className="expertise-grid" data-reveal>
          {myExpertise.map((item, index) => (
            <ExpertiseCard key={item.id} myExpertise={item} language={language} index={index} />
          ))}
        </div>
      </div>
    </AboutContainer>
  );
}
