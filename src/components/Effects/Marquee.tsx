import { useEffect, useRef } from "react";
import { MarqueeContainer } from "./marqueeStyles";

interface MarqueeProps {
  items: string[];
}

// Faixa de texto infinita que acelera com a velocidade do scroll.
// O laço só roda enquanto a faixa está visível na tela.
export function Marquee({ items }: MarqueeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let x = 0;
    let velocity = 0;
    let lastY = window.scrollY;
    let frame = 0;
    let running = false;

    const loop = () => {
      const y = window.scrollY;
      velocity += (y - lastY - velocity) * 0.1;
      lastY = y;
      x -= 0.6 + Math.abs(velocity) * 0.25;
      const half = track.scrollWidth / 2;
      if (half > 0 && -x >= half) x += half;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        lastY = window.scrollY;
        frame = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(frame);
      }
    });

    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const group = [...items, ...items];

  return (
    <MarqueeContainer ref={wrapperRef} aria-hidden="true">
      <div className="track" ref={trackRef}>
        {[0, 1].map((copy) => (
          <div className="group" key={copy}>
            {group.map((item, index) => (
              <span key={`${copy}-${index}`}>
                {item}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </MarqueeContainer>
  );
}
