import { CommandMenu } from "@/components/CommandMenu";
import Container from "@/components/Container";
import HeroBlob from "@/components/heroblob/heroblob";
import TypographyH1 from "@/components/ui/TypographyH1";
import { parse, differenceInYears } from 'date-fns';
import { Suspense } from "react";

const BIRTHDAY = '08-06-2003'

const calculateAge = (birthday: string) => {
  const dateFormat = 'dd-MM-yyyy';
  const birthDate = parse(birthday, dateFormat, new Date());
  return differenceInYears(new Date(), birthDate);
}

export default function Home() {
  return (
    <section id="home">

      <Container className={`p-0`}>
        <div className="container w-full p-0" style={{ height: 'calc(100vh - var(--header-height))' }}>

          <HeroBlob />

          <div className="flex flex-col justify-center gap-4" style={{ paddingBottom: 'var(--header-height))' }}>
            <TypographyH1>Fabian Waller</TypographyH1>
            <p className="relative">{calculateAge(BIRTHDAY)} year old computer science student at Saarland University interested in fullstack development and football player.</p>
            <Suspense>
              <CommandMenu />
            </Suspense>
          </div>

        </div>
      </Container>
    </section>
  );
}
