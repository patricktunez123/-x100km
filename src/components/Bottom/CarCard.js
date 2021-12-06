import React from "react";
import { Button, Progress } from "antd";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import carImage from "../../images/car2.webp";

const CarCard = () => {
  return (
    <div className="car_card">
      <div className="card_left">
        <img src={carImage} alt="" />
      </div>
      <div className="card_right">
        <div className="car_name app_mb_1">
          <span className="app_700_w app_greyFourColor_text text_24">
            VOLKSWAGEN ECO UP!
          </span>{" "}
          <span className="app_400_w text_24">move 5 porte</span>
        </div>
        <div className="car_info app_mb_2">
          <div>
            <p className="text_16">
              Tipo: <span className="app_700_w">Berlina</span>
            </p>
            <p className="text_16">
              Potenza: <span className="app_700_w">150CV | 110kW</span>
            </p>
            <p className="text_16">
              Cilindrata: <span className="app_700_w">1395 cm3</span>
            </p>
          </div>
          <div>
            <Button className="app_large_btn">gpl</Button>
          </div>
        </div>
        <div className="car_km">
          <div className="car_km_number">
            <p className="app_700_w app_blueTwoColor_text text_24">3,85 </p>
            <p className="text_16 mb-1">€x100km per le tue abitudini</p>
          </div>
          <AiOutlineExclamationCircle />
        </div>
        <Progress percent={45} steps={5} showInfo={false} />
      </div>
    </div>
  );
};

export default CarCard;
