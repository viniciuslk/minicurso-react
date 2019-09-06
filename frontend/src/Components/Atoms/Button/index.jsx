import React from "react";

import { Button, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MncButton = ({
  disabled,
  loading,
  children,
  className,
  icon,
  spinnerColor,
  ...props
}) => {
  return (
    <Button
      className={`mnc-button ${className}`}
      {...props}
      disabled={disabled}
    >
      {loading && <Spinner size="sm" color={spinnerColor} />}
      {!loading && icon && <FontAwesomeIcon icon={icon} />}
      {!loading && children}
    </Button>
  );
};

MncButton.defaultProps = {
  spinnerColor: "light"
};

export default MncButton;
