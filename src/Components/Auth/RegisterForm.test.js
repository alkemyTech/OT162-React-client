import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "./RegisterForm";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";

describe("RegisterForm test", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("campos correctos", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<RegisterForm />);
    });

    const button = screen.getByRole("button");
    act(() => {
      fireEvent.click(button);
    });

    const feedbackText = screen.getAllByText(/Campo obligatorio/);
    expect(feedbackText).toBeInTheDocument();
  });
});
