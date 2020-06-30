import React, { useState } from "react";
import "./Plans.scss";
import { TABLE_INFO } from "../../helpers";
import cn from "classnames";
import { Table } from "../Table";
import { PlansToggle } from "../PlansToggle";

interface Props {
  columns: string[];
  screenWidth: number;
  month: boolean;
  setMonth: (month: boolean) => void;
}

export const Plans: React.FC<Props> = ({
  columns,
  screenWidth,
  month,
  setMonth,
}) => {
  return (
    <>
      <div className="Plans tableContainer">
        <div
          className={cn({
            Plans__Cards: true,
            container: screenWidth <= 1150,
          })}
        >
          <PlansToggle month={month} setMonth={setMonth} additionallity="" />
          {columns.map((card) => (
            <div
              className="Plans__Card"
              key={card}
              style={{
                color: `#${
                  TABLE_INFO[card].textColor
                    ? TABLE_INFO[card].textColor
                    : "ffffff"
                }`,
              }}
            >
              <div
                className="Plans__CardInfo"
                style={{ backgroundColor: `#${TABLE_INFO[card].cardColor}` }}
              >
                <p
                  className="Plans__CardTitle"
                  style={{
                    color: `#${
                      TABLE_INFO[card].textColor
                        ? TABLE_INFO[card].textColor
                        : "ffffff"
                    }`,
                  }}
                >
                  {card}
                </p>
                <p className="Plans__CardPrice">
                  {!TABLE_INFO[card].img && (
                    <span className="Plans__Curr">$</span>
                  )}
                  {TABLE_INFO[card].img ? (
                    <img
                      src={TABLE_INFO[card].img}
                      alt="Enterprise"
                      className="Plans__Img"
                    />
                  ) : !month ? (
                    TABLE_INFO[card].price.mo
                  ) : TABLE_INFO[card].price.yr ? (
                    TABLE_INFO[card].price.yr
                  ) : (
                    TABLE_INFO[card].price.mo
                  )}
                  {!TABLE_INFO[card].img &&
                    TABLE_INFO[card].price.mo > 0 &&
                    (TABLE_INFO[card].price.yr ? (
                      <span className="Plans__PerPlan">
                        {!month ? "/mo" : "/yr"}
                      </span>
                    ) : (
                      <span className="Plans__PerPlan">/mo</span>
                    ))}
                </p>
                <p className="Plans__CardText">{TABLE_INFO[card].cardText}</p>
              </div>
              <div
                className="Plans__Button"
                style={{ backgroundColor: `#${TABLE_INFO[card].cardColor}` }}
              >
                <a
                  href="#"
                  className="Plans__Link"
                  style={{
                    color: `#${
                      TABLE_INFO[card].textColor
                        ? TABLE_INFO[card].textColor
                        : "ffffff"
                    }`,
                  }}
                >
                  Try it for free
                </a>
              </div>
            </div>
          ))}
        </div>
        <Table columns={columns} screenWidth={screenWidth} />
      </div>
    </>
  );
};
