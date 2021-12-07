import React from "react";
import { Drawer } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import cur from "../../images/currency.png";
import location from "../../images/location.png";
import PercentageYello from "./PercentageYello";
import PercentageBlue from "./PercentageBlue";
import PercentageGreen from "./PercentageGreen";
import "./TheDrawer.scss";

const TheDrawer = ({ onClose, visible }) => {
  return (
    <Drawer
      title=""
      placement="bottom"
      contentWrapperStyle={{ minHeight: "100%" }}
      visible={visible}
      closable={false}
    >
      <div className="d2_content">
        <div className="d2_header">
          <img src={cur} alt="" />
          <div className="drawer2_close" onClick={onClose}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="d2_body">
          <h6 className="text-center text_28 c818181color app_700_w app_mb_1">
            Dove usi l’auto?
          </h6>
          <p className="text-center text_18">
            Utilizza i <span className="app_redOneColor_text">cursori</span> per
            modificare le percentuali relative al tipo di percorso che fai
            abitualmente, una volta impostati i valori clicca su{" "}
            <span className="app_700_w">Ricalcola</span>
          </p>
          <div className="m_bottom">
            <img src={location} alt="" />
            <div className="pacentage_cards app_mb_1">
              <div class="container">
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-4 padding-0">
                    <PercentageYello />
                  </div>
                  <div className="col-md-4 col-lg-4 col-4 padding-0">
                    <PercentageBlue />
                  </div>
                  <div className="col-md-4 col-lg-4 col-4 padding-0">
                    <PercentageGreen />
                  </div>
                </div>
              </div>
            </div>
            <div className="ricalcola">
              <h6 className="text_22 CCCCCC_txt app_700_w">Ricalcola</h6>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default TheDrawer;
