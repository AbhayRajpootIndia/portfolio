import "../styles/project-details.css";
import { PrimaryColor } from "../constants/colors";
import { Button } from "@mui/material";

function ProjectDetailPage({ project }) {
  return (
    <div className="page-container">
      <div className="project-details-container">
        <div className="project-details-content">
          <div>
            <p className="project-details-name">{project.name}</p>
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
