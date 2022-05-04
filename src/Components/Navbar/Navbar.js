import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { GetAuth } from "../../Services/privateApiService";
import Account from "./Account";
import "./Navbar.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  let navigate = useNavigate();

  // Se que no esta bien esto pero es para facilitar el testing y no implementarlo por completo
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // aca en realidad supongo que el login guardaria data sobre si es admin o no peor por ahora lo simulo con esto
  const changeAdminRights = () => {
    setIsAdmin(!isAdmin);
    localStorage.setItem("isAdmin", !isAdmin);
  };
  const handleLogin = () => {
    setLoggedIn(true); // Esto para forzar el re render
    localStorage.setItem("token", "123456");
  };

  const handleLogOut = () => {
    setLoggedIn(false); // Esto para forzar el re render
    localStorage.removeItem("token");
    setIsAdmin(false);
    localStorage.setItem("isAdmin", false);
    navigate("/login");
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////
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
          <div key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </div>
        );
      })}
      {GetAuth() !== null ? (
        <Account
          onLogout={handleLogOut}
          isAdmin={isAdmin}
          changeAdmin={changeAdminRights}
        />
      ) : (
        <>
          <div>
            <Button
              variant="contained"
              size="small"
              // onClick={() => navigate("/login")} -> Normalmente haria esto
              onClick={handleLogin}
            >
              Iniciar Sesión
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate("/registration")}
            >
              Registrarse
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
