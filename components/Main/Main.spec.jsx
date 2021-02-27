import * as React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";
import labels from "../../public/i18n/en.json";

describe("Main", () => {
  const props = { labels };

  it("should render without crashing", () => {
    const { container } = render(<Main {...props} />);

    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("should render with the correct labels", () => {
    render(<Main {...props} />);

    expect(screen.getByText(labels.title)).toBeInTheDocument();
    expect(screen.getByText(labels.contact)).toBeInTheDocument();
    expect(screen.getByText("Barcelona · Spain")).toBeInTheDocument();
    expect(
      screen.getByText("hello@bihotz-studio.com").closest("a")
    ).toHaveAttribute("href", "mailto:hello@bihotz-studio.com");
    expect(screen.getByText("+34 697 525 425").closest("a")).toHaveAttribute(
      "href",
      "tel:+34697525425"
    );
  });
});
