import { useState } from "react";

export function ShareControls({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = () =>
    typeof window === "undefined" ? "" : window.location.href;

  const share = (network: "x" | "linkedin" | "whatsapp") => {
    const url = encodeURIComponent(currentUrl());
    const text = encodeURIComponent(title);
    const targets = {
      x: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
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

  const btn =
    "kicker border border-border-strong px-3 py-2 text-ink transition-colors hover:bg-accent hover:text-accent-foreground";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="kicker mr-1 text-muted-foreground">Share</span>
      <button type="button" className={btn} onClick={() => share("x")}>
        X
      </button>
      <button type="button" className={btn} onClick={() => share("linkedin")}>
        LinkedIn
      </button>
      <button type="button" className={btn} onClick={() => share("whatsapp")}>
        WhatsApp
      </button>
      <button type="button" className={btn} onClick={copy} aria-live="polite">
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
