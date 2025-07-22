import Link from "next/link";
import React from "react";

type LogoProps = {
  white?: boolean;
};

const Logo: React.FC<LogoProps> = ({ white }) => {
  return (
    <Link href="/">
      <span className="text-md font-semibold tracking-wide text-title-normal hover:text-primary">
        Fabian
      </span>
    </Link>
  );
};

export default Logo;
