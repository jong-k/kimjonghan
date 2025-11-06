"use client";

import { cn } from "@/shared/shadcn-ui/lib/utils";
import { usePrefixLogo } from "../model";

export default function PrefixedLogo() {
  const { prefix, generatePrefix } = usePrefixLogo();

  return (
    <div className="bg-red-100 p-1 text-2xl" onMouseEnter={generatePrefix}>
      <span className={cn({ "mr-2": prefix.namePrefix })}>{prefix.namePrefix}</span>
      <span>김종한</span>
      <span className={cn({ "ml-2": prefix.categoryPrefix })}>{prefix.categoryPrefix}</span>
      <span>.zip</span>
    </div>
  );
}
