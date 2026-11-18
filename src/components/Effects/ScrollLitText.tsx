import { useEffect, useRef } from "react";
import { clamp01, subscribeScroll } from "./scroll";

interface ScrollLitTextProps {
  text: string;
  className?: string;
}

// Parágrafo que acende palavra por palavra conforme a página rola.
export function ScrollLitText({ text, className = "" }: ScrollLitTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const spans = Array.from(element.querySelectorAll<HTMLElement>(".lw"));
    let lastCount = -1;

    return subscribeScroll(() => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = clamp01((viewport * 0.85 - rect.top) / (rect.height + viewport * 0.35));
      const count = Math.round(progress * spans.length);
      if (count === lastCount) return;
      lastCount = count;
      spans.forEach((span, index) => span.classList.toggle("on", index < count));
    });
  }, [text]);

  return (
    <p ref={ref} className={`scroll-lit ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="lw">
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
