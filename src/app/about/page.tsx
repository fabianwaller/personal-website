import ScrollAnimated from "@/components/ScrollAnimated";
import Section from "@/components/Section";

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block divide-border rounded-lg border-2 border-solid px-4 py-2 text-sm text-title-normal">
    {children}
  </span>
);

export default function About() {
  return (
    <Section name="about" title="About me" subtitle="What I'm Doing Now">
      <div className={"grid items-start gap-6 md:grid-cols-2"}>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <ScrollAnimated>
            <Keyword>computer science student</Keyword>
          </ScrollAnimated>
          <ScrollAnimated>
            {" "}
            <Keyword>fullstack web development</Keyword>{" "}
          </ScrollAnimated>
          <ScrollAnimated>
            {" "}
            <Keyword>mobile development</Keyword>{" "}
          </ScrollAnimated>
        </div>
        <div>
          <ScrollAnimated>
            <p className="leading-relaxed">
              I&apos;m currently studying computer science at Saarland
              University in Germany and I share my knowledge and projects on
              this website. I&apos;m mainly interested in fullstack web and
              mobile development, software engineering and artificial
              intelligence. I also enjoy playing football, travelling around the
              world and reading books in my spare time.
            </p>
          </ScrollAnimated>
        </div>
      </div>
    </Section>
  );
}
