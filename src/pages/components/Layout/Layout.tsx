import React from "react";
import { NextPage } from "next";
import Topnav from "../top-nav/topNav";
import Footer from "../Footer/Footer";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Topnav />
      <Breadcrumb />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
