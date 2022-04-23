import {
  fireEvent,
  getByTestId,
  render,
  screen,
  wait,
} from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Register Form Test", () => {
  test("Validate fields before submit", async () => {
    const { getByRole, getByText } = render(<RegisterForm />);

    await wait(() => {
      userEvent.click(getByRole("button"));
    });

    const errorMsg = getByText("Campo obligatorio");
    await wait(() => expect(errorMsg).toBeInTheDocument());
  });
  test("Validate HTTP request", async () => {
    const { getByRole, getByText } = render(<RegisterForm />);

    await wait(() => {
      userEvent.click(getByRole("button"));
    });

    const errorMsg = getByText("Campo obligatorio");
    await wait(() => expect(errorMsg).toBeInTheDocument());
  });
});
