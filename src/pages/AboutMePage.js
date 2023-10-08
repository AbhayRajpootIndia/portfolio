import "../styles/aboutme-page.css";

import { useIsVertical } from "../custom-hooks/dimensions";
import { isMobile } from "react-device-detect";

function AboutMePage() {
  const isVertical = useIsVertical();

  const customPageStlyes =
    isVertical || isMobile
      ? {
          padding: "1rem 0rem",
        }
      : {};
  const customContentContainerStyle =
    isVertical || isMobile
      ? {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "1rem",
        }
      : {};

  return (
    <div className="page-container">
      <div className="aboutme-page" style={customPageStlyes}>
        {pageContent.map((item, index) => (
          <div style={customContentContainerStyle}>{item}</div>
        ))}
      </div>
    </div>
  );
}

const pageContent = [
  <>
    <img
      src={require("../images/abhay-portrait-with-art.png")}
      alt="Abhay Kumar Portrait"
      onClick={() =>
        window.open("https://www.linkedin.com/in/abhay-rajpoot-india/")
      }
    />
    <div className="aboutme-content">
      <p>About Me</p>
      <p>
        I'm Abhay Kumar, a passionate Computer Science Engineering student at
        JSS Academy of Technical Education.<br></br>
        <br></br> As an aspiring developer and technology enthusiast, I have
        dedicated myself to honing my skills in web and mobile application
        development.
      </p>
    </div>
  </>,
  <>
    <img
      src={require("../images/about-me-page/education-section.jpg")}
      alt="books-on-desk"
      onClick={() =>
        window.open("https://unsplash.com/photos/OyCl7Y4y0Bk", "_blank")
      }
    />
    <div className="aboutme-content">
      <p>Education</p>
      <p>
        Currently, I am pursuing my Bachelor's degree in Computer Science
        Engineering at JSS Academy of Technical Education, Bengaluru with a CGPA
        of 8.48.<br></br>
        <br></br> My academic journey has provided me with a strong foundation
        in computer science and has fueled my curiosity to explore the
        ever-evolving world of technology.
      </p>
    </div>
  </>,
  <>
    <img
      src={require("../images/about-me-page/skills-section.jpg")}
      alt="dog-with-ipad"
      onClick={() =>
        window.open("https://unsplash.com/photos/gySMaocSdqs", "_blank")
      }
    />
    <div className="aboutme-content">
      <p>Skills</p>
      <p>
        My primary areas of expertise lie in ReactJS, React Native, and NodeJS.
        These powerful tools have allowed me to bring creative ideas to life and
        develop dynamic, user-friendly applications.
      </p>
    </div>
  </>,
  <>
    <img
      src={require("../images/about-me-page/music-and-coffee.jpg")}
      alt="dog-with-ipad"
      onClick={() =>
        window.open("https://unsplash.com/photos/gySMaocSdqs", "_blank")
      }
    />
    <div className="aboutme-content">
      <p>Hobbies</p>
      <p>
        Beyond the realm of coding, I have a deep love for music and video
        games. Music has always been a source of inspiration and relaxation for
        me.<br></br>
        <br></br>Whether I'm jamming out to my favorite tunes or experimenting
        with new genres, it's a constant source of joy in my life.
      </p>
    </div>
  </>,
];

export default AboutMePage;
