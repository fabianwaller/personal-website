"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { useState } from "react"
import { FolderKanban, House, Mail, Menu, Newspaper, Rocket, User, X } from "lucide-react"
import { FaXTwitter as Twitter, FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa6"

export const socialItems = [
    { href: "/contact", title: "Contact", icon: <Mail className="h-full w-full" /> },
    { href: "https://github.com/fabianwaller", title: "Github", icon: <Github className="h-full w-full" />, blank: true },
    { href: "https://x.com/fabianwallerr", title: "X", icon: <Twitter className="h-full w-full" />, blank: true },
    { href: "https://www.linkedin.com/in/fabian-waller-974840213/", title: "LinkedIn", icon: <LinkedIn className="h-full w-full" />, blank: true },
]

export const navigationItems = [
    { href: "/", title: "Home", icon: <House className="h-full w-full" /> },
    { href: "/about", title: "About", icon: <User className="h-full w-full" /> },
    { href: "/journey", title: "Journey", icon: <Rocket className="h-full w-full" /> },
    { href: "/projects", title: "Projects", icon: <FolderKanban className="h-full w-full" /> },
    { href: "/blog", title: "Blog", icon: <Newspaper className="h-full w-full" /> },
]

export function Navigation() {

    const [menuOpen, setMenuOpen] = useState(true)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const pathname = usePathname()

    const activeClass = "text-primary"

    return (
        <>
            <NavigationMenu className={cn("duration-300 md:duration-0  -top-full md:top-0 left-0 right-0 pt-24 pb-12 px-6 md:p-0 fixed md:relative max-w-full md:max-w-fit rounded-b-2xl md:rounded-none shadow-xl md:shadow-none backdrop-blur-3xl bg-background", menuOpen ? "top-0 md:relative" : null)}>
                <NavigationMenuList className={cn("md:space-x-1",
                    menuOpen ? "grid grid-cols-3 gap-y-4 gap-x-4 md:gap-0 px-4 md:p-0 md:flex w-screen md:w-fit" : ""
                )}>
                    {navigationItems.map((item) => (
                        <NavigationMenuItem key={item.href} className="flex flex-col items-center">
                            <Link href={item.href} legacyBehavior passHref >
                                <NavigationMenuLink className={cn([navigationMenuTriggerStyle(), pathname == item.href ? activeClass : null, menuOpen ? "flex flex-col h-fit" : null])}
                                    onClick={() => menuOpen ? toggleMenu() : null}>
                                    {menuOpen && <div className="w-4 h-4 sm:w-6 sm:h-6 mb-2 md:w-0 md:h-0 sm:m-0">{item.icon}</div>}
                                    {item.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))
                    }
                </NavigationMenuList >
            </NavigationMenu >
            {menuOpen && (
                <Button variant="ghost" className={cn("absolute right-2 z-50 md:hidden")} onClick={toggleMenu}>
                    <X />
                </Button>
            )}
            {!menuOpen && (
                <Button variant="ghost" className={cn("absolute right-2 md:hidden")} onClick={toggleMenu}>
                    <Menu />
                </Button>
            )}
        </>
    )
}