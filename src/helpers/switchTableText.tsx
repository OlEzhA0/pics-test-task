import React from "react";

export const swtitchTableText = (main: string, text = '') => {
  switch (main) {
    case "markDown green":
      return (
        <img src="markDownGreen.svg" alt="green mark down" className="icon" />
      );

    case "markDown yellow":
      return (
        <img src="markDownYellow.svg" alt="green mark down" className="icon" />
      );

    case "infinity":
      return <img src="endless.svg" alt="infinity" className="icon" />;

    case "x":
      return <img src="close.svg" alt="infinity" className="icon" />;

    case "text":
      return <p className="info-text">{text}</p>

    default:
      return "";
  }
};
