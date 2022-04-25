import React from "react";
import Table from "../Table/Table";
import PersistentSideBar from "../../features/backoffice/sideBar";

const News = () => {
  return (
    <>
      <div style={{ marginBottom: 64 }}>
        <PersistentSideBar />
      </div>
      <Table />
    </>
  );
};

export default News;
