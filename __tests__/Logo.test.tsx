import Logo from "@/components/logo";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Logo", () => {
  it("renders Logo unchanged", () => {
    const component = render(<Logo />);
    expect(component.asFragment()).toMatchSnapshot();
  });
  it("renders white Logo unchanged", () => {
    const component = render(<Logo white />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
