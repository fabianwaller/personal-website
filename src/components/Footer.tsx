"use client";

import Container from "./Container";
import Logo from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/components/navigation";
import { socialItems } from "@/socialItems";

const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname == "/") {
    return null;
  }

  return (
    <footer className="relative mt-8">
      <div className="rounded-t-xl border-t-1 border-solid py-16">
        <Container className="grid gap-y-14">
          <div className="footer__logobox">
            <Logo />
          </div>

          <div className="grid grid-cols-2-max gap-x-16">
            <div className="flex flex-col gap-y-4">
              <span className="mb-4 block font-semibold">Links</span>
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} legacyBehavior>
                  <span className="hover:text-primary">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-6 text-xl">
            {socialItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.blank ? "_blank" : "_self"}
                className="h-8 w-8 hover:text-primary"
                legacyBehavior>
                {item.icon}
              </Link>
            ))}
          </div>

          <span className="text-left text-sm text-text-light">
            &#169; Fabian Waller. All rights reserved.
          </span>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
