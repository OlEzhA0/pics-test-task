import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import { HeaderTitle } from "../HeaderTitle";
import { Embrance } from "../Embrance";
import { PricingFAQ } from "../PricingFAQ";
import { Testimonials } from "../Testimonials";
import { Plans } from "../Plans";
import {
  TABLE_COLUMN,
  MEDIUM_TABLE_COLUMN,
  SMALL_TABLE_COLUMN,
  EXTRA_SMALL_COLUMN,
} from "../../helpers";
import { PlansToggle } from "../PlansToggle";

export const HomePage: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [tableConfig, setTableConfig] = useState<Array<Array<string>>>();
  const [month, setMonth] = useState(false);
  const largeScreen = 1151;
  const mediumScreen = 820;
  const smallScreen = 630;

  const handleChangeConfig = (width: number) => {
    
    if (width >= largeScreen) {
      setTableConfig(TABLE_COLUMN);
    } else if (width >= mediumScreen) {
      setTableConfig(MEDIUM_TABLE_COLUMN);
    } else if (width >= smallScreen) {
      setTableConfig(SMALL_TABLE_COLUMN);
    } else {
      setTableConfig(EXTRA_SMALL_COLUMN);
    }
  };

  const handleResize = () => {
    handleChangeConfig(window.innerWidth);
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleChangeConfig(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    tableConfig ? (
      <div className="HomePage">
        <HeaderTitle />
        {window.innerWidth < largeScreen && <PlansToggle month={month} setMonth={setMonth} />}
        {tableConfig?.map((config) => (
          <Plans columns={config} key={config[0]} screenWidth={screenWidth} month={month} setMonth={setMonth} />
        ))}
        <Testimonials />
        <PricingFAQ />
        <Embrance />
      </div>
    ) : <div></div>
  );
};
