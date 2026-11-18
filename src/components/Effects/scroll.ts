// Laço único de scroll: todos os efeitos ligados ao scroll se inscrevem aqui
// e rodam juntos num só requestAnimationFrame, apenas quando a página rola.

type Callback = () => void;

const subscribers = new Set<Callback>();
let ticking = false;
let bound = false;

const run = () => {
  ticking = false;
  subscribers.forEach((callback) => callback());
};

const request = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(run);
};

export function subscribeScroll(callback: Callback) {
  if (!bound) {
    bound = true;
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
  }
  subscribers.add(callback);
  request();
  return () => {
    subscribers.delete(callback);
  };
}

export const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

// Curva usada nas entradas principais (mesma do site de referência).
export const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
