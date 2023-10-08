import "../styles/home-page.css";

import { PrimaryColor } from "../constants/colors";

import { useNavigate } from "react-router";

import { Button } from "@mui/material";
import useWindowDimensions, { useIsVertical } from "../custom-hooks/dimensions";

import { isMobile } from "react-device-detect";

function HomePage() {
  const navigate = useNavigate();
  const isVertical = useIsVertical();
  const { width } = useWindowDimensions();

  const customParagraphStyles = isVertical || isMobile ? { width } : {};
  const customIntroContainerStyles =
    isVertical || isMobile
      ? {
          paddingLeft: 0,
          width: "85%",
          paddingTop: "2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }
      : {};
  const customImageContainerStyles =
    isVertical || isMobile
      ? {
          width: "100%",
          justifyContent: "center",
          marginTop: "2rem",
        }
      : {};

  return (
    <div className="page-container">
      <div
        className="home-page-container"
        style={{ flexDirection: isVertical || isMobile ? "column" : "row" }}
      >
        <div className="intro-containner" style={customIntroContainerStyles}>
          <p
            style={{
              ...customParagraphStyles,
              fontSize: "1.8rem",
            }}
          >
            Hey, I am Abhay
          </p>
          <p
            style={{
              ...customParagraphStyles,
              fontSize: "2.8rem",
              lineHeight: "3.2rem",
              margin: "0.5rem 0.5rem",
            }}
          >
            I create{" "}
            <span style={{ color: PrimaryColor }}>software products</span> and
            brand experience
          </p>
          <p style={customParagraphStyles}>
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
        <div
          className="intro-image-containner"
          style={customImageContainerStyles}
        >
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
