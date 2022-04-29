import {
    render,
    wait,
  } from "@testing-library/react";
  import NewsForm from "./NewsForm";
  import "@testing-library/jest-dom";
  import userEvent from "@testing-library/user-event";
  import axiosMock from "axios";
  
  // jest.mock("axios");
  jest.setTimeout(10000);
  
  describe("News Form Test", () => {
    test("Validate fields before submit", async () => {
      const { getByTestId, getByText } = render(<NewsForm />);
  
      await wait(() => {
        userEvent.click(getByTestId("buttonSend"));
      });
  
      const error = getByText("Required");
      await wait(() => expect(error).toBeInTheDocument());
    });
    // test("Validate successfull HTTP request", async () => {
    //   const { getByTestId, getByText, getByRole } = render(<NewsForm />);
  
    //   userEvent.type(getByTestId("titleTest"), "Titulo Test");
    //   userEvent.type(getByTestId("contentTest"), "Contenido Test");
    //   userEvent.type(getByTestId("imageTest"), "Imagen Test");
    //   userEvent.type(getByTestId("categoryTest"), "Categoria Test");
  
    //   await wait(() => {
    //     userEvent.click(getByRole("button"));
    //     axiosMock.post.mockResolvedValueOnce();
    //   });
  
    //   const success = getByText("Categoria Agregada con Exito!");
    //   await wait(() => expect(success).toBeInTheDocument());
    // });

    // test("Validate wrong HTTP request", async () => {
    //   const { getByTestId, getByText } = render(<NewsForm />);
  
    //   userEvent.type(getByTestId("titleTest"), "Titulo Test");
    //   userEvent.type(getByTestId("contentTest"), "Contenido Test");
    //   userEvent.type(getByTestId("imageTest"), "Imagen Test");
    //   userEvent.type(getByTestId("categoryTest"), "Categoria Test");
  
    //   await wait(() => {
    //     userEvent.click(getByText("Enviar"));
    //   });   
  
    //   const error = getByText("No es posible agregar Categoria");
    //   await wait(() => expect(error).toBeInTheDocument());
    // });
  });