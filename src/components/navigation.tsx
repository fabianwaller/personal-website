"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  FolderKanban,
  House,
  Mail,
  Menu,
  Newspaper,
  Rocket,
  User,
  X,
} from "lucide-react";
import {
  FaXTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as LinkedIn,
} from "react-icons/fa6";

export const socialItems = [
  {
    href: "/contact",
    title: "Contact",
    icon: <Mail className="h-full w-full" />,
  },
  {
    href: "https://github.com/fabianwaller",
    title: "Github",
    icon: <Github className="h-full w-full" />,
    blank: true,
  },
  {
    href: "https://x.com/fabianwallerr",
    title: "X",
    icon: <Twitter className="h-full w-full" />,
    blank: true,
  },
  {
    href: "https://www.linkedin.com/in/fabian-waller-974840213/",
    title: "LinkedIn",
    icon: <LinkedIn className="h-full w-full" />,
    blank: true,
  },
];

export const navigationItems = [
  { href: "/", title: "Home", icon: <House className="h-full w-full" /> },
  { href: "/about", title: "About", icon: <User className="h-full w-full" /> },
  {
    href: "/journey",
    title: "Journey",
    icon: <Rocket className="h-full w-full" />,
  },
  {
    href: "/projects",
    title: "Projects",
    icon: <FolderKanban className="h-full w-full" />,
  },
  {
    href: "/blog",
    title: "Blog",
    icon: <Newspaper className="h-full w-full" />,
  },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();

  const activeClass = "text-primary";

  return (
    <>
      <NavigationMenu
        className={cn(
          "fixed -top-full left-0 right-0 max-w-full rounded-b-2xl bg-background px-6 pb-12 pt-24 shadow-xl backdrop-blur-3xl duration-300 md:relative md:top-0 md:max-w-fit md:rounded-none md:p-0 md:shadow-none md:duration-0",
          menuOpen ? "top-0 md:relative" : null,
        )}
      >
        <NavigationMenuList
          className={cn(
            "md:space-x-1",
            menuOpen
              ? "grid w-screen grid-cols-3 gap-x-4 gap-y-4 px-4 md:flex md:w-fit md:gap-0 md:p-0"
              : "",
          )}
        >
          {navigationItems.map((item) => (
            <NavigationMenuItem
              key={item.href}
              className="flex flex-col items-center"
            >
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn([
                    navigationMenuTriggerStyle(),
                    pathname == item.href ? activeClass : null,
                    menuOpen ? "flex h-fit flex-col" : null,
                  ])}
                  onClick={() => (menuOpen ? toggleMenu() : null)}
                >
                  {menuOpen && (
                    <div className="mb-2 h-4 w-4 sm:m-0 sm:h-6 sm:w-6 md:h-0 md:w-0">
                      {item.icon}
                    </div>
                  )}
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {menuOpen && (
        <Button
          variant="ghost"
          className={cn("absolute right-2 z-50 md:hidden")}
          onClick={toggleMenu}
        >
          <X />
        </Button>
      )}
      {!menuOpen && (
        <Button
          variant="ghost"
          className={cn("absolute right-2 md:hidden")}
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      )}
    </>
  );
}
