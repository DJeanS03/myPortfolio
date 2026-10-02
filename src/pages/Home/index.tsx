import { useEffect, useState } from "react";
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { Home } from "../../components/Sections/Home";
import { About } from "../../components/Sections/About";
import { Projects } from "../../components/Sections/Projects";
import { Experiences } from "../../components/Sections/Services";
import { Skills } from "../../components/Sections/Skills";
import { Education } from "../../components/Sections/Education";
import { Contact } from "../../components/Sections/Contact";
import { ScrollButton } from "../../components/UI/ScrollButton";
import { MainContainer } from "./styles";

export type Language = "en" | "pt";

export function Main() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || "pt"
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  return (
    <MainContainer>
      <Header
        Catch={scrolled}
        language={language}
        onLanguageChange={setLanguage}
      />
      <ScrollButton />
      <Home language={language} />
      <About language={language} />
      <Projects language={language} />
      <Experiences language={language} />
      <Skills language={language} />
      <Education language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </MainContainer>
  );
}
