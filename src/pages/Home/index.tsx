import { Header } from "../../components/Layout/Header";
import { About } from "../../components/Sections/About";
import { Contact } from "../../components/Sections/Contact";
import { Footer } from "../../components/Layout/Footer";
import { Home } from "../../components/Sections/Home";
import { Projects } from "../../components/Sections/Projects";
import { ScrollButton } from "../../components/UI/ScrollButton";
import { Experiences } from "../../components/Sections/Services";
import { Skills } from "../../components/Sections/Skills";
import { MainContainer } from "./styles";
import { useState, useEffect } from "react";

export type Language = "en" | "pt";

export function Main() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10 && innerWidth > 898) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || "en"
  );
  

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <>
      <MainContainer>
        <Header
          Catch={scrolled}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        <ScrollButton />
        {/* <Home language={language} />
        <About language={language} />
        <Skills language={language} />
        <Experiences language={language} />
        <Projects language={language} /> */}
        <Contact language={language} />
        <Footer />
      </MainContainer>
    </>
  );
}
