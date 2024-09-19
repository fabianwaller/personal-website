import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Keyword = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block py-2 px-4 rounded-lg text-sm border-solid border-2 divide-border text-title-normal" >{children}</span>
)

export default function About() {
    return (
        <Section name='about' title='About me' subtitle="What I'm Doing Now">
            <div className={"grid gap-6 md:grid-cols-2 items-start"}>
                <div className="flex justify-start items-center flex-wrap gap-2">
                    <Keyword>computer science student</Keyword>
                    <Keyword>fullstack web + native development</Keyword>
                    <Keyword>footballer</Keyword>
                    <Keyword>learner</Keyword>
                    <Keyword>reader</Keyword>
                    <Keyword>traveller</Keyword>
                </div>
                <div>
                    <p>I&apos;m currently studying computer science at Saarland University in Germany and I share my knowledge and projects on this website.
                        I&apos;m mainly interested in full-stack web and native development, software engineering and artificial intelligence.
                        Currently working on the
                        <Link href="https://squadmanagerapp.com" target="_blank" legacyBehavior passHref>
                            <Button variant={"link"}>Squadmanager</Button>
                        </Link>
                        app to gain experience in building and launching a product.
                        I also enjoy playing football, travelling around the world and reading books in my spare time.
                    </p>
                </div>
            </div>
        </Section>
    );
}
