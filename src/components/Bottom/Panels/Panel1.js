import React from "react";
import cht from "../../../images/cht.png";
import "./Panel.scss";

const Panel1 = () => {
  return (
    <div className="panel">
      <img className="panel_cht" src={cht} alt="" />
    </div>
  );
};

export default Panel1;
