import VStack from "@/components/VStack";
import { CommandMenuButton } from "@/components/CommandMenu";
import Container from "@/components/Container";
import HeroBlob from "@/components/heroblob/heroblob";
import { parse, differenceInYears } from "date-fns";
import { Suspense } from "react";

export const calculateAge = () => {
  const BIRTHDAY = "08-06-2003";
  const dateFormat = "dd-MM-yyyy";
  const birthDate = parse(BIRTHDAY, dateFormat, new Date());
  return differenceInYears(new Date(), birthDate);
};

export default function Home() {
  return (
    <section className="w-full" id="home">
      <Container fullScreen>
        <HeroBlob />
        <VStack className="items-start pb-8">
          <h1>Fabian Waller</h1>
          <p>
            {calculateAge()} year old computer science student at Saarland
            University interested in fullstack development and football player.
          </p>
          <Suspense>
            <CommandMenuButton />
          </Suspense>
        </VStack>
      </Container>
    </section>
  );
}
