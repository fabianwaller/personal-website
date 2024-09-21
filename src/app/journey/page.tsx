import Section from "@/components/Section";
import JourneyTabs from "@/components/Tabs";
import XStack from "@/components/XStack";

export default function Journey() {
  return (
    <Section name="journey" title="My journey" subtitle="resume">
      <XStack>
        <JourneyTabs />
      </XStack>
    </Section>
  );
}
