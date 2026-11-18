import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { clamp01, subscribeScroll } from "./scroll";
import { HorizontalScrollContainer } from "./horizontalStyles";

interface HorizontalScrollProps {
  children: ReactNode;
  /** Largura de cada item com a seção fixada (padrão: cartões largos). */
  itemWidth?: string;
  /** Conteúdo que fica preso no topo da área fixada (ex.: título da seção). */
  header?: ReactNode;
}

const DESKTOP = "(min-width: 901px)";

// Seção fixada na tela: o scroll vertical move os cards para o lado.
// Abaixo de 901px vira uma lista vertical comum.
export function HorizontalScroll({ children, itemWidth = "min(1040px, 80vw)", header }: HorizontalScrollProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(() => window.matchMedia(DESKTOP).matches);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP);
    const onChange = () => setEnabled(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    if (!enabled) {
      outer.style.height = "";
      track.style.transform = "";
      return;
    }

    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const size = () => {
      outer.style.height = `${window.innerHeight + distance()}px`;
    };

    size();
    const resizeObserver = new ResizeObserver(size);
    resizeObserver.observe(track);
    window.addEventListener("resize", size);

    const unsubscribe = subscribeScroll(() => {
      const range = outer.offsetHeight - window.innerHeight;
      const progress = range > 0 ? clamp01(-outer.getBoundingClientRect().top / range) : 0;
      track.style.transform = `translate3d(${-progress * distance()}px, 0, 0)`;
    });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", size);
      unsubscribe();
    };
  }, [enabled]);

  return (
    <HorizontalScrollContainer
      ref={outerRef}
      className={enabled ? "is-pinned" : ""}
      style={{ "--item-width": itemWidth } as CSSProperties}
    >
      <div className="pin">
        {header}
        <div className="track" ref={trackRef}>
          {children}
        </div>
      </div>
    </HorizontalScrollContainer>
  );
}
