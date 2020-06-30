import React, { useState } from "react";
import "./TableData.scss";
import { TABLE_INFO, TABLE_DROP_ROW } from "../../helpers";
import { swtitchTableText } from "../../helpers/switchTableText";
import cn from "classnames";

interface Props {
  info: string;
  columns: string[];
}

export const TableData: React.FC<Props> = ({ info, columns }) => {
  const [openInfo, setOpenInfo] = useState(true);

  return (
    <>
      <div className="Table__Row">
        <label onClick={() => setOpenInfo(!openInfo)} className="Table__TitleExp">
          <p
            className={cn({
              Table__RowTitle: true,
              "Table__RowTitle--rotate": openInfo,
            })}
          >
            {info}
          </p>
        </label>
        {columns.map((sim) => (
          <span className="Table__Span" key={sim}>
            {swtitchTableText(TABLE_INFO[sim].info[info].main)}
          </span>
        ))}
      </div>
      <div
        className={cn({
          TableData__Info: true,
          "TableData__Info--open": !openInfo,
        })}
      >
        {TABLE_DROP_ROW[info].map(
          (prop) =>
            prop !== "main" && (
              <div className="TableData__Row" key={prop}>
                <div className="TableData__PropName">
                  <p
                    className="TableData__Prop"
                    data-title={TABLE_INFO.Free.info[info][prop].dataTitle}
                  >
                    {prop}
                    <img
                      className="TableData__ToolTipIcon"
                      src="https://pics.io/landing-assets/img/picsio/pricing/icon-tooltip.svg"
                      alt=""
                      data-tippy-content="Upload your assets into Pics.io library"
                    />
                  </p>
                </div>
                {columns.map((sim) => {
                  const main = TABLE_INFO[sim].info[info][prop].main;
                  let text = "";

                  if (main === "text") {
                    text = TABLE_INFO[sim].info[info][prop].text;
                  }

                  return (
                    <span className="Table__Span" key={sim}>
                      {swtitchTableText(main, text)}
                    </span>
                  );
                })}
              </div>
            )
        )}
      </div>
    </>
  );
};
