import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";

type SectionProps = {
  name: string;
  title: string;
  subtitle?: string;
  description?: string;
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
          <h2 className={props.headerClassName}>{props.title}</h2>
          {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
          {props.description && <p>{props.description}</p>}
        </div>
      </Container>

      <Container>{props.children}</Container>
    </section>
  );
};

export default Section;
