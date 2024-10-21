"use client";

import { Button } from "./ui/button";
import { Link as LinkIcon } from "lucide-react";

const CopyButton = ({ href }: { href: string }) => {
  const copyToClipboard = async () => {
    const currentUrlWithoutId = window.location.href.split("#")[0];
    const currentUrl = `${currentUrlWithoutId}${href}`;
    await navigator.clipboard.writeText(currentUrl);
  };

  return (
    <Button
      variant="link"
      className="relative -left-2 hidden group-hover:inline"
      onClick={copyToClipboard}
    >
      <LinkIcon />
    </Button>
  );
};

export default CopyButton;
