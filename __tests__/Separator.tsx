import { Separator } from "@/components/ui/separator";
import VStack from "@/components/VStack";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Separator", () => {
  it("renders horizontal Separator unchanged", () => {
    const component = render(<Separator />);
    expect(component.asFragment()).toMatchSnapshot();
  });
  it("renders vertical Separator unchanged", () => {
    const component = render(<Separator orientation="vertical" />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
