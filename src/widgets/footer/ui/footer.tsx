import { Button } from "@/shared/shadcn-ui/components/ui/button";
import { ResponsiveWrapper } from "@/shared/ui";
import ContactList from "./contact-list";
import { GITHUB_URL } from "../config";

export function Footer() {
  return (
    <footer className="h-footer-mobile w-full bg-neutral-200 sm:h-footer-desktop">
      <ResponsiveWrapper className="flex h-full items-center justify-between gap-2">
        <ContactList />
        <div>
          <span className="text-sm">Made by</span>
          <Button className="font-bold" variant="link" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              김종한
            </a>
          </Button>
        </div>
      </ResponsiveWrapper>
    </footer>
  );
}
