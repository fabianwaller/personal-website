import { Badge } from "@/components/ui/badge";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Badge", () => {
  it("renders Badge unchanged", () => {
    const component = render(<Badge />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
