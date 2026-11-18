import { useEffect, useRef } from "react";
import { subscribeScroll } from "./scroll";
import { EffectsLayer } from "./styles";

// Grão de filme, barra de progresso de leitura, cursor customizado
// e a luz que segue o mouse nos elementos com [data-glow].
export function GlobalEffects() {
  const barRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    return subscribeScroll(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    });
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const root = document.documentElement;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame = 0;
    let visible = false;

    // O anel persegue o mouse com atraso; o laço para sozinho quando alcança.
    const loop = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = Math.abs(targetX - ringX) + Math.abs(targetY - ringY) > 0.2
        ? requestAnimationFrame(loop)
        : 0;
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      if (!visible) {
        visible = true;
        ringX = targetX;
        ringY = targetY;
        root.classList.add("cursor-on");
      }

      const element = event.target instanceof Element ? event.target : null;
      const hoverTarget = element?.closest<HTMLElement>("[data-cursor]");
      ring.classList.toggle("is-big", Boolean(hoverTarget));
      const text = hoverTarget?.dataset.cursor ?? "";
      if (label.textContent !== text) label.textContent = text;

      const glow = element?.closest<HTMLElement>("[data-glow]");
      if (glow) {
        const rect = glow.getBoundingClientRect();
        glow.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        glow.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      if (!frame) frame = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      visible = false;
      root.classList.remove("cursor-on");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      root.classList.remove("cursor-on");
    };
  }, []);

  return (
    <EffectsLayer aria-hidden="true">
      <div className="grain" />
      <div className="progress" ref={barRef} />
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        <i className="shape" />
        <span ref={labelRef} />
      </div>
    </EffectsLayer>
  );
}
