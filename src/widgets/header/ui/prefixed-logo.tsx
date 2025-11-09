"use client";

import { useRef } from "react";
import { cn } from "@/shared/shadcn-ui/lib/utils";
import { usePrefix, usePrefixAnimation } from "../model";

export default function PrefixedLogo() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  const { prefix, generatePrefix } = usePrefix();

  usePrefixAnimation(prefix, { scopeRef, nameRef, titleRef });

  return (
    <div
      ref={scopeRef}
      className="overflow-visible p-1 text-3xl font-bold text-neutral-100 select-none"
      onMouseEnter={generatePrefix}
    >
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
