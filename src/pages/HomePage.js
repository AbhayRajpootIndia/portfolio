import { PrimaryColor } from "../constants/colors";
import "../styles/home-page.css";

import { Button } from "@mui/material";

function HomePage() {
  return (
    <div className="page-container">
      <div className="home-page-container">
        <div className="intro-containner">
          <p>Hey, I am Abhay</p>
          <p>
            I create <span style={{ color: PrimaryColor }}>product design</span>{" "}
            and brand experience
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: PrimaryColor,
              padding: "0.4rem 1rem",
              fontSize: "1rem",
              marginRight: "3rem",
              minWidth: "10rem",
            }}
          >
            Get in touch
          </Button>
        </div>
        <div className="intro-image-containner">
          <img
            src={require("../images/abhay-portrait-with-art.png")}
            alt="Abhay Kumar Portrait"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
