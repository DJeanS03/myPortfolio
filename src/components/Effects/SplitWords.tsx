import { ElementType, useEffect, useRef } from "react";
import { EASE_OUT_EXPO } from "./scroll";

interface SplitWordsProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Quantas palavras do final recebem o gradiente animado. */
  accent?: number;
  /** Índices das palavras desenhadas só com contorno. */
  outline?: number[];
}

// Título que surge palavra por palavra, cada uma saindo do desfoque.
export function SplitWords({ text, as: Tag = "h2", className = "", accent = 0, outline = [] }: SplitWordsProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.classList.remove("is-in");
    const spans = element.querySelectorAll<HTMLElement>(".sw");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        spans.forEach((span, index) => {
          span.animate(
            [
              { opacity: 0, filter: "blur(12px)", transform: "translateY(40%)" },
              { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
            ],
            { duration: 900, delay: index * 70, easing: EASE_OUT_EXPO, fill: "both" }
          );
        });
        element.classList.add("is-in");
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);

    // O gradiente animado (.aurora) repinta o texto a cada quadro;
    // ele só roda enquanto o título está na tela.
    const visibility = new IntersectionObserver(([entry]) => {
      element.classList.toggle("on-screen", entry.isIntersecting);
    });
    visibility.observe(element);

    return () => {
      observer.disconnect();
      visibility.disconnect();
    };
  }, [text]);

  return (
    <Tag ref={ref} className={`split-words ${className}`} aria-label={text}>
      {words.map((word, index) => {
        const classes = ["sw"];
        if (index >= words.length - accent) classes.push("aurora");
        if (outline.includes(index)) classes.push("outline");
        return (
          <span key={`${word}-${index}`} className={classes.join(" ")} aria-hidden="true">
            {word}
          </span>
        );
      })}
    </Tag>
  );
}
