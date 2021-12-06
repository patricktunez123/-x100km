import React from "react";
import { Radio, Checkbox } from "antd";

const Panel2 = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="row">
      <div className="col-12">
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
            Benzina <span className="app_redOneColor_text">(123)</span>
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Gasolio <span className="app_greenOneColor_text">(71)</span>
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mild Hybrid Benzina{" "}
            <span className="app_greenOneColor_text">(21)</span>
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Mild Hybrid Diesel (5)
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Full Hybrid (15)
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Plug-in Hybrid (34)
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Elettrica (34)
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            GPL (6)
          </Checkbox>
        </p>
        <p className="mb-2">
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Metano (6)
          </Checkbox>
        </p>
      </div>
    </div>
  );
};

export default Panel2;
