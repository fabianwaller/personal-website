import Section from "@/components/Section";
import JourneyTabs from "@/components/Tabs";

const Keyword = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block py-2 px-4 rounded-lg text-sm border-solid border-2 divide-border text-title-normal" >{children}</span>
)

export default function Journey() {
    return (
        <Section name='journey' title='My journey' subtitle='resume'>
            <JourneyTabs />
        </Section>
    );
}
