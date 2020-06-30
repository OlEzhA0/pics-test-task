import React from "react";
import "./HeaderTitle.scss";

export const HeaderTitle = () => {
  return (
    <div className="HeaderTitle container">
      <h1 className="HeaderTitle__Title">Pricing Guide</h1>
      <p className="HeaderTitle__Descr">You don’t need a credit card</p>
      <p className="HeaderTitle__Descr">to start a 14-day free trial</p>
    </div>
  );
};
