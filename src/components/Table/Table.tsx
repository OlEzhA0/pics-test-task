import React from "react";
import "./Table.scss";
import { TABLE_ROW } from "../../helpers";
import { TableData } from "../TableData";
import cn from "classnames";

interface Props {
  columns: string[];
  screenWidth: number;
}

export const Table: React.FC<Props> = ({ columns, screenWidth }) => (
  <div
    className={cn({
      Table: true,
      container: screenWidth < 1150,
    })}
  >
    {TABLE_ROW.map((info, i) => (
      <TableData
        info={info}
        key={info}
        columns={columns}
        defaultOpen={i === 0}
      />
    ))}
  </div>
);
