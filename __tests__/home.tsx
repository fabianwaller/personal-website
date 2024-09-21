import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

jest.mock("@/provider/CommandMenuContext", () => {
  return {
    useCommandMenu: jest.fn().mockReturnValue({ toggle: jest.fn() }),
  };
});

describe("Home", () => {
  it("renders home page unchanged", () => {
    const component = render(<Page />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
