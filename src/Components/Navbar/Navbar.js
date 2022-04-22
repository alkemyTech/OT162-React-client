import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = [
    {
      name: "inicio",
      path: "/",
    },
    {
      name: "Nosotros",
      path: "/miembros",
    },
    {
      name: "Contacto",
      path: "/contacto",
    },
    {
      name: "Campañas: Escuelas",
      path: "/school-campaign",
    },
    {
      name: "Campañas: Juguetes",
      path: "/toys-campaign",
    },
  ];

  return (
    <div className="navbar">
      {menuItems.map((link) => {
        return (
          <div>
            <NavLink to={link.path}>{link.name}</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

