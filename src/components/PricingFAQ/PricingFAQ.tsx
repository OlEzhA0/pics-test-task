import React from "react";
import "./PricingFAQ.scss";
import { PRICING_FAQ } from "../../helpers";

export const PricingFAQ = () => (
  <div className="PricingFAQ container">
    {Object.keys(PRICING_FAQ).map((key) => (
      <React.Fragment key={key}>
        <h3 className="PricingFAQ__Title">{key}</h3>
        <ul>
          {PRICING_FAQ[key].map((link: string) => (
            <li key={link} className="PricingFAQ__Item">
              <a href="/#" className="PricingFAQ__Link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </React.Fragment>
    ))}
  </div>
);
