import React from "react";
import Bottom from "../../components/Bottom";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import Footer from "../../components/Footer";
import "./homePage.scss";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="app_container">
        <Top />
        <Bottom />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
