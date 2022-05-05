import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Tests when user is authenticated", () => {
  beforeAll(() => localStorage.setItem("token", "12345"));

  test("account menu should be rendered", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(navbar.getByLabelText("account")).toBeInTheDocument();
  });

  test("account menu should show 'Mi perfil' and public navigation links if is not admin", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    fireEvent.click(navbar.getByLabelText("account"));
    const accountMenu = navbar.getByLabelText("account menu");
    expect(accountMenu).toHaveTextContent("Mi perfil");
    expect(accountMenu).toHaveTextContent("Actividades");
    expect(accountMenu).toHaveTextContent("Novedades");
    expect(accountMenu).toHaveTextContent("Miembros");
    expect(accountMenu).toHaveTextContent("Donar");
    expect(accountMenu).toHaveTextContent("Contacto");
    expect(accountMenu).toHaveTextContent("Cerrar sesión");
  });
  test("account menu should hide 'Mi Perfil', 'Contacto', 'Donar' and logins buttons and show 'Escritorio' button if is admin", () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    fireEvent.click(navbar.getByLabelText("account"));
    fireEvent.click(navbar.getByText("Ser Admin"));
    const accountMenu = navbar.getByLabelText("account menu");
    expect(accountMenu).toHaveTextContent("Actividades");
    expect(accountMenu).toHaveTextContent("Novedades");
    expect(accountMenu).toHaveTextContent("Miembros");
    expect(accountMenu).toHaveTextContent("Escritorio");
    expect(accountMenu).toHaveTextContent("Cerrar sesión");
    expect(accountMenu).not.toHaveTextContent("Mi perfil");
    expect(accountMenu).not.toHaveTextContent("Donar");
    expect(accountMenu).not.toHaveTextContent("Contacto");
  });
});
