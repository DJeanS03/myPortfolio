import { Header } from "../../components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { ScrollButton } from "./components/ScrollButton";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { MainContainer } from "./styles";

import { useState, useEffect } from "react";

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

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleLanguageChange = (lang: string) => {
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
        <Home language={language} />
        <About language={language} />
        <Skills language={language} />
        <Services language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <Footer />
      </MainContainer>
    </>
  );
}
