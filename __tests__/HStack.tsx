import Header from "@/components/header";
import HStack from "@/components/HStack";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("HStack", () => {
  it("renders HStack unchanged", () => {
    const component = render(
      <HStack>
        <p>1</p>
        <p>2</p>
      </HStack>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
