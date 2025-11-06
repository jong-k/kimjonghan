import { ResponsiveWrapper } from "@/shared/ui";
import "@/styles/globals.css";
import { Header } from "@/widgets/header/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="h-[calc(100dvh-var(--top-banner-height)-var(--navbar-height)-1px)] w-full bg-neutral-900 py-10">
          <ResponsiveWrapper>{children}</ResponsiveWrapper>
        </main>
      </body>
    </html>
  );
}
