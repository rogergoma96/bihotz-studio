import * as React from "react";
import { render, screen } from "@testing-library/react";
import Animation from "./Animation";

describe("Animation", () => {
  it("should render without crashing", () => {
    render(<Animation />);

    expect(screen.queryAllByText("Bihotz Studio")[0]).toBeInTheDocument();
  });
});
