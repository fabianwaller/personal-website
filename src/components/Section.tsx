import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";
import TypographyH2 from "./ui/TypographyH2";
import Subtitle from "./ui/Subtitle";

type SectionProps = {
  name: string;
  title: string;
  subtitle: string;
  headerClassName?: string;
  headerAlign?: "left" | "center";
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section className="w-full py-8" id={props.name}>
      <Container className={"mb-12"}>
        <div
          className={props.headerAlign == "left" ? "text-left" : "text-center"}
        >
          <TypographyH2 className={props.headerClassName}>
            {props.title}
          </TypographyH2>
          <Subtitle>{props.subtitle}</Subtitle>
        </div>
      </Container>

      <Container>{props.children}</Container>
    </section>
  );
};

export default Section;
