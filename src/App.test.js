import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders default heading", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders new heading after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click" });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/new heading/i);
  });
});