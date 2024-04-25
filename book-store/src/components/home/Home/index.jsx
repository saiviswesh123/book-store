import React from "react";
import "./index.css"

import Header from "../Header";
import Navbar from "../Navbar";
import NewBooks from "../NewBooks";

import Footer from "../Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="mt-3">
        <Navbar />
      </div>
      <div className="mt-5">
        <NewBooks />
      </div>
      <Footer />
      {/** copy right section */}
      <div className="copy-right-section">
        COPYRIGHT © 2023 & ALL RIGHTS RESERVED BY BookWarmHub.com
      </div>
    </>
  );
}

export default Home;
