import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render without crashing", () => {
    const { container } = render(<Header />);

    expect(container.querySelector("header")).toBeInTheDocument();
  });

  it("should render email", () => {
    render(<Header />);

    expect(screen.getByText("hello@bihotz-studio.com")).toBeInTheDocument();
  });

  it("should render phone", () => {
    render(<Header />);

    expect(screen.getByText("+34 697 525 425")).toBeInTheDocument();
  });

  it("should render country", () => {
    render(<Header />);

    expect(screen.getByText("Barcelona")).toBeInTheDocument();
  });
});
