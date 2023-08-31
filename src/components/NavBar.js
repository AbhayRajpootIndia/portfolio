import "../styles/navbar.css";
import { PrimaryColor, BodyColor } from "../constants/colors";

import { navbarRoutes } from "../routes/router";
import { Button } from "@mui/material";

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
  return (
    <div className="navbar-container">
      <img
        className="navbar-logo"
        src={require("../images/abhay-kumar-logo.png")}
        alt="Logo"
      />
      <div className="navbar-buttons-container">
        {navbarRoutes.map((route) => (
          <NavButton name={route.name} path={route.path} />
        ))}
      </div>
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
    </div>
  );
}

export default NavBar;
