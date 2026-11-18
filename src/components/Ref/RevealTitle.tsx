import { ElementType, Fragment, useEffect, useRef } from "react";
import { EASE_OUT_EXPO } from "../Effects/scroll";

export type Segment = { t: string; k?: "grad" | "outline" | "sky" | "lilac" | "amber" };

interface RevealTitleProps {
  lines: Segment[][];
  as?: ElementType;
  className?: string;
}

// Título que surge letra a letra. Trechos com gradiente animam como um bloco,
// porque o background-clip: text não atravessa letras animadas separadamente.
export function RevealTitle({ lines, as: Tag = "h2", className = "r-h2" }: RevealTitleProps) {
  const ref = useRef<HTMLElement>(null);
  const label = lines.map((line) => line.map((segment) => segment.t).join("")).join(" ");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.classList.remove("in");
    const units = element.querySelectorAll<HTMLElement>(".rv-unit");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        units.forEach((unit, index) => {
          unit.animate(
            [
              { opacity: 0, transform: "translateY(.3em)", filter: "blur(8px)" },
              { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
            ],
            { duration: 800, delay: index * 26, easing: EASE_OUT_EXPO, fill: "both" }
          );
        });
        element.classList.add("in");
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [label]);

  return (
    <Tag ref={ref} className={`rv ${className}`} aria-label={label}>
      {lines.map((line, lineIndex) => (
        <span className="line" key={lineIndex} aria-hidden="true">
          {line.map((segment, segmentIndex) => {
            if (segment.k === "grad") {
              return <span key={segmentIndex} className="rv-unit r-grad">{segment.t}</span>;
            }
            const color = segment.k ? `r-${segment.k}` : "";
            return (
              <Fragment key={segmentIndex}>
                {segment.t.split(/(\s+)/).map((word, wordIndex) =>
                  word.trim() === "" ? (
                    word
                  ) : (
                    <span className="word" key={wordIndex}>
                      {[...word].map((char, charIndex) => (
                        <span className={`rv-unit ${color}`} key={charIndex}>{char}</span>
                      ))}
                    </span>
                  )
                )}
              </Fragment>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
