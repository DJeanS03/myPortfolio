import { useEffect, useRef } from "react";

const GLYPHS = "!<>-_/[]{}=+*^?#01";

interface ScrambleProps {
  words: string[];
  className?: string;
}

// Texto que se embaralha e resolve na próxima palavra, em ciclo.
export function Scramble({ words, className }: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const key = words.join("|");

  useEffect(() => {
    const element = ref.current;
    if (!element || words.length === 0) return;

    let index = 0;
    let frame = 0;
    let timer = 0;
    let current = words[0];
    element.textContent = current;

    const scrambleTo = (next: string) => {
      const length = Math.max(current.length, next.length);
      const start = performance.now();
      const duration = 900;

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        let output = "";
        for (let i = 0; i < length; i++) {
          const resolveAt = (i / length) * 0.75 + 0.25;
          if (progress >= resolveAt) output += next[i] ?? "";
          else if (progress < 0.15 && current[i]) output += current[i];
          else output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        element.textContent = output;
        if (progress < 1) frame = requestAnimationFrame(tick);
        else current = next;
      };

      frame = requestAnimationFrame(tick);
    };

    const cycle = () => {
      index = (index + 1) % words.length;
      scrambleTo(words[index]);
      timer = window.setTimeout(cycle, 3200);
    };

    timer = window.setTimeout(cycle, 2600);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return <span ref={ref} className={className} />;
}
