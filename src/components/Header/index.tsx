import { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";

import Logo from "../../assets/Logo.svg";

interface Props {
  Catch: boolean;
  language: string;
  onLanguageChange: (selectedLanguage: string) => void;
}

export function Header({ Catch, language, onLanguageChange }: Props) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      sections.forEach((current: HTMLElement) => {
        const sectionHeight: number = current.offsetHeight;
        const sectionTop: number =
          current.getBoundingClientRect().top + window.pageYOffset;
        const sectionId: string | null = current.getAttribute("id");
        const sectionsClassI: HTMLAnchorElement | null = document.querySelector(
          `.nav__menu a[href="#${sectionId}"] i`
        );
        const sectionsClassA: HTMLAnchorElement | null = document.querySelector(
          `.nav__menu a[href="#${sectionId}"]`
        );

        if (
          scrollY > sectionTop - window.innerHeight * 0.5 &&
          scrollY <= sectionTop + sectionHeight - window.innerHeight * 0.5
        ) {
          sectionsClassI?.classList.add("active-link");
          sectionsClassA?.classList.add("active-link");
        } else {
          sectionsClassI?.classList.remove("active-link");
          sectionsClassA?.classList.remove("active-link");
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [languageName, setLanguageName] = useState("");

  const handleToggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    setShowLanguageOptions(false);
  };

  useEffect(() => {
    if (language === "en") {
      setLanguageName("English (US)");
    } else if (language === "pt") {
      setLanguageName("Português (Brasil)");
    }
  }, [language]);

  return (
    <HeaderContainer>
      <nav className={Catch ? "nav container blur-header" : "nav container"}>
        <a href="#" className="nav__logo">
          <img src={Logo} width={30} /> Jean <span>Victor</span>
        </a>

        {/*       <div className="language-container">
          <button className="toggle-btn" onClick={handleToggleLanguageOptions}>
            <i className="bx bx-globe"></i>
            {languageName}
          </button>
          {showLanguageOptions && (
            <div className="language-options">
              <button onClick={() => handleLanguageChange("en")}>
                English (US)
              </button>
              <button onClick={() => handleLanguageChange("pt")}>
                Português (Brasil)
              </button>
            </div>
          )}
        </div> */}

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className='bx bx-home-alt-2 nav__icon active-link"'></i>
                {language === "en" ? "Home" : "Início"}
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user nav__icon"></i>
                {language === "en" ? "About" : "Sobre"}
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-trophy nav__icon"></i>
                {language === "en" ? "Skills" : "Habilidades"}
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="bx bx-briefcase-alt-2 nav__icon"></i>
                {language === "en" ? "Services" : "Serviços"}
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="bx bx-file nav__icon"></i>
                {language === "en" ? "Projects" : "Projetos"}
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message nav__icon"></i>
                {language === "en" ? "Contact" : "Contato"}
              </a>
            </li>
            <div className="language-container">
              <button
                className="toggle-btn"
                onClick={handleToggleLanguageOptions}
              >
                <i className="bx bx-globe"></i>
                <span className="language__name">{languageName}</span>
              </button>
              {showLanguageOptions && (
                <div className="language-options">
                  <button onClick={() => handleLanguageChange("en")}>
                    English (US)
                  </button>
                  <button onClick={() => handleLanguageChange("pt")}>
                    Português (Brasil)
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  );
}
