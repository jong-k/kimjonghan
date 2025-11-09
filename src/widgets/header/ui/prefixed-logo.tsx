"use client";

import { useRef } from "react";
import { cn } from "@/shared/shadcn-ui/lib/utils";
import { usePrefixAnimation } from "../model";
import type { Prefix } from "../model";

interface PrefixedLogoProps {
  prefix: Prefix;
}

export default function PrefixedLogo({ prefix }: PrefixedLogoProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  usePrefixAnimation(prefix, { scopeRef, nameRef, titleRef });

  return (
    <div ref={scopeRef} className="overflow-visible p-1 text-3xl font-bold text-neutral-100 select-none">
      <span
        ref={nameRef}
        aria-hidden="true"
        className={cn("inline-block will-change-transform", { "mr-2": prefix.name })}
      >
        {prefix.name}
      </span>
      <span>김종한</span>
      <span
        ref={titleRef}
        aria-hidden="true"
        className={cn("inline-block will-change-transform", { "ml-2": prefix.title })}
      >
        {prefix.title}
      </span>
      <span>.zip</span>
    </div>
  );
}
