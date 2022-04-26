import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer";
import { Fragment } from "react";
import Header from "../Components/Header/Header";

const PublicLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
