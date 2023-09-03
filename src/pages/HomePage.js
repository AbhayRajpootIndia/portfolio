import "../styles/home-page.css";

import { PrimaryColor } from "../constants/colors";

import { useNavigate } from "react-router";

import { Button } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="home-page-container">
        <div className="intro-containner">
          <p>Hey, I am Abhay</p>
          <p>
            I create{" "}
            <span style={{ color: PrimaryColor }}>software products</span> and
            brand experience
          </p>
          <p>
            I'm a passionate Computer Science Engineering student at<br></br>{" "}
            JSS Academy of Technical Education, Bengaluru.
          </p>
          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{
              backgroundColor: PrimaryColor,
              padding: "0.4rem 1rem",
              fontSize: "1rem",
              minWidth: "10rem",
              marginLeft: "0.5rem",
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
