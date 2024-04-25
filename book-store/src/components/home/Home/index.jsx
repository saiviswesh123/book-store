import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import NewBooks from "../NewBooks";

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
    </>
  );
}

export default Home;
