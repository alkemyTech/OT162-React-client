import React, { Fragment } from "react";
import NewsTitle from "./NewsTitle";

const newsSection = (props) => {
  return (
    <Fragment>
      <NewsTitle />
      <div>Here goes the Card Component</div>
    </Fragment>
  );
};

export default newsSection;
