import About from "@/app/(website)/about/page";
import Journey from "@/app/(website)/journey/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Journey", () => {
  it("renders journey page unchanged", () => {
    const component = render(<Journey />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
