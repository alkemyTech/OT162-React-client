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
import axiosMock from "axios";

jest.mock("axios");
jest.setTimeout(10000);

describe("Register Form Test", () => {
  test("Validate fields before submit", async () => {
    const { getByRole, getByText } = render(<RegisterForm />);

    await wait(() => {
      userEvent.click(getByRole("button"));
    });

    const errorMsg = getByText("Campo obligatorio");
    await wait(() => expect(errorMsg).toBeInTheDocument());
  });
  test("Validate successfull HTTP request", async () => {
    const { getByTestId, getByText, getByRole } = render(<RegisterForm />);

    userEvent.type(getByTestId("nameValidation"), "lea");
    userEvent.type(getByTestId("lastNameValidation"), "lea");
    userEvent.type(getByTestId("emailValidation"), "leajhg@mdoaj.com");
    userEvent.type(getByTestId("passwordValidation"), "lcomeron.123");
    userEvent.type(getByTestId("passwordRepeatValidation"), "lcomeron.123");

    await wait(() => {
      userEvent.click(getByRole("button"));
      axiosMock.post.mockResolvedValueOnce();
    });

    const successMsg = getByText("suscripto!");
    await wait(() => expect(successMsg).toBeInTheDocument());
  });
  test("Validate wrong HTTP request", async () => {
    const { getByTestId, getByText, getByRole } = render(<RegisterForm />);

    userEvent.type(getByTestId("nameValidation"), "lea");
    userEvent.type(getByTestId("lastNameValidation"), "lea");
    userEvent.type(getByTestId("emailValidation"), "leajhg@mdoaj.com");
    userEvent.type(getByTestId("passwordValidation"), "lcomeron.123");
    userEvent.type(getByTestId("passwordRepeatValidation"), "lcomeron.123");

    await wait(() => {
      userEvent.click(getByText("Registrarse"));
    });

    const errorMsg = getByText("suscripto!");
    await wait(() => expect(errorMsg).toBeInTheDocument());
  });
});
