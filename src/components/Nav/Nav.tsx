import React from "react";
import "./Nav.scss";
import { HEADER_NAV_CONFIG } from "../../helpers";
import { NavLink } from "react-router-dom";
export const Nav = () => (
  <div className="Nav">
    <nav>
      <ul className="Nav__List">
        {HEADER_NAV_CONFIG.map((config) => (
            <NavLink
              key={config.link}
              to={config.link}
              className="Nav__Link"
              activeClassName="Nav__Link--active"
            >
              <li key={config.id} className="Nav__Item">
                {config.name}
              </li>
              {config.list && (
              <ul className="Nav__DropList">
                {config.list.map((item: string) => (
                  <li className="Nav__DropItem" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            </NavLink>
        ))}
      </ul>
    </nav>
  </div>
);
