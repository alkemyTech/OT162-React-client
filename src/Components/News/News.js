import { Link } from "react-router-dom";
import React from "react";
import Table from "../Table/Table";
import PersistentSideBar from "../../features/backoffice/sideBar";
import { Button } from "@mui/material";

const News = () => {
  return (
    <>
      <div>
        <PersistentSideBar />
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
