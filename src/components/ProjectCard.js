import "../styles/project-card.css";
import LinkWithArrow from "./LinkWithArrow";

function ProjectCard() {
  return (
    <div className="project-card-container">
      <img
        src={require("../images/project-images/quiz-app-thumbnail.png")}
        alt="thumbnail"
      />
      <div className="project-card-content">
        <p>Quiz App</p>
        <p>
          App which asks quiz questions based on various topics such as Anime,
          Movies, TV Shows, etc.
        </p>
        <LinkWithArrow linkText={"View In Vercel"} />
      </div>
    </div>
  );
}

export default ProjectCard;
