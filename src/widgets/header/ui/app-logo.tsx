import Link from "next/link";
import PrefixedLogo from "./prefixed-logo";

export function AppLogo() {
  return (
    <Link href="/">
      <PrefixedLogo />
    </Link>
  );
}
