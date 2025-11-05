import { AppLogo } from "@/feature/prefix-logo/ui";
import { ResponsiveWrapper } from "@/shared/ui";
import NavBar from "./nav-bar";
import TopBanner from "./top-banner";

export function Header() {
  return (
    <header className="w-full">
      <TopBanner text="반응형 UI가 적용되어 이제 다양한 디바이스에서 접속이 가능합니다!" />
      <ResponsiveWrapper className="flex h-navbar items-center justify-between">
        <AppLogo />
        <NavBar />
      </ResponsiveWrapper>
    </header>
  );
}
