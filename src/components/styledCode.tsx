"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StyledCode({ children }: { children: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-2 h-8 w-8"
        onClick={copyToClipboard}
        aria-label="Copy code to clipboard"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      <pre className="overflow-x-auto rounded-lg text-secondary-foreground">
        <code dangerouslySetInnerHTML={{ __html: children }} />
      </pre>
    </div>
  );
}
