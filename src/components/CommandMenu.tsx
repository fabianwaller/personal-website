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

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useCommandMenu } from "@/provider/CommandMenuContext";
import { navigationItems, socialItems } from "@/components/navigation";
import { useBlogPosts } from "@/provider/BlogPostsContext";

export function CommandMenuButton() {
  const { toggle } = useCommandMenu();

  const [action, setAction] = useState("Tap ");
  const [cmd, setCmd] = useState<React.ReactNode>(null);
  const [hotkey, setHotkey] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (!window) return null;
    console.log(window.navigator.userAgent);
    const isMac = /(Mac)/i.test(window.navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(window.navigator.userAgent);
    console.log(isMac, isMobile);
    if (isMobile) {
      setAction("Tap ");
    } else {
      setAction("Press ");
      if (isMac) {
        setCmd(<CommandIcon />);
      } else {
        setCmd(<span>ctrl</span>);
      }
      setHotkey(<span>K</span>);
    }
  }, []);

  return (
    <Button variant="ghost" className="relative -left-4">
      <div className="flex items-center font-medium" onClick={toggle}>
        <span>{action}</span>
        {cmd && hotkey && (
          <>
            <div className="mx-2 flex h-5 w-5 items-center">{cmd}</div>
            {hotkey}
          </>
        )}
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

  const { blogPosts } = useBlogPosts();

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
          <CommandGroup heading="Blog">
            {blogPosts.map((post) => (
              <CommandItem
                key={post.slug}
                onSelect={() => handleSelect(`/blog/${post.slug}`)}
              >
                <span>{post.metadata.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
