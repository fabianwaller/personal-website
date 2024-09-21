import About from "@/app/about/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("About", () => {
  it("renders about page unchanged", () => {
    const component = render(<About />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
