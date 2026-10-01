import { useEffect, useRef, useState } from "react";
import { Language } from "../../../pages/Home";
import { LanguageButtonContainer } from "./styles";

interface Props {
  language: Language;
  onLanguageChange: (selectedLanguage: Language) => void;
}

export function LanguageButton({ language, onLanguageChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <LanguageButtonContainer ref={rootRef}>
      <button
        type="button"
        className="language-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={language === "pt" ? "Alterar idioma" : "Change language"}
      >
        <i className="bx bx-globe" aria-hidden="true" />
        <span>{language.toUpperCase()}</span>
        <i className="bx bx-chevron-down" aria-hidden="true" />
      </button>

      {open && (
        <div className="language-menu" role="menu">
          <button type="button" role="menuitem" onClick={() => { onLanguageChange("pt"); setOpen(false); }}>
            Português <span>PT-BR</span>
          </button>
          <button type="button" role="menuitem" onClick={() => { onLanguageChange("en"); setOpen(false); }}>
            English <span>EN</span>
          </button>
        </div>
      )}
    </LanguageButtonContainer>
  );
}
