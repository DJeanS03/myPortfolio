import Logo from "../../../assets/Logo.svg";
import { LanguageButton } from "../../UI/LanguageButton";
import { Language } from "../../../pages/Home";
import { HeaderContainer } from "./styles";

interface Props {
  Catch: boolean;
  language: Language;
  onLanguageChange: (selectedLanguage: Language) => void;
}

export function Header({ Catch, language, onLanguageChange }: Props) {
  const items = language === "pt"
    ? [
        ["about", "Sobre", "bx-user"],
        ["projects", "Projetos", "bx-grid-alt"],
        ["experience", "Experiência", "bx-briefcase-alt-2"],
        ["skills", "Stack", "bx-code-alt"],
        ["contact", "Contato", "bx-message-square-dots"],
      ]
    : [
        ["about", "About", "bx-user"],
        ["projects", "Projects", "bx-grid-alt"],
        ["experience", "Experience", "bx-briefcase-alt-2"],
        ["skills", "Stack", "bx-code-alt"],
        ["contact", "Contact", "bx-message-square-dots"],
      ];

  return (
    <HeaderContainer className={Catch ? "is-scrolled" : ""}>
      <nav className="container nav" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Jean Victor - Home">
          <img src={Logo} alt="" width={30} height={30} />
          <span>Jean Victor</span>
        </a>

        <ul className="nav-list">
          {items.map(([id, label, icon]) => (
            <li key={id}>
              <a href={`#${id}`}>
                <i className={`bx ${icon}`} aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <LanguageButton language={language} onLanguageChange={onLanguageChange} />
      </nav>
    </HeaderContainer>
  );
}
