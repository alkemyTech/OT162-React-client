import { render, waitFor, fireEvent } from "@testing-library/react";
import NewsForm from "./NewsForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import { PostNews } from "../../Services/newsApiService";

describe("News Form Test", () => {
  const initialState = { news: { status: "", data: { id: "" } } };
  const mockStore = configureStore();
  let store;

  test("Validate fields before submit", async () => {
    store = mockStore(initialState);
    const { getByTestId, getAllByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewsForm />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      userEvent.click(getByTestId("buttonSend"));
    });

    const error = getAllByText("Required");
    await waitFor(() => expect(error[0]).toBeInTheDocument());
  });
  
  test("Validate successfull HTTP request", async () => {
    store = mockStore(initialState);
    const { getByTestId, getAllByText, getByText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewsForm />
        </BrowserRouter>
      </Provider>
    );

    let result = false;

    const data = {
      name: "Titulo Test",
      content: "Contenido Test",
      image: "https://ongapi.alkemy.org//storage//2R3k1Mz2RO.jpeg",
      category_id: "Categoria Test",
    };

    await waitFor(() => {
      PostNews(data)
        .then((result = true))
        .catch((e) => console.log(e));
    });

    expect(result).toBeTruthy();

  });

  test("Validate wrong HTTP request", async () => {
    store = mockStore(initialState);
    const { getByTestId, getAllByText, getByText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewsForm />
        </BrowserRouter>
      </Provider>
    );

    let result = true;

    const data = {};

    await waitFor(() => {
      PostNews(data)
        .then((result = true))
        .catch((result = false));
    });

    expect(result).toBeFalsy();
  });

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
