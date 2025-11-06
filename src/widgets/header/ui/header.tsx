import { AppLogo } from "@/feature/prefix-logo/ui";
import { Separator } from "@/shared/shadcn-ui/components/ui/separator";
import { ResponsiveWrapper } from "@/shared/ui";
import NavBar from "./nav-bar";
import TopBanner from "./top-banner";

export function Header() {
  return (
    <header className="w-full">
      <TopBanner text="반응형 UI가 적용되어 이제 다양한 디바이스에서 접속이 가능합니다!" />
      <ResponsiveWrapper className="bg-neutral-900">
        <div className="flex h-navbar items-center justify-between">
          <AppLogo />
          <NavBar />
        </div>
        <Separator className="bg-neutral-500" />
      </ResponsiveWrapper>
    </header>
  );
}
