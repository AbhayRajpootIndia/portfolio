import "../styles/navbar.css";
import { PrimaryColor, BodyColor } from "../constants/colors";

import { navbarRoutes } from "../routes/router";
import { Button } from "@mui/material";
import useWindowDimensions, { useIsVertical } from "../custom-hooks/dimensions";

import { isMobile } from "react-device-detect";
import { useState } from "react";

function NavButton({ name, path }) {
  return (
    <div className="navbar-buttons">
      <a href={path} style={{ color: BodyColor }}>
        {name}
      </a>
    </div>
  );
}

function NavBar() {
  const isVertical = useIsVertical();
  const { width } = useWindowDimensions();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="navbar-container"
      style={{ flexDirection: isMobile || isVertical ? "column" : "row" }}
    >
      {!(isMobile || isVertical) && (
        <>
          <img
            className="navbar-logo"
            src={require("../images/abhay-kumar-logo.png")}
            alt="Logo"
          />
          <div className="navbar-buttons-container">
            {navbarRoutes.map((route) => (
              <NavButton name={route.name} path={route.path} key={route.name} />
            ))}
          </div>
          <a href="/contact">
            <Button
              variant="outlined"
              sx={{
                color: PrimaryColor,
                borderColor: PrimaryColor,
                padding: "0.4rem 1rem",
                fontSize: "1rem",
                marginRight: "3rem",
                minWidth: "10rem",
                textTransform: "capitalize",
              }}
            >
              Contact me
            </Button>
          </a>
        </>
      )}

      {(isMobile || isVertical) && (
        <>
          <div
            className="navbar-menu-container"
            style={{ flexDirection: isMobile || isVertical ? "column" : "row" }}
          >
            <div className="navbar-menu-header">
              <img
                className="navbar-logo"
                src={require("../images/abhay-kumar-logo.png")}
                alt="Logo"
                style={{ marginLeft: "1rem" }}
              />
              <p style={{ fontSize: "1.5rem" }}>Portfolio</p>
              <input
                type="checkbox"
                role="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-label="Display the menu"
                className="navbar-menu-button"
              />
            </div>
            {dropdownOpen && (
              <div className="navbar-dropdown-container" style={{ width }}>
                {navbarRoutes.map((route, index) => (
                  <div
                    style={{
                      borderBottom: "1px solid rgb(153, 153, 153)",
                      borderTop:
                        index === 0 ? "1px solid rgb(153, 153, 153)" : "none",
                    }}
                  >
                    <NavButton
                      name={route.name}
                      path={route.path}
                      key={route.name}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
