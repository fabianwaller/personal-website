import { Mail } from "lucide-react";
import { FaXTwitter as Twitter, FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa6"
import Container from "./Container";
import Logo from "./logo"
import Link from "next/link";

const Footer: React.FC = () => {
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
                            <li><a href="/about" className='footer__link'>About</a></li>
                            <li><a href="/journey" className='footer__link'>Journey</a></li>
                            <li><a href="/projects" className='footer__link'>Projects</a></li>
                        </ul>

                        <ul className="flex flex-col gap-y-4">
                            <span className="block font-semibold mb-4">Explore</span>
                            <li><a href="/blog" className='footer__link'>Blog</a></li>
                            {/* <li><a href="/newsletter" className='footer__link'>Newsletter</a></li> */}
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