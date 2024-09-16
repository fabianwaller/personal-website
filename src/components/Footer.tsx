"use client"

import { Mail } from "lucide-react";
import { FaXTwitter as Twitter, FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa6"
import Container from "./Container";
import Logo from "./logo"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { navigationItems } from "./navigation";

const Footer: React.FC = () => {
    const pathname = usePathname()

    if (pathname == "/") {
        return null
    }

    return (
        <footer className="mt-8 relative">
            <div className="pt-8 pb-12 border-solid border-t-1 rounded-t-xl">
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
                                        <span className="hover:text-primary-foreground">{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-col gap-y-4">
                            <span className="block font-semibold mb-4">Explore</span>
                            <li>
                                <Link href={"/contact"}>
                                    <span className="hover:text-primary-foreground">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-xl flex gap-6">
                        <Link href="/contact">
                            <Mail className="h-8 w-8" />
                        </Link>
                        <Link href="https://github.com/fabianwaller" target="_blank" >
                            <Github className="h-8 w-8" />
                        </Link>
                        <Link href="https://twitter.com/fabianwallerr" target="_blank" >
                            <Twitter className="h-8 w-8" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/fabian-waller-974840213/" target="_blank">
                            <LinkedIn className="h-8 w-8" />
                        </Link>
                    </div>

                    <p className="text-sm text-left text-text-light">&#169; Fabian Waller. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    )
}
export default Footer;