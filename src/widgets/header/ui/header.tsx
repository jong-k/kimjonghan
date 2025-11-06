import { Separator } from "@/shared/shadcn-ui/components/ui/separator";
import { ResponsiveWrapper } from "@/shared/ui";
import { AppLogo } from "./app-logo";
import NavBar from "./nav-bar";
import TopBanner from "./top-banner";
import { TOP_BANNER_TEXT } from "../config";

export function Header() {
  return (
    <header className="w-full bg-neutral-900">
      <TopBanner text={TOP_BANNER_TEXT} />
      <ResponsiveWrapper>
        <div className="flex h-navbar items-center justify-between">
          <AppLogo />
          <NavBar />
        </div>
        <Separator className="bg-neutral-500" />
      </ResponsiveWrapper>
    </header>
  );
}
