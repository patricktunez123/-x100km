import React, { useState } from "react";
import { Modal } from "antd";
import { MdEuro } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Top.scss";
import { routes } from "../../config/route-config";
import Percentage from "./Percentage";

const Top = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        <div onClick={showModal} className="cambia_link app_cursored">
          <p className="app_redOneColor_text app_700_w">Cambia percentuali</p>
        </div>
        <Modal
          title=""
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          closable={false}
          width="60vw"
        >
          <div className="model_content">
            <div className="modal_close">
              <p onClick={handleCancel}>
                <AiOutlineClose />
              </p>
            </div>
            <p className="app_700_w app_greyFourColor_text app_medium_text app_mb_1 text-center">
              Dove usi l’auto?
            </p>
            <p className="app_400_w app_mb_2 text-center">
              Utilizza i <Link to="/">cursori</Link> per modificare le
              percentuali relative al tipo di percorso che fai abitualmente, una
              volta impostati i valori clicca su <Link to="/">Ricalcola</Link>
            </p>
            <div className="modal_cards">
              <div></div>
              <div className="pacentage_cards ">
                {[...Array(3)].map((_, index) => (
                  <Percentage key={index} />
                ))}
              </div>
              <div className="rc">
                <div className="ricalcola_div app_mt_2">
                  <p className="app_greySixColor_text app_700_w">Ricalcola</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Top;
