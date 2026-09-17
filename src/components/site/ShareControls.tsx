import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ShareControls({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = () =>
    typeof window === "undefined" ? "" : window.location.href;

  const share = (network: "x" | "linkedin" | "whatsapp") => {
    const url = encodeURIComponent(currentUrl());
    const text = encodeURIComponent(title);
    const targets = {
      x: `https://x.com/intent/post?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };
    window.open(targets[network], "_blank", "noopener,noreferrer");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="kicker mr-1 text-muted-foreground">Share</span>
      <Button type="button" variant="outline" size="sm" className="rounded-none" onClick={() => share("x")} aria-label="Share on X">
        X
      </Button>
      <Button type="button" variant="outline" size="sm" className="rounded-none" onClick={() => share("linkedin")} aria-label="Share on LinkedIn">
        LinkedIn
      </Button>
      <Button type="button" variant="outline" size="sm" className="rounded-none" onClick={() => share("whatsapp")} aria-label="Share on WhatsApp">
        WhatsApp
      </Button>
      <Button type="button" variant="outline" size="sm" className="rounded-none" onClick={copy} aria-live="polite">
        {copied ? "Link copied" : "Copy link"}
      </Button>
    </div>
  );
}
