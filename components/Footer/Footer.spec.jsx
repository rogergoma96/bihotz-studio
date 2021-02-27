import * as React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render without crashing", () => {
    const { container } = render(<Footer />);

    expect(container.querySelector(".copyright")).toBeInTheDocument();
  });
});
