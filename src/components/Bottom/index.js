import React from "react";
import { RiListSettingsFill } from "react-icons/ri";
import { Button, Collapse } from "antd";
import "./Bottom.scss";
import CarCard from "./CarCard";
import Panel1 from "./Panels/Panel1";
import Panel2 from "./Panels/Panel2";
import Panel3 from "./Panels/Panel3";
import Panel4 from "./Panels/Panel4";

const { Panel } = Collapse;

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
        <div className="body_left">
          <Collapse defaultActiveKey={["1", "2", "3", "4"]} ghost>
            <Panel header="fascia di costo 100 km" key="1">
              <Panel1 />
            </Panel>
            <Panel header="ALIMENTAZIONE" key="2">
              <Panel2 />
            </Panel>
            <Panel header="tipo auto" key="3">
              <Panel3 />
            </Panel>
            <Panel header="marca" key="4">
              <Panel4 />
            </Panel>
          </Collapse>
        </div>
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
