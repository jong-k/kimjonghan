import gsap from "gsap";
import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import type { Prefix } from "./types";

gsap.registerPlugin(useGSAP);

interface AnimationRefs {
  scopeRef: RefObject<HTMLDivElement>;
  nameRef: RefObject<HTMLElement>;
  titleRef: RefObject<HTMLElement>;
}

const DROP_DURATION = 0.3;
const BOUNCE_DOWN_DURATION = 0.08;
const BOUNCE_UP_DURATION = 0.12;
const HIDE_DELAY = 1;
const HIDE_DURATION = 0.22;

const animatePrefix = (el: HTMLElement, shouldShow: boolean) => {
  if (shouldShow) {
    const tl = gsap.timeline();
    tl.fromTo(el, { opacity: 0, y: -50, scaleY: 1 }, { opacity: 1, y: 0, duration: DROP_DURATION, ease: "power3.in" })
      .to(el, {
        y: 4,
        scaleY: 0.75,
        duration: BOUNCE_DOWN_DURATION,
        ease: "power1.inOut",
      })
      .to(el, { y: 0, scaleY: 1, duration: BOUNCE_UP_DURATION, ease: "power1.out" });

    gsap.delayedCall(HIDE_DELAY, () => {
      gsap.to(el, { opacity: 0, y: -20, duration: HIDE_DURATION, ease: "power2.in" });
    });
  } else {
    gsap.set(el, { opacity: 0 });
  }
};

export const usePrefixAnimation = (prefix: Prefix, { scopeRef, nameRef, titleRef }: AnimationRefs) => {
  useGSAP(
    () => {
      const namePrefixEl = nameRef.current;
      const titlePrefixEl = titleRef.current;
      if (!namePrefixEl || !titlePrefixEl) return;

      [namePrefixEl, titlePrefixEl].forEach(el => gsap.set(el, { opacity: 0, transformOrigin: "50% 100%" }));

      animatePrefix(namePrefixEl, !!prefix.name);
      animatePrefix(titlePrefixEl, !!prefix.title);
    },
    { dependencies: [prefix.name, prefix.title], scope: scopeRef }
  );
};
