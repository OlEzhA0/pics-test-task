import React from "react";
import "./Embrance.scss";

export const Embrance = () => (
  <div className="Embrance mainContainer">
    <div className="Embrance__Container">
      <div className="Embrance__Descr">
        <h2 className="Embrance__Title">Embrace your digital content</h2>
        <div className="Embrance__AdvList">
          <div className="Embrance__Sep" />
          <p className="Embrance__AdvItem">Free 14-day trial</p>
          <div className="Embrance__Sep" />
          <p className="Embrance__AdvItem">No credit card required</p>
          <div className="Embrance__Sep" />
          <p className="Embrance__AdvItem">Set up in 3 minutes or less</p>
          <div className="Embrance__Sep" />
        </div>
      </div>
      <form className="Embrance__SignUp" onSubmit={(e) => e.preventDefault()}>
        <div className="Embrance__Form">
          <div className="Embrance__InpWrap">
            <input
              type="email"
              className="Embrance__Inp"
              placeholder="E-mail"
            />
          </div>
          <div className="Embrance__InpWrap">
            <input
              type="password"
              className="Embrance__Inp"
              placeholder="Password"
            />
          </div>
          <div className="Embrance__InpWrap">
            <button className="Embrance__Button" type="submit">
              Create your free account
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
