import gsap from "gsap";
import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import type { Prefix } from "./types";

gsap.registerPlugin(useGSAP);

interface AnimationRefs {
  nameRef: RefObject<HTMLElement>;
  titleRef: RefObject<HTMLElement>;
  scope: RefObject<HTMLDivElement>;
}

export const usePrefixAnimation = (prefix: Prefix, { nameRef, titleRef, scope }: AnimationRefs) => {
  useGSAP(
    () => {
      // 초기 상태 세팅 (FOUC 방지)
      if (nameRef.current) gsap.set(nameRef.current, { opacity: 0, y: -8, transformOrigin: "50% 100%" });
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: -8, transformOrigin: "50% 100%" });

      // name prefix 등장/퇴장
      if (nameRef.current) {
        if (prefix.name) {
          const tl = gsap.timeline();
          tl.fromTo(
            nameRef.current,
            { opacity: 0, y: -80, scaleY: 1 },
            { opacity: 1, y: 0, duration: 0.32, ease: "power3.out" }
          )
            .to(nameRef.current, { y: 6, scaleY: 0.92, duration: 0.08, ease: "power1.inOut" })
            .to(nameRef.current, { y: 0, scaleY: 1, duration: 0.12, ease: "power1.out" });
          gsap.delayedCall(1, () => {
            if (!nameRef.current) return;
            gsap.to(nameRef.current, { opacity: 0, y: -20, duration: 0.22, ease: "power2.in" });
          });
        } else {
          gsap.set(nameRef.current, { opacity: 0, y: -8 });
        }
      }

      // title prefix 등장/퇴장
      if (titleRef.current) {
        if (prefix.title) {
          const tl = gsap.timeline();
          tl.fromTo(
            titleRef.current,
            { opacity: 0, y: -80, scaleY: 1 },
            { opacity: 1, y: 0, duration: 0.32, ease: "power3.out" }
          )
            .to(titleRef.current, { y: 6, scaleY: 0.92, duration: 0.08, ease: "power1.inOut" })
            .to(titleRef.current, { y: 0, scaleY: 1, duration: 0.12, ease: "power1.out" });
          gsap.delayedCall(1, () => {
            if (!titleRef.current) return;
            gsap.to(titleRef.current, { opacity: 0, y: -20, duration: 0.22, ease: "power2.in" });
          });
        } else {
          gsap.set(titleRef.current, { opacity: 0, y: -8 });
        }
      }
    },
    { dependencies: [prefix.name, prefix.title], scope }
  );
};
