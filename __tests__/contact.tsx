import Contact from "@/app/contact/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Contact", () => {
  it("renders contact page unchanged", () => {
    const component = render(<Contact />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
