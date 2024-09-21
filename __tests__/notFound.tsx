import PageNotFound from "@/app/not-found";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Not found", () => {
  it("renders 404 page unchanged", () => {
    const component = render(<PageNotFound />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
