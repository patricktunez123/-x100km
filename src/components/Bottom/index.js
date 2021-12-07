import React, { useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Button, Collapse, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./Bottom.scss";
import { getCars } from "../../redux/actions/carActions";
import { CardLoader } from "../../components/Loaders";
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

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.Cars);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  return (
    <div className="content_bottom">
      <div className="bottom_header">
        <div className="left">
          <div className="link_container">
            <BiLinkExternal className="icon_link" />
          </div>
          <p className="app_700_w app_muted_text">Info prezzi</p>
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
          <Collapse
            defaultActiveKey={["1", "2", "3", "4"]}
            ghost
            expandIconPosition="right"
          >
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

        {loading ? (
          <div className="body_right_loader">
            <div className="row">
              <div className="col-12">
                {[...Array(7)].map((_, index) => (
                  <div key={index} className="col-12">
                    <CardLoader />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="body_right">
            {data?.map((car) => (
              <CarCard key={car?.id} {...car} />
            ))}
            <div className="carica">
              <p className="app_uppercased_text app_700_w app_whiteColor_text">
                carica altre auto
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bottom;
