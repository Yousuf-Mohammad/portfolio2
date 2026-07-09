"use client";

import { useState } from "react";
import { Construction, X } from "lucide-react";

const ConstructionBadge = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex items-center gap-2.5 rounded-full border border-acid/40 bg-ink/80 py-2 pl-3 pr-2.5 font-mono text-xs uppercase tracking-widest text-acid shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md">
      <Construction className="h-4 w-4 shrink-0 animate-pulse" />
      <span>This site is under construction</span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="flex h-5 w-5 items-center justify-center rounded-full text-dust transition-colors duration-300 hover:bg-bone/10 hover:text-bone"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default ConstructionBadge;
