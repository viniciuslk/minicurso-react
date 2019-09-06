import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, NavbarBrand } from "reactstrap";

import "./style.css";

const MncHeader = ({ ...props }) => {
  return (
    <Navbar {...props} className="mnc-header">
      <NavbarBrand href="/">Minicurso React</NavbarBrand>

      <span>
        <NavLink activeClassName="active" to="/todos">
          Todos
        </NavLink>
        <NavLink activeClassName="active" to="/sobre">
          Sobre
        </NavLink>
      </span>
    </Navbar>
  );
};

export default MncHeader;
