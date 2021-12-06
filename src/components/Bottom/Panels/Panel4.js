import React from "react";
import { Radio, Checkbox } from "antd";

const Panel4 = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-6">
        <p>
          <Radio className="app_400_w text_18 app_greyFourColor_text">
            Radio
          </Radio>
        </p>
        <p>
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Checkbox
          </Checkbox>
        </p>
        <p>
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Checkbox
          </Checkbox>
        </p>
      </div>
      <div className="col-md-6 col-lg-6 col-6">
        <p>
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Checkbox
          </Checkbox>
        </p>
        <p>
          <Checkbox
            className="app_400_w text_18 app_greyFourColor_text"
            onChange={onChange}
          >
            Checkbox
          </Checkbox>
        </p>
      </div>
    </div>
  );
};

export default Panel4;
