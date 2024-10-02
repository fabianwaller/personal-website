import Header from "@/components/header";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("renders Header unchanged", () => {
    const component = render(<Header />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
