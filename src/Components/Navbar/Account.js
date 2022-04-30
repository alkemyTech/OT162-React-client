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
    <MenuItem onClick={() => navigate("/profile")}>
      <Avatar />
      Mi perfil
    </MenuItem>,
    <MenuItem onClick={() => navigate("/actividades")}>Actividades</MenuItem>,
    <MenuItem onClick={() => navigate("/Novedades")}>Novedades</MenuItem>,
    <MenuItem onClick={() => navigate("/miembros")}>Miembros</MenuItem>,
    <MenuItem onClick={() => navigate("/donar")}>Donar</MenuItem>,
    <MenuItem onClick={() => navigate("/contacto")}>Contacto</MenuItem>,
  ];

  const adminLinks = [
    <MenuItem onClick={() => navigate("/actividades")}>Actividades</MenuItem>,
    <MenuItem onClick={() => navigate("/Novedades")}>Novedades</MenuItem>,
    <MenuItem onClick={() => navigate("/miembros")}>Miembros</MenuItem>,
    <MenuItem onClick={() => navigate("/backoffice")}>Escritorio</MenuItem>,
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>L</Avatar>
      </IconButton>
      <Menu
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
        {!isAdmin && publicLinks.map((link) => link)}
        {isAdmin && adminLinks.map((link) => link)}
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
