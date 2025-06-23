import Section from "@/components/Section";
import JourneyTabs from "@/components/Tabs";
import VStack from "@/components/VStack";

export default function Journey() {
  return (
    <Section name="journey" title="My journey" subtitle="resume">
      <VStack>
        <JourneyTabs />
      </VStack>
    </Section>
  );
}
