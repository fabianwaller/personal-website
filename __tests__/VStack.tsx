import VStack from "@/components/VStack";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("VStack", () => {
  it("renders VStack unchanged", () => {
    const component = render(
      <VStack>
        <p>1</p>
        <p>2</p>
      </VStack>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
