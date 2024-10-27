import { useEffect, useState } from "react";
import { LanguageButtonContainer } from "./styles";

interface Props {
  language: string;
  onLanguageChange: (selectedLanguage: string) => void;
}

export function LanguageButton({ language, onLanguageChange }: Props) {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [languageName, setLanguageName] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  const handleToggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    setShowLanguageOptions(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;

      if (innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    // Definimos o estado inicialmente com base no tamanho da janela
    handleResize();

    // Adiciona o ouvinte para detectar a alteração no tamanho da tela
    window.addEventListener("resize", handleResize);

    // Remove o ouvinte ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileView) {
      // Se a página foi rolada e a largura da janela é maior que 898px, defina a classe "hidden" em "language__name"
      setLanguageName("hidden");
    } else {
      // Caso contrário, defina o texto normalmente
      if (language === "en") {
        setLanguageName("English");
      } else if (language === "pt") {
        setLanguageName("Português");
      }
    }
  }, [language, isMobileView]);

  return (
    <LanguageButtonContainer>
      <div className="language-container">
        <button className="toggle-btn" onClick={handleToggleLanguageOptions}>
          <i className="bx bx-globe"></i>
          <span
            className={`language__name ${isMobileView ? "hidden" : ""}`}
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
