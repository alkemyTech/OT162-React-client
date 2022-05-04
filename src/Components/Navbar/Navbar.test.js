import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

test('navbar should show "Iniciar Sesión" and "Registrarse" buttons if user is unauthenticated', () => {
  const navbar = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(navbar.getByText("Iniciar Sesión")).toBeInTheDocument();
  expect(navbar.getByText("Registrarse")).toBeInTheDocument();
});

test("navbar should show public links buttons if user is unatehnticated", () => {
  const navbar = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(navbar.getByText("inicio")).toBeInTheDocument();
  expect(navbar.getByText("Nosotros")).toBeInTheDocument();
  expect(navbar.getByText("Contacto")).toBeInTheDocument();
  expect(navbar.getByText("Campañas: Escuelas")).toBeInTheDocument();
  expect(navbar.getByText("Campañas: Juguetes")).toBeInTheDocument();
});
