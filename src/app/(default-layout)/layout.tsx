import localFont from "next/font/local";
import { Toaster } from "@/shared/shadcn-ui/components/ui/sonner";
import { ResponsiveWrapper } from "@/shared/ui";
import "@/styles/globals.css";
import { Footer } from "@/widgets/footer/ui";
import { Header } from "@/widgets/header/ui";

const pretendard = localFont({
  display: "swap",
  src: "../../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <main className="min-h-[calc(100dvh-var(--navbar-height)-var(--footer-mobile-height)-1px)] w-full bg-neutral-900 py-10 sm:min-h-[calc(100dvh-var(--top-banner-height)-var(--navbar-height)-var(--footer-desktop-height)-1px)]">
          <ResponsiveWrapper>{children}</ResponsiveWrapper>
        </main>
        <Footer />
        <Toaster closeButton position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
