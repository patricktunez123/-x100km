import React, { useState } from "react";
import { Drawer, Collapse } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Panel1 from "../../components/Bottom/Panels/Panel1";
import Panel2 from "../../components/Bottom/Panels/Panel2";
import Panel3 from "../../components/Bottom/Panels/Panel3";
import Panel4 from "../../components/Bottom/Panels/Panel4";
import "./MenuBottom.scss";

const { Panel } = Collapse;

const MenuBottom = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="menu_bottom" onClick={showDrawer}>
        <RiListSettingsFill className="big_icon" />
        <p className="app_800_w text_28">Filtra auto</p>
      </div>
      <Drawer
        title=""
        placement="bottom"
        contentWrapperStyle={{ minHeight: "100%" }}
        visible={visible}
        closable={false}
      >
        <div className="d_content">
          <div className="d_header">
            <h6 className="text_32 app_800_w">Filtra auto</h6>
            <div className="drawer_close" onClick={onClose}>
              <AiOutlineClose />
            </div>
          </div>
          <Collapse
            className="modal_menus"
            defaultActiveKey={["1", "2", "3", "4"]}
            ghost
            expandIconPosition="right"
            expandIcon={() => <IoIosArrowDown className="colpse_icon" />}
          >
            <Panel header="fascia di costo 100 km" key="1">
              <Panel1 />
            </Panel>
            <Panel className="p_content" header="ALIMENTAZIONE" key="2">
              <Panel2 />
            </Panel>
            <Panel header="tipo auto" key="3">
              <Panel3 />
            </Panel>
            <Panel header="marca" key="4">
              <Panel4 />
            </Panel>
          </Collapse>
        </div>
        <div className="drawer_bottom">
          <h6 className="app_800_w text_32">88 auto</h6>
          <p className="app_400_w text_22"> Vai alla lista</p>
        </div>
      </Drawer>
    </>
  );
};

export default MenuBottom;
