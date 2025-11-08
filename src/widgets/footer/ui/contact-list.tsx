"use client";
import { toast } from "sonner";
import { copyToClipboard } from "@/shared/lib/utils";
import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { CONTACT_LINKS } from "../config";

const copyEmailToClipboard = async (email: string) => {
  const success = await copyToClipboard(email);
  if (success) {
    toast.success(`이메일 주소 ${email}이 클립보드에 복사되었습니다.`);
  } else {
    toast.error("이메일 주소 복사에 실패했습니다. 다시 시도해주세요.");
  }
};

export default function ContactList() {
  return (
    <div className="flex items-center gap-0 sm:gap-2">
      {CONTACT_LINKS.map(({ name, title, url }) => {
        if (name === "email") {
          return (
            <Button
              className="cursor-pointer font-semibold"
              aria-label="이메일 주소 복사"
              title="이메일 주소 복사"
              variant="ghost"
              key={name}
              onClick={() => copyEmailToClipboard(url)}
            >
              {title}
            </Button>
          );
        }
        return (
          <Button className="font-semibold" key={name} variant="link" asChild>
            <a href={url} rel="noopener noreferrer" target="_blank">
              {title}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
