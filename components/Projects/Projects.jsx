import { projectsData } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";
const ProjectCards = lazy(() => import("@/components/Projects/ProjectCards"));

const Projects = ({ visibleCount, setVisibleCount, show, setShow }) => {
  const handleVisibility = () => {
    setShow(false); // Hide before loading new projects
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setShow(true); // Show after projects are loaded
    }, 300);
  };
  const handleVisibilityDecrement = () => {
    setVisibleCount((prevCount) => prevCount - 6);
  };

  return (
    <Box mt="40px" id="projects" className="projects-section">
      <Typography variant="h2" textAlign="center">
        Projects
      </Typography>
      <Box className={`projects ${show ? "show" : ""}`}>
        <Suspense fallback={<div>loading...</div>}>
          {projectsData.slice(0, visibleCount).map((project, index) => (
            <ProjectCards
              title={project.title}
              description={project.description}
              image={project?.image}
              link={project.link}
              key={project.title + index}
            />
          ))}
        </Suspense>
      </Box>
      {visibleCount < projectsData.length ? (
        <Box mt={4} textAlign="center">
          <button
            className="btn-glow"
            style={{ "--clr": "#ffc86b" }}
            onClick={handleVisibility}
          >
            Show More
            <i></i>
          </button>
        </Box>
      ) : visibleCount > projectsData.length ? (
        <Box mt={4} textAlign="center">
          <button
            className="btn-glow"
            style={{ "--clr": "#ffc86b" }}
            onClick={handleVisibilityDecrement}
          >
            Show Less
            <i></i>
          </button>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Projects;
