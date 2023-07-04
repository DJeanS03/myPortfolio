import { SkilsContainer } from "./styles";

interface SkillsProps {
  language: string;
}

export function Skills({ language }: SkillsProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="section__subtitle">
            Favorite <span>Skills</span>
          </h3>
          <h2 className="section__title">My Skills</h2>
          <p className="skills__description">
            Here, you can see which abilities I have and how I can use them to
            produce projects for you.
          </p>
          <a href="#projects" className="button">
            See my Projects
          </a>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="section__subtitle">
            Habilidades <span>favoritas</span>
          </h3>
          <h2 className="section__title">Minhas Habilidades</h2>
          <p className="skills__description">
            Aqui você pode ver quais habilidades possuo e como posso utilizá-las
            para produzir projetos para você.
          </p>
          <a href="#projects" className="button">
            Veja meus Projetos
          </a>
        </>
      );
    }
  };
  return (
    <SkilsContainer id="skills">
      <div className="skills__container container grid">
        <div className="skills__data">
          {/* <h3 className="section__subtitle">
            Favorite <span>Skills</span>
          </h3>
          <h2 className="section__title">My Skills</h2>
          <p className="skills__description">
            Here, you can see which abilities I have and how I can use them to
            produce projects for you.
          </p>

          <a href="#projects" className="button">
            See my Projects
          </a> */}
          <div>{getText()}</div>
        </div>
        <div className="skills__content">
          <ol className="skills__group">
            <li className="skills__item">HTML & CSS</li>
            <li className="skills__item">JavaScript/TypeScript</li>

            <li className="skills__item">React</li>
            <li className="skills__item">Next</li>
          </ol>
          <ol className="skills__group" start={5}>
            <li className="skills__item">Bootstrap</li>
            <li className="skills__item">Node</li>
            <li className="skills__item">Git & GitHub</li>
          </ol>
        </div>
      </div>
    </SkilsContainer>
  );
}
