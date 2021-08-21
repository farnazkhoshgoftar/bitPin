import React from "react";

import "./hoc.css";
import Footer from "../footer";
import Header from "../header";

const Hoc = ({ children }) => {
  return (
    <>
      <Header />
      <div className="hocContent">{children}</div>
      <Footer />
    </>
  );
};

export default Hoc;
