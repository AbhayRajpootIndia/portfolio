import "../styles/project-details.css";
import { PrimaryColor } from "../constants/colors";
import { Button } from "@mui/material";
import { useIsVertical } from "../custom-hooks/dimensions";
import { isMobile } from "react-device-detect";

function ProjectDetailPage({ project }) {
  const isVertical = useIsVertical();
  const customHeaderStyle =
    isVertical || isMobile
      ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "1rem 0rem",
        }
      : {};
  const customNameStyles =
    isVertical || isMobile
      ? {
          margin: " 1rem 0rem",
        }
      : {};
  return (
    <div className="page-container">
      <div className="project-details-container">
        <div className="project-details-content">
          <div style={customHeaderStyle}>
            <p className="project-details-name" style={customNameStyles}>
              {project.name}
            </p>
            <a
              href={project.link}
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              <Button
                variant="outlined"
                sx={{
                  color: PrimaryColor,
                  borderColor: PrimaryColor,
                  padding: "0.4rem 1rem",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "8rem",
                }}
              >
                Visit Site
              </Button>
            </a>
          </div>
          <img src={project.thumbnailUri} alt="project-thumbnail" />
          {project.longDescription.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
