import React from "react";

import { Spinner } from "reactstrap";

import "./style.css";

const MncCheckbox = ({ loading, SpinnerProps, ...props }) => {
  return !loading ? (
    <input type="checkbox" {...props} />
  ) : (
    <Spinner
      className="mnc-checkbox--loading"
      size="sm"
      color={SpinnerProps.color}
    />
  );
};

export default MncCheckbox;
