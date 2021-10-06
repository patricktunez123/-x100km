import React from "react";
import { MdEuro } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Top.scss";
import { routes } from "../../config/route-config";
import Percentage from "./Percentage";

const Top = () => {
  return (
    <div className="content_top">
      <div className="top_left">
        <div className="left_currency">
          <MdEuro className="app_big_text app_redOneColor_text" />
          <p className="app_big_text app_redOneColor_text">X</p>
          <div className="app_km">
            <p className="app_medium_text app_redOneColor_text">100</p>
            <p className="app_medium_text app_redOneColor_text">KM</p>
          </div>
        </div>
        <p className="app_mb_2">
          I costi chilometrici relativi alle auto provate dal 2016 ad oggi.{" "}
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
          Costi calcolati su queste percentuali di utilizzo
        </p>
        <div className="pacentage_cards app_mb_1">
          {[...Array(3)].map((_, index) => (
            <Percentage key={index} />
          ))}
        </div>
        <div className="progress_bars app_mb_1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="progress_bar"></div>
          ))}
        </div>
        <div className="cambia_link">
          <p className="app_redOneColor_text app_700_w">Cambia percentuali</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
