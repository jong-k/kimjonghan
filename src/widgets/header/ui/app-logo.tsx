import Link from "next/link";
import PrefixedLogo from "./prefixed-logo";

export function AppLogo() {
  return (
    <Link href="/" aria-label="홈으로 이동">
      <PrefixedLogo />
    </Link>
  );
}
