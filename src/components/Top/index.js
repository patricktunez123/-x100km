import React, { useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Top.scss";
import { routes } from "../../config/route-config";
import PercentageYello from "./PercentageYello";
import PercentageBlue from "./PercentageBlue";
import PercentageGreen from "./PercentageGreen";
import cur from "../../images/currency.png";
import TheDrawer from "./TheDrawer";

const Top = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="content_top">
      <div className="top_left">
        <div className="left_currency">
          <img src={cur} alt="" />
        </div>
        <p className="app_400_w app_greyFiveColor_text">
          I costi chometrici rela oggi.{" "}
          <Link className="app_underlined_text" to={routes.home.url}>
            Più informazioni
          </Link>
        </p>
        <div className="left_bottom_content">
          <div className="external_link">
            <GoLinkExternal className="icon" />
          </div>
          <p>Prezzi aggiornati al 08/06/2021</p>
        </div>
      </div>
      <div className="top_right">
        <p className="app_greyFourColor_text app_500_w app_extra_medium_text app_uppercased_text app_mb_1">
          Costi calcolati <br /> su queste percentuali di utilizzo
        </p>
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
          <div className="progress_bars app_mb_1">
            <div className="progress_bar yellow"></div>
            <div className="progress_bar blue"></div>
            <div className="progress_bar green"></div>
          </div>
        </div>

        <div onClick={showDrawer} className="cambia_link app_cursored">
          <p className="app_redOneColor_text app_700_w text_18">
            Cambia percentuali
          </p>
        </div>
        <TheDrawer onClose={onClose} visible={visible} />
      </div>
    </div>
  );
};

export default Top;
