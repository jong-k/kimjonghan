"use client";

import { useRef } from "react";
import { cn } from "@/shared/shadcn-ui/lib/utils";
import { usePrefix, usePrefixAnimation } from "../model";

export default function PrefixedLogo() {
  const { prefix, generatePrefix } = usePrefix();

  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const scope = useRef<HTMLDivElement>(null);

  // 애니메이션 훅으로 분리
  usePrefixAnimation(prefix, { nameRef, titleRef, scope });

  return (
    <div ref={scope} className="overflow-visible bg-red-100 p-1 text-2xl" onMouseEnter={generatePrefix}>
      <span ref={nameRef} className={cn("inline-block will-change-transform", { "mr-2": prefix.name })}>
        {prefix.name}
      </span>
      <span>김종한</span>
      <span ref={titleRef} className={cn("inline-block will-change-transform", { "ml-2": prefix.title })}>
        {prefix.title}
      </span>
      <span>.zip</span>
    </div>
  );
}
