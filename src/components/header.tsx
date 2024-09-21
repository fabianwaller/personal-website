"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./logo";
import { Navigation } from "./navigation";

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
      className={`fixed z-50 w-full bg-background opacity-95 ${headerScroll ? "shadow-sm" : ""}`}
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
