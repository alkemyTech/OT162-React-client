import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = ({ onLogout, isAdmin, changeAdmin }) => {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const publicLinks = [
    {
      onClick: () => navigate("/profile"),
      name: "Mi perfil",
      icon: <Avatar />,
    },
    { onClick: () => navigate("/actividades"), name: "Actividades" },
    { onClick: () => navigate("/Novedades"), name: "Novedades" },
    { onClick: () => navigate("/miembros"), name: "Miembros" },
    { onClick: () => navigate("/donar"), name: "Donar" },
    { onClick: () => navigate("/contacto"), name: "Contacto" },
  ];

  const adminLinks = [
    { onClick: () => navigate("/actividades"), name: "Actividades" },
    { onClick: () => navigate("/Novedades"), name: "Novedades" },
    { onClick: () => navigate("/miembros"), name: "Miembros" },
    { onClick: () => navigate("/backoffice"), name: "Escritorio" },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-label="account"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>L</Avatar>
      </IconButton>
      <Menu
        aria-label="account menu"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!isAdmin &&
          publicLinks.map((link) => (
            <MenuItem key={link.name} onClick={link.onClick}>
              {link?.icon}
              {link.name}
            </MenuItem>
          ))}
        {isAdmin &&
          adminLinks.map((link) => (
            <MenuItem key={link.name} onClick={link.onClick}>
              {link?.icon}
              {link.name}
            </MenuItem>
          ))}
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
      <Button variant="contained" size="small" onClick={changeAdmin}>
        {isAdmin ? "Quitar Admin" : "Ser Admin"}
      </Button>
    </Box>
  );
};

export default Account;
