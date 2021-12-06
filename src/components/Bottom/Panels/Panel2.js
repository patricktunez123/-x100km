import React from "react";
import { Radio, Checkbox } from "antd";

const Panel2 = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="row">
      <div className="col-12">
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
    </div>
  );
};

export default Panel2;
