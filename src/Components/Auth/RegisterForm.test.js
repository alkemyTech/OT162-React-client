import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import "@testing-library/jest-dom";

describe("Register Form Test", () => {
  test("Validate fields before submit", async () => {
    render(<RegisterForm />);

    fireEvent.click(screen.getByRole("button"));

    const errorMsg = screen.getByText("Campo obligatorio");
    await waitFor(() => expect(errorMsg).toBeInTheDocument());
  });
});
