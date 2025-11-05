import { Megaphone } from "lucide-react";
import { cn } from "@/shared/shadcn-ui/lib/utils";

interface TopBannerProps {
  text: string;
  backgroundColorClassname?: string;
}

export default function TopBanner({
  text,
  backgroundColorClassname = "bg-[linear-gradient(114.41deg,#0ae448_20.74%,#abff84_65.5%)]",
}: TopBannerProps) {
  return (
    <div className={cn("flex h-top-banner w-full items-center justify-center", backgroundColorClassname)}>
      <Megaphone size="20" className="mr-2 inline-block" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
