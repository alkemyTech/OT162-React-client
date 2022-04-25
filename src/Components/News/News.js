import { Link } from "react-router-dom";
import React from "react";
import Table from "../Table/Table";
import NavbarBackoffice from '../Backoffice/NavbarBackoffice';
import { Button } from "@mui/material";

const News = () => {
  return (
    <>
      <div style={{ marginBottom: 64 }}>
        <NavbarBackoffice />
      </div>
      <Link to="/backoffice/news/create">
        <Button variant="contained" sx={{ my: 3 }}>
          Agregar Novedades
        </Button>
      </Link>
      <Table />
    </>
  );
};

export default News;
