export const isReducedMotionPreferred = () => {
  if (globalThis.window === undefined || typeof globalThis.matchMedia !== "function") return false;
  return globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
