"use client"

import * as React from "react"
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

export const navigationItems = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/journey", title: "Journey" },
    { href: "/projects", title: "Projects" },
    { href: "/blog", title: "Blog" },
]


export function Navigation() {

    const pathname = usePathname()

    const activeClass = "text-primary"

    return (
        <NavigationMenu className="justify-end hidden md:block">
            <NavigationMenuList>
                {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn([navigationMenuTriggerStyle(), pathname == item.href ? activeClass : null])}>
                                {item.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}