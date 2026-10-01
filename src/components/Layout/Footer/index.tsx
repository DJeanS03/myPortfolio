import { Language } from "../../../pages/Home";
import { FooterContainer } from "./styles";

interface FooterProps { language: Language; }

export function Footer({ language }: FooterProps) {
  return (
    <FooterContainer>
      <div className="container footer-grid">
        <div>
          <strong>Jean Victor</strong>
          <p>{language === "pt" ? "Back-End / Full-Stack Developer" : "Back-End / Full-Stack Developer"}</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/DJeanS03" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jean-victor200" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">{language === "pt" ? "Contato" : "Contact"}</a>
        </div>
        <small>© {new Date().getFullYear()} Jean Victor</small>
      </div>
    </FooterContainer>
  );
}
