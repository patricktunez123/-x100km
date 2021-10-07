import React from "react";
import { RiListSettingsFill } from "react-icons/ri";
import { Button, Collapse, Select } from "antd";
import "./Bottom.scss";
import CarCard from "./CarCard";
import Panel1 from "./Panels/Panel1";
import Panel2 from "./Panels/Panel2";
import Panel3 from "./Panels/Panel3";
import Panel4 from "./Panels/Panel4";

const { Panel } = Collapse;
const { Option } = Select;

const Bottom = () => {
  // const handleChange = (value) =>{
  //   console.log(`selected ${value}`);
  // }

  return (
    <div className="content_bottom">
      <div className="bottom_header">
        <div className="left">
          <RiListSettingsFill className="app_redOneColor_text" />
          <p className="app_900_w app_greyFourColor_text">Filtra auto</p>
        </div>
        <div className="right">
          <div className="big_screen">
            <p>Ordina per</p>
            <Button className="fileter_btn_active">Costo</Button>
            <Button className="fileter_btn">Potenza</Button>
            <Button className="fileter_btn">Cilindrata</Button>
            <Button className="fileter_btn">Marca</Button>
          </div>
          <div className="small_screen">
            <Select defaultValue="Ordina per Costo" style={{ width: 120 }}>
              <Option value="Tutte">Tutte</Option>
              <Option value="Benzina (123)">Benzina (123)</Option>
              <Option value="Gasolio (71)">Gasolio (71)</Option>
              <Option value="Mild Hybrid">Mild Hybrid</Option>
              <Option value="Benzina (21)">Benzina (21)</Option>
              <Option value="Hybrid Diesel (5)">Hybrid Diesel (5)</Option>
              <Option value="Mild Hybrid"> Mild Hybrid</Option>
            </Select>
          </div>
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
