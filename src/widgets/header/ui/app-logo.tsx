"use client";
"use client";

import Link from "next/link";
import PrefixedLogo from "./prefixed-logo";
import { usePrefix } from "../model";

export function AppLogo() {
  const { prefix, generatePrefix } = usePrefix();

  return (
    <Link href="/" aria-label="홈으로 이동" onPointerEnter={generatePrefix} onFocus={generatePrefix}>
      <PrefixedLogo prefix={prefix} />
    </Link>
  );
}
