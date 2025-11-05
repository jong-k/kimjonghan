"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gsap.to(".green", { x: 100, duration: 1, rotation: 360, yoyo: true });
    gsap.to(".blue", { x: 200, duration: 1.5, rotation: 360, yoyo: true });
    gsap.to(".purple", { x: 300, duration: 2, rotation: 360, yoyo: true });
  }, []);

  return (
    <div>
      <div className="green flex w-10 text-5xl">⭐️</div>
      <div className="blue flex w-20 bg-blue-500">2</div>
      <div className="purple flex w-30 bg-purple-500">3</div>
    </div>
  );
}
