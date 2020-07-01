import React from "react";
import "./RegisterButton.scss";
import { Link } from "react-router-dom";
import cn from 'classnames';

interface Props {
  noMargin?: boolean;
}

export const RegisterButton: React.FC<Props> = ({ noMargin }) => (
  <Link to="/register" className={cn({
    "RegisterButton": true,
    "RegisterButton--noMargin": noMargin,
  })}>
    Register
  </Link>
);
