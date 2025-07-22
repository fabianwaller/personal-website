"use client";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FolderKanban, House, Newspaper, User, Wrench } from "lucide-react";
import MenuButton from "./MenuButton";

export const navigationItems = [
  {
    href: "/",
    title: "Home",
    icon: <House className="h-full w-full" />,
  },
  {
    href: "/about",
    title: "About",
    icon: <User className="h-full w-full" />,
  },
  {
    href: "/projects",
    title: "Projects",
    icon: <FolderKanban className="h-full w-full" />,
  },
  {
    href: "/uses",
    title: "Uses",
    icon: <Wrench className="h-full w-full" />,
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

  const activeClass = "text-primary underline underline-offset-4";

  return (
    <>
      <NavigationMenu
        className={cn(
          "ease-out-expo fixed left-0 right-0 top-0 max-w-full -translate-y-full rounded-b-2xl bg-background p-0 px-6 pb-12 pt-24 opacity-0 shadow-xl backdrop-blur-3xl duration-300 md:relative md:max-w-fit md:translate-y-0 md:rounded-none md:p-0 md:opacity-100 md:shadow-none md:duration-0",
          menuOpen ? "translate-y-0 opacity-100 md:relative" : null,
        )}
      >
        <NavigationMenuList
          className={cn(
            "grid w-screen grid-cols-3 gap-x-4 gap-y-4 px-4 md:flex md:w-fit md:gap-0 md:space-x-1 md:p-0",
          )}
        >
          {navigationItems.map((item) => (
            <NavigationMenuItem
              key={item.href}
              className="m-0 flex flex-col items-center"
            >
              <NavigationMenuLink
                href={item.href}
                className={cn([
                  navigationMenuTriggerStyle(),
                  pathname == item.href ? activeClass : null,
                  "flex h-fit flex-col gap-2",
                ])}
                onClick={() => (menuOpen ? toggleMenu() : null)}
              >
                <div className="size-4 sm:size-6 md:hidden">{item.icon}</div>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
