import React from "react";
import { Radio, Checkbox } from "antd";

const Panel3 = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-12">
        <Radio>Radio</Radio>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </div>
      <div className="col-md-6 col-lg-6 col-12">
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </div>
    </div>
  );
};

export default Panel3;
