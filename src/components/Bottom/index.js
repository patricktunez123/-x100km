import React from "react";
import { RiListSettingsFill } from "react-icons/ri";
import { Button } from "antd";
import "./Bottom.scss";
import CarCard from "./CarCard";

const Bottom = () => {
  return (
    <div className="content_bottom">
      <div className="bottom_header">
        <div className="left">
          <RiListSettingsFill />
          <p>Filtra auto</p>
        </div>
        <div className="right">
          <p>Ordina per</p>
          <Button>Costo</Button>
          <Button>Potenza</Button>
          <Button>Cilindrata</Button>
          <Button>Marca</Button>
        </div>
      </div>
      <div className="bottom_body">
        <div className="body_left">left</div>
        <div className="body_right">
          {[...Array(6)].map((_, index) => (
            <CarCard key={index} />
          ))}
          <div className="carica">
            <p className="app_uppercased_text app_700_w app_whiteColor_text">
              carica altre auto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
