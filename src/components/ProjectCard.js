import "../styles/project-card.css";
import LinkWithArrow from "./LinkWithArrow";

function ProjectCard(props) {
  const project = props.project;
  return (
    <div className="project-card-container">
      <img src={project.thumbnailUri} alt="thumbnail" />
      <div className="project-card-content">
        <p>{project.name}</p>
        <p>{project.description}</p>
        <LinkWithArrow linkText={"Visit The Site"} link={project.link} />
      </div>
    </div>
  );
}

export default ProjectCard;
