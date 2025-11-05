import { Megaphone } from "lucide-react";

interface TopBannerProps {
  text: string;
}

export default function TopBanner({ text }: TopBannerProps) {
  return (
    <div className="flex h-top-header w-full items-center justify-center bg-[linear-gradient(114.41deg,#0ae448_20.74%,#abff84_65.5%)]">
      <Megaphone size="20" className="mr-2 inline-block" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
