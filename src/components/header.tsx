"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const breakpoint = 1;

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScroll(window.scrollY >= breakpoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 w-screen bg-background opacity-95",
        headerScroll && "shadow-sm",
      )}
      id="header"
    >
      <Container>
        <nav className="flex h-header-height items-center justify-between">
          <Logo />

          <Navigation />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
