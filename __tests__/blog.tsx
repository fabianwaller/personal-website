import Blog from "@/app/blog/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Blog", () => {
  it("renders blog page unchanged", () => {
    const component = render(<Blog />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
