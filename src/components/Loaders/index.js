import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Loaders.scss";

export const Spinner = ({ size }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};

export const CardLoader = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme color="#eeeeee" highlightColor="#ffffff">
        <Skeleton height={180} />
        <div>
          <Skeleton height={10} width="65%" />
          <Skeleton height={10} width="65%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};
