import { useEffect, useState } from "react";
import { LanguageButtonContainer } from "./styles";

interface Props {
  language: string;
  onLanguageChange: (selectedLanguage: string) => void;
}

export function LanguageButton({ language, onLanguageChange }: Props) {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [languageName, setLanguageName] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleToggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    setShowLanguageOptions(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const innerWidth = window.innerWidth;

      if (scrollTop > 10 && innerWidth > 898) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Certifique-se de remover o ouvinte de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled) {
      // Se a página foi rolada e a largura da janela é maior que 898px, defina a classe "hidden" em "language__name"
      setLanguageName("hidden");
    } else {
      // Caso contrário, defina o texto normalmente
      if (language === "en") {
        setLanguageName("English (US)");
      } else if (language === "pt") {
        setLanguageName("Português (Brasil)");
      }
    }
  }, [language, scrolled]);

  return (
    <LanguageButtonContainer>
      <div className="language-container">
        <button className="toggle-btn" onClick={handleToggleLanguageOptions}>
          <i className="bx bx-globe"></i>
          <span
            className={`language__name ${scrolled ? "hidden" : ""}`}
            style={{ transition: "opacity 0.3s" }}
          >
            {languageName}
          </span>
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
    </LanguageButtonContainer>
  );
}
