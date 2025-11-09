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

const animatePrefix = (el: HTMLElement, shouldShow: boolean) => {
  if (shouldShow) {
    const tl = gsap.timeline();
    tl.fromTo(el, { opacity: 0, y: -50, scaleY: 1 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.in" })
      .to(el, {
        y: 4,
        scaleY: 0.75,
        duration: 0.08,
        ease: "power1.inOut",
      })
      .to(el, { y: 0, scaleY: 1, duration: 0.12, ease: "power1.out" });

    gsap.delayedCall(1, () => {
      gsap.to(el, { opacity: 0, y: -20, duration: 0.22, ease: "power2.in" });
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
