"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex" ref={containerRef}>
      <div className="h-40 w-40 bg-[linear-gradient(180deg,#f7bdf8_32.25%,#2f3cc0_92.68%)]"></div>
      <div className="h-40 w-40 bg-[linear-gradient(45deg,#f7bdf8_21.15%,#cd237f_81.93%)]"></div>
      <div className="h-40 w-40 bg-[linear-gradient(90deg,#0a157a_30.82%,#15bfe4_81.82%)]"></div>
    </div>
  );
}
