import VStack from "@/components/VStack";
import { CommandMenuButton } from "@/components/CommandMenu";
import Container from "@/components/Container";
import HeroBlob from "@/components/heroblob/heroblob";
import { parse, differenceInYears } from "date-fns";
import { Suspense } from "react";
import { description, title } from "./layout";

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
          <h1>{title}</h1>
          <p>{description}</p>
          <Suspense>
            <CommandMenuButton />
          </Suspense>
        </VStack>
      </Container>
    </section>
  );
}
