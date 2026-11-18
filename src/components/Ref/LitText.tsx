import { useEffect, useRef } from "react";
import { clamp01, subscribeScroll } from "../Effects/scroll";

interface LitTextProps {
  text: string;
  /** Palavras (minúsculas, sem pontuação) e a cor de destaque de cada uma. */
  highlights?: Record<string, "sky" | "lilac" | "amber">;
  className?: string;
}

// Parágrafo em que as palavras acendem uma a uma conforme a página rola.
export function LitText({ text, highlights = {}, className = "" }: LitTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const spans = Array.from(element.querySelectorAll<HTMLElement>(".lw"));
    let lit = -1;

    return subscribeScroll(() => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = clamp01((viewport * 0.85 - rect.top) / (rect.height + viewport * 0.3));
      const target = Math.round(progress * spans.length);
      if (target === lit) return;
      lit = target;
      spans.forEach((span, index) => span.classList.toggle("on", index < target));
    });
  }, [text]);

  return (
    <p ref={ref} className={`lit ${className}`}>
      {words.map((word, index) => {
        const key = word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
        const color = highlights[key];
        return (
          <span key={index}>
            <span className={`lw ${color ? `r-${color}` : ""}`}>{word}</span>{" "}
          </span>
        );
      })}
    </p>
  );
}
