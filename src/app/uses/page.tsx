import ItemList, { itemsType } from "@/components/ItemList";
import Section from "@/components/Section";
import VStack from "@/components/VStack";

const deskItems: itemsType = [
  {
    href: "https://www.apple.com/de/",
    title: `MacBook Pro (14" M1 Pro 2021, 16GB, 512GB)`,
    description: `MacBook Pro is my main computer for everything. 
            It&apos;s so powerful and really a good foundation to create digital stuff.`,
  },
  {
    title: "Logitech MX Master 3s",
    description: `A more ergonomic mouse than the Magic Mouse.`,
  },
  {
    href: "https://www.amazon.de/Apple-Magic-Keyboard-Touch-ID-Apple-Chip/dp/B09BRCV218/ref=sr_1_4?__mk_de_DE=ÅMÅŽÕÑ&crid=110WCHS5C27NQ&dib=eyJ2IjoiMSJ9.imvY2Z2Wjm33ufIvOjdCpyC9a7xbGP6LQigi4nUsNIzEWvUK7ArrwU43QiScvZAJTNJ3E2fm5I8Vl0u8Ah4j4UD14MXjt4Ijg7NybsHRnT5jL5O7y7o9_Bwz9nMTWBQMdRFL0XZKoPk0jRH3pC4LfWFOoLxFJtXEb16iIACIdBQi0drzgkLvddT9Mw7iaFK43cmsvIbhxA7NwEiySUWNoSSB3glCNpVM_I-YYHpnY4g.DStD1zggPzAkdeJxs-z2Woq2_b54ouheBUB1ZrMtSpQ&dib_tag=se&keywords=apple+magic+keyboard+touch+id&qid=1729303703&sprefix=apple+magic+keyboard+touch+id%2Caps%2C98&sr=8-4",
    title: "Apple Magic Keyboard",
    description: `I love the typing experience on this keyboard. It also has a touch ID which
            is really convenient for unlocking my MacBook.`,
  },
  {
    href: "https://www.amazon.de/LG-Ultragear-Gaming-Monitor-27GN800-B/dp/B0BXBN9X7B/ref=sr_1_2?__mk_de_DE=ÅMÅŽÕÑ&crid=3BCCZL5LXD3O4&dib=eyJ2IjoiMSJ9.Zi9AoRbViu_-YFOSniTE5qFjLNPRGf4Yy9kG91z_mfdsqD4OJVt8h7cnUP4RNFPAwMACGZBBsa7RLrZWPM7eVdea1r6TR0xcymOwPQ-snGnWVaRdgnF_cXGaMOPEv1TA5yOg0LldWURAn4U-yylLEG8HG4qTiaNxnyovaHIZiJUrqcao_33u7tnOk6jew3Y2-Ma56xcJUMRiZF63jLaA69Y2VrF32x74ZkDwSgV5MCY.Vcm5lwAsXgyk7gtmCK6bDKUTH2RwjMyyjRkg0Cc2ZBo&dib_tag=se&keywords=LG+27GN800&qid=1729303295&sprefix=lg+27gn800+%2Caps%2C132&sr=8-2",
    title: "LG UltraGear Monitor 27GN800-B - 27 Zoll",
    description: `Good 1440p high refresh rate monitor for programming and gaming.`,
  },
  {
    href: "https://www.amazon.de/Apple-Kabellose-Geräuschunterdrückung-Personalisiertes-reduzieren/dp/B0CHWZ9TZS/ref=sr_1_2?__mk_de_DE=ÅMÅŽÕÑ&crid=24QZ3CNRXY10J&dib=eyJ2IjoiMSJ9.i96xjetu7kRIJT184qMlnhIwIzB7HJYoUF91TgD58jtc6Js9k61iaLO776EQbdcPZxJngUCHBnRXQ3DiX4UftLbPqUmS7hXoR4Ha0kRZTNJ2pEBdUNzN4nETVmhjFL1R7bb2EsxVtmEtgT_6UxpeK3pezPtX0k5rZs9StkaFlQCc8nMTn8P7cxy0fIAKuvLfZWSu7ThqOG7wcM3FlimnV-5epUbkxSSFEOBcckAD46k.NZlKLoMZ79525XwAHDnHcMOjsh76kqu5F9Ob1i8wvEk&dib_tag=se&keywords=airpods+pro+2+lightning&qid=1729303737&sprefix=airpods+pro+2+lightning%2Caps%2C109&sr=8-2",
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
    description: `React , underlying library of Next.js. I love the declarative
            approach and the ecosystem.`,
  },
  {
    title: "Typescript",
    description: `TypeScript, can&apos;t live without it!`,
  },
  {
    title: "Tailwind",
    description: `Tailwind CSS is awesome, I have never achieved this much
            reusability. Make sure you get the extension .`,
  },
  {
    title: "Supabase",
    description: `Best backend`,
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
        <p>
          As an developer, I&apos;ve been spending hours and hours at my desk
          every day. So, I&apos;ve been continuously improving my workspace in
          order to boost my productivity. So, here is a living snapshot and a
          place to point curious developers to when I get asked.
        </p>
        <VStack className="w-full items-start">
          <ItemList title="Desk" items={deskItems} />
          <ItemList title="Coding" items={codingItems} />
          <ItemList title="Apps" items={appItems} />
          <ItemList title="Tech Stack" items={techStackItems} />
        </VStack>
      </VStack>
    </Section>
  );
}
