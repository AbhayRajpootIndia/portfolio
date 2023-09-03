import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/Portfolio";
import AboutMePage from "../pages/AboutMePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";

import ProjectDetailPage from "../pages/ProjectDetailPage";
import { projectsData } from "../data/projects-data";

export const subRoutes = [];

const projectsRoutes = projectsData.map((project) => ({
  path: `/projects/${project.pathName}`,
  element: <ProjectDetailPage project={project} />,
}));

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    name: "Home",
  },
  // {
  //   path: "/portfolio",
  //   element: <PortfolioPage />,
  //   name: "Portfolio",
  // },
  {
    path: "/projects",
    element: <ProjectsPage />,
    name: "Projects",
  },
  {
    path: "/aboutme",
    element: <AboutMePage />,
    name: "About me",
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  ...subRoutes,
  ...projectsRoutes,
];

export const navbarRoutes = routes.filter((item) => (item.name ? true : false));

const routeElements = routes.map((item) => ({
  path: item.path,
  element: item.element,
}));

export const router = createBrowserRouter(routeElements);
