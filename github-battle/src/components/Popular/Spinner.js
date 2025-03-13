import React from "react";
import { Spin } from "antd";
import "./Spinner.css";
import "antd/dist/antd.css";

const Spinner = (props) => {
  return props.active ? (
    <div className="spinner">
      <Spin />
    </div>
  ) : (
    ""
  );
};

export default Spinner;
