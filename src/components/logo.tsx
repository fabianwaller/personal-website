import Link from "next/link";
import React from "react";

type LogoProps = {
  white?: boolean;
};

const Logo: React.FC<LogoProps> = ({ white }) => {
  return (
    <Link href="/">
      <span className="text-md font-semibold tracking-wide text-title-normal underline-offset-4 hover:text-primary-foreground hover:underline">
        Fabian
      </span>
    </Link>
  );
};

export default Logo;
