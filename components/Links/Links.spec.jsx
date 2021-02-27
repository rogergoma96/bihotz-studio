import * as React from "react";
import { render } from "@testing-library/react";
import Links from "./Links";
import labels from "../../public/i18n/en.json";

describe("Links", () => {
  const props = { labels };

  it("should render without crashing", () => {
    const { container } = render(<Links {...props} />);

    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should render 2 links", () => {
    const { container } = render(<Links {...props} />);

    expect(container.querySelector("a")).toBeInTheDocument();
  });
});
