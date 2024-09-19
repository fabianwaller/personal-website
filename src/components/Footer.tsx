"use client"

import Container from "./Container";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, socialItems } from "./navigation";

const Footer: React.FC = () => {
    const pathname = usePathname()

    if (pathname == "/") {
        return null
    }

    return (
        <footer className="mt-8 relative">
            <div className="py-16 border-solid border-t-1 rounded-t-xl">
                <Container className="gap-y-14 grid">

                    <div className="footer__logobox">
                        <Logo />
                    </div>

                    <div className="grid grid-cols-2-max gap-x-16">
                        <ul className="flex flex-col gap-y-4">
                            <span className="block font-semibold mb-4">Links</span>
                            {navigationItems.map((item) => (
                                <li key={item.href} >
                                    <Link href={item.href}>
                                        <span className="hover:text-primary">{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-xl flex gap-6">
                        {socialItems.map((item) => (
                            <Link key={item.href} href={item.href} target={item.blank ? "_blank" : "_self"} className="hover:text-primary w-8 h-8">
                                {item.icon}
                            </Link>
                        ))}
                    </div>

                    <p className="text-sm text-left text-text-light">&#169; Fabian Waller. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    )
}
export default Footer;