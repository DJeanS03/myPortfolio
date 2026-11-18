import { useEffect, useState } from "react";
import { GlobalEffects } from "../../components/Effects/GlobalEffects";
import { RefGlobal } from "../../components/Ref/RefGlobal";
import { RefHeader } from "../../components/Ref/Header";
import { RefHero } from "../../components/Ref/Hero";
import { RefAbout } from "../../components/Ref/About";
import { RefServices } from "../../components/Ref/Services";
import { RefExperience } from "../../components/Ref/Experience";
import { RefProjects } from "../../components/Ref/Projects";
import { RefStack } from "../../components/Ref/Stack";
import { RefContact } from "../../components/Ref/Contact";
import { MainContainer } from "./styles";

export type Language = "en" | "pt";

export function Main() {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || "pt"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

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
      <RefGlobal />
      <GlobalEffects />
      <RefHeader language={language} onLanguageChange={setLanguage} />
      <RefHero language={language} />
      <RefAbout language={language} />
      <RefServices language={language} />
      <RefExperience language={language} />
      <RefProjects language={language} />
      <RefStack language={language} />
      <RefContact language={language} />
    </MainContainer>
  );
}
