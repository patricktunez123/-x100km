import React from "react";
import { Button, Progress } from "antd";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import carImage from "../../images/car.jpg";

const CarCard = () => {
  return (
    <div className="car_card">
      <div className="card_left">
        <img src={carImage} alt="" />
      </div>
      <div className="card_right">
        <div>
          <span className="app_700_w app_greyFourColor_text">
            VOLKSWAGEN ECO UP!
          </span>{" "}
          <span className="app_400_w">move 5 porte</span>
        </div>
        <div className="car_info">
          <div>
            <p className="app_small_text">
              Tipo: <span className="app_700_w">Berlina</span>
            </p>
            <p className="app_small_text">
              Potenza: <span className="app_700_w">150CV | 110kW</span>
            </p>
            <p className="app_small_text">
              Cilindrata: <span className="app_700_w">1395 cm3</span>
            </p>
          </div>
          <div>
            <Button className="app_large_btn">gpl</Button>
          </div>
        </div>
        <div className="car_km">
          <div className="car_km_number">
            <p className="app_700_w app_blueTwoColor_text app_extra_medium_text">
              3,85{" "}
            </p>
            <p className="app_small_text mb-1">€x100km per le tue abitudini</p>
          </div>
          <AiOutlineExclamationCircle />
        </div>
        <Progress percent={45} steps={5} showInfo={false} />
      </div>
    </div>
  );
};

export default CarCard;
