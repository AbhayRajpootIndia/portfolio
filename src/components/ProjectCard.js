import { useNavigate } from "react-router";
import "../styles/project-card.css";
import LinkWithArrow from "./LinkWithArrow";

function ProjectCard(props) {
  const project = props.project;
  const navigate = useNavigate();
  return (
    <div
      className="project-card-container"
      onClick={() => navigate(`/projects/${project.pathName}`)}
    >
      <img src={project.thumbnailUri} alt="thumbnail" />

      <div className="project-card-content">
        <p>{project.name}</p>
        <p style={{}}>{project.description}</p>
        <LinkWithArrow linkText={"Visit The Site"} link={project.link} />
      </div>
    </div>
  );
}

export default ProjectCard;
