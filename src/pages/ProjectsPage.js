import "../styles/projects-page.css";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <div className="page-container">
      <div className="projects-page-container">
        <div className="project-cards-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
