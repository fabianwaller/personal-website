"use client";

import { ArrowRight, CommandIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useCommandMenu } from "@/provider/CommandMenuContext";
import { navigationItems, socialItems } from "./navigation";

export function CommandMenuButton() {
  const { toggle } = useCommandMenu();
  // const isMac = /(Mac)/i.test(navigator.userAgent)
  // const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
  const isMac = true;
  const isMobile = false;

  const searchParams = useSearchParams();

  const search = searchParams.get("viewport");

  console.log(search);

  let action;
  let cmd;
  let hotkey;

  if (isMobile) {
    action = "Tap ";
  } else {
    action = "Press ";
    if (isMac) {
      cmd = <CommandIcon />;
    } else {
      cmd = <span>ctrl</span>;
    }
    hotkey = (
      <>
        <div className="mx-2 flex h-5 w-5 items-center">{cmd}</div>
        <span>K</span>
      </>
    );
  }

  return (
    <Button variant="ghost" className="relative -left-4 p-4">
      <div className="flex items-center font-medium" onClick={toggle}>
        <span>{action}</span>
        {hotkey}
        <span className="ml-2">for shortcuts</span>
        <span className="ml-2">
          <ArrowRight />
        </span>
      </div>
    </Button>
  );
}

export function CommandMenu() {
  const router = useRouter();

  const { open, toggle } = useCommandMenu();

  const handleSelect = (path: string) => {
    toggle();
    router.push(path);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  return (
    <div className="space-y-4">
      <CommandDialog open={open} onOpenChange={toggle}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="External">
            {socialItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => handleSelect(item.href)}
              >
                {item.icon}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            {navigationItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => handleSelect(item.href)}
              >
                {item.icon}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
