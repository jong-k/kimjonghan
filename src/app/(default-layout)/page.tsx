"use client";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const removeTweenRef = useRef<gsap.core.Tween | null>(null);
  const [active, setActive] = useState(true);
  const box2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!boxRef.current) return;
      removeTweenRef.current = gsap.to(boxRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        paused: true,
        onComplete: () => setActive(false),
      });
    },
    {
      scope: containerRef,
    }
  );

  const remove = () => removeTweenRef.current?.play();
  const remove2 = () => {
    const el = box2Ref.current;
    gsap.set(el, { opacity: 0 });
  };

  return (
    <div className="flex-col">
      <Button variant="secondary" onClick={remove}>
        제거
      </Button>
      <Button variant="secondary" onClick={remove2}>
        제거2
      </Button>
      <div ref={containerRef} className="my-10 flex gap-4">
        {active && (
          <div
            ref={boxRef}
            className="h-40 w-40 rounded-xl bg-[linear-gradient(180deg,#f7bdf8_32.25%,#2f3cc0_92.68%)]"
          ></div>
        )}
        <div
          ref={box2Ref}
          className="h-40 w-40 rounded-xl bg-[linear-gradient(45deg,#f7bdf8_21.15%,#cd237f_81.93%)]"
        ></div>
      </div>
    </div>
  );
}
