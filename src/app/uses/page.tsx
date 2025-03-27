import ItemList, { itemsType } from "@/components/ItemList";
import ScrollAnimated from "@/components/ScrollAnimated";
import Section from "@/components/Section";
import VStack from "@/components/VStack";

const deskItems: itemsType = [
  {
    title: `MacBook Pro (14" M1 Pro 2021, 16GB, 512GB)`,
    description: `MacBook Pro is my main computer for everything. 
            It's so powerful and really a good foundation to create digital stuff.`,
  },
  {
    title: "Logitech MX Master 3s",
    description: `A more ergonomic mouse than the Magic Mouse.`,
  },
  {
    title: "Apple Magic Keyboard",
    description: `I love the typing experience on this keyboard. It also has a touch ID which
            is really convenient for unlocking my MacBook.`,
  },
  {
    title: "LG UltraGear Monitor 27GN800-B - 27 Zoll",
    description: `Good 1440p high refresh rate monitor for programming and gaming.`,
  },
  {
    title: "Airpods Pro",
    description: `Great sound quality and noise cancellation.`,
  },
  {
    title: "Ikea Desk Table",
    description: `Large height-adjustable desk.`,
  },
  {
    title: "Ikea Desk Light",
    description: `Bright minimalistic desk light.`,
  },
];

const codingItems: itemsType = [
  {
    title: "VSCode",
    description: `Default editor`,
  },
  {
    title: "GitHub Dark Default",
    description: `Theme`,
  },
  {
    title: "Oh My ZSH",
    description: `Terminal enhancement`,
  },
];

const appItems: itemsType = [
  {
    title: "iTerm 2",
    description: `The terminal replacement.`,
  },
  {
    title: "Obsidian",
    description: `Note-taking app`,
  },
  {
    title: "Good Notes",
    description: `Note-taking app for handwritten notes.`,
  },
  {
    title: "Home Assistant",
    description: `Open source self-hosted local control home automation.`,
  },
];

const techStackItems: itemsType = [
  {
    title: "Next.js",
    description: `Currently my go-to framework because of the static generation,
            dynamic paths, and built-in API.`,
  },
  {
    title: "React",
    description: `React, underlying library of Next.js. I love the declarative
            approach and the ecosystem.`,
  },
  {
    title: "Typescript",
    description: `TypeScript, can't live without it!`,
  },
  {
    title: "Tailwind",
    description: `Tailwind CSS is awesome, I have never achieved this much
            reusability. Make sure you get the extension to see the complete CSS for a Tailwind class name by hovering over it.`,
  },
  {
    title: "Supabase",
    description: `Best backend without vendor lock-in.`,
  },
];

export default function Uses() {
  return (
    <Section
      name="Uses"
      title="My setup"
      subtitle="what software and hardware I use"
    >
      <VStack>
        <ScrollAnimated>
          <p className="leading-relaxed">
            As an developer, I&apos;ve been spending hours and hours at my desk
            every day. So, I&apos;ve been continuously improving my workspace in
            order to boost my productivity. So, here is a living snapshot and a
            place to point curious people to when I get asked.
          </p>
        </ScrollAnimated>
        <VStack className="w-full items-start">
          <ItemList title="Tech Stack" items={techStackItems} />
          <ItemList title="Coding" items={codingItems} />
          <ItemList title="Apps" items={appItems} />
          <ItemList title="Desk" items={deskItems} />
        </VStack>
      </VStack>
    </Section>
  );
}
