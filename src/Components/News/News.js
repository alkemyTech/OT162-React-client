import React from "react";
import Table from "../Table/Table";
import NavbarBackoffice from "../Backoffice/NavbarBackoffice";

const News = () => {
  return (
    <>
      <div style={{ marginBottom: 64 }}>
        <NavbarBackoffice />
      </div>
      <Table />
    </>
  );
};

export default News;
