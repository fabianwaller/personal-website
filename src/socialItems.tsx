import { Rss } from "lucide-react";
import {
  FaXTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as LinkedIn,
  FaInstagram,
} from "react-icons/fa6";

export const socialItems = [
  {
    href: "https://x.com/fabianwallerr",
    title: "X",
    icon: <Twitter className="h-full w-full" />,
    blank: true,
  },
  {
    href: "https://www.instagram.com/fabianwallerr/",
    title: "Instagram",
    icon: <FaInstagram className="h-full w-full" />,
    blank: true,
  },
  {
    href: "https://github.com/fabianwaller",
    title: "Github",
    icon: <Github className="h-full w-full" />,
    blank: true,
  },
  {
    href: "https://www.linkedin.com/in/fabian-waller-974840213/",
    title: "LinkedIn",
    icon: <LinkedIn className="h-full w-full" />,
    blank: true,
  },
  {
    href: "/rss",
    title: "Feed",
    icon: <Rss className="h-full w-full" />,
    blank: true,
  },
];
