import Footer from "@/components/Footer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("renders Footer unchanged", () => {
    const component = render(<Footer />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
