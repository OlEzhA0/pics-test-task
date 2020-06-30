import React from "react";
import "./PlansToggle.scss";
import cn from "classnames";

interface Props {
  month: boolean;
  setMonth: (month: boolean) => void;
  additionallity: string
}

export const PlansToggle: React.FC<Props> = ({ month, setMonth, additionallity }) => {
  return (
    <div className={`Plans__Toggle${additionallity} container`}>
      <label
        className={`Plans__ToggleContent${additionallity}`}
        onClick={() => setMonth(!month)}
      >
        <p className="Plans__Monthly"> Monthly</p>
        <div className="Plans__HandleToggle">
          <div
            className={cn({
              Plans__Toggler: true,
              "Plans__Toggler--up": !month,
              "Plans__Toggler--down": month,
            })}
          />
        </div>
        <div className="PlansToggle__PlanInfoContainer">
          <p className="Plans__Annual">Annual</p>
          <p className="Plans__FreeMonthly">(2 months free)</p>
        </div>
      </label>
    </div>
  );
};
