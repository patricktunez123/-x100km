import React from "react";
import { Radio, Checkbox } from "antd";

const Panel4 = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-6">
        <p className="mb-2">
          <Radio className="app_400_w text_18 app_greyFourColor_text">
            Tutte
          </Radio>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Alfa Romeo
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Alpine
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Aston Martin
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Audi
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Bmw
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Citroen
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Cupra
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Dacia
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Ds
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Dr
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Fiat
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Ford
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Honda
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Hyundai
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Jaguar
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Jeep
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Kia
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Lancia
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Land Rover
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Lexus
          </Checkbox>
        </p>
      </div>
      <div className="col-md-6 col-lg-6 col-6">
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mahindra
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mazda
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mercedes
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mg
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mini
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mitsubishi
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Nissan
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Opel
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Peugeot
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Porsche
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Renault
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Seat
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Skoda
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Ssangyong
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Subaru
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Suzuki
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Toyota
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Tesla
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Volkswagen
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Volvo
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Xev
          </Checkbox>
        </p>
      </div>
    </div>
  );
};

export default Panel4;
