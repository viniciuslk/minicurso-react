import React from "react";

import { Row, Col } from "reactstrap";
import MncButton from "../../Atoms/Button";

const MncButtonGroup = ({ LeftButtonProps, RightButtonProps, ColProps }) => (
  <Row>
    <Col {...ColProps}>
      <MncButton {...LeftButtonProps}>{LeftButtonProps.content}</MncButton>
    </Col>
    <Col {...ColProps}>
      <MncButton {...RightButtonProps}>{RightButtonProps.content}</MncButton>
    </Col>
  </Row>
);

export default MncButtonGroup;
