import "../styles/projects-page.css";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects-data";

function ProjectsPage() {
  return (
    <div className="page-container">
      <div className="projects-page-container">
        <div className="project-cards-container">
          {projectsData.map((project) => (
            <ProjectCard project={project} key={project.pathName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
