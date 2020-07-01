import React from "react";
import "./NavMenu.scss";
import cn from "classnames";
import { HEADER_NAV_CONFIG } from "../../helpers";
import { NavLink } from "react-router-dom";
import { RegisterButton } from "../RegisterButton";

interface Props {
  menuStatus: boolean;
}

export const NavMenu: React.FC<Props> = ({ menuStatus }) => (
  <div
    className={cn({
      NavMenu: true,
      "NavMenu--open": menuStatus,
    })}
  >
    <nav>
      <ul className="NavMenu__List">
        {HEADER_NAV_CONFIG.map((config) => (
          <NavLink
            key={config.link}
            to={config.link}
            className="NavMenu__Link"
            activeClassName="NavMenu__Link--active"
          >
            <li key={config.id} className="NavMenu__Item">
              {config.name}
            </li>
            {config.list && (
              <ul className="NavMenu__DropList">
                {config.list.map((item: string) => (
                  <li className="NavMenu__DropItem" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </NavLink>
        ))}
        <li className="NavMenu__Button">
          <RegisterButton noMargin={true} />
        </li>
      </ul>
    </nav>
  </div>
);
