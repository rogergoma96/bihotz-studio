import * as React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Links", () => {
  const props = {
    text: "portfolio",
    href: "https://www.behance.net/lauracantabrana",
  };

  it("should render without crashing", () => {
    const { container } = render(<Link {...props} />);

    expect(container.querySelector("a")).toBeInTheDocument();
  });

  it("should render with the correct text and the correct href", () => {
    render(<Link {...props} />);

    expect(screen.getByText("portfolio").closest("a")).toHaveAttribute(
      "href",
      "https://www.behance.net/lauracantabrana"
    );
  });
});
