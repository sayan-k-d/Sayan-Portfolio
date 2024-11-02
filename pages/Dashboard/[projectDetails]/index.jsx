import { ProjectContext } from "@/context/ProjectContext";
import { Home } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { HashLoader } from "react-spinners";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const ProjectDetails = () => {
  const router = useRouter();
  const { projectData } = useContext(ProjectContext);

  useEffect(() => {
    if (!projectData) {
      router.push("/Dashboard#projects");
    }
  }, []);
  if (!projectData)
    return (
      <div className="loader">
        <HashLoader color="white" />
      </div>
    );

  const { title, description, image, link } = projectData;

  return (
    <Box className="project-details">
      <Box className="navigate-home">
        <Link href={"/Dashboard#projects"} title="Navigate To Dashboard">
          <Home />
        </Link>
      </Box>
      <Paper
        component={Box}
        height={"100vh"}
        sx={{ backgroundImage: `url(${image})` }}
        className="project-jumbotron"
      >
        <Box className="project-title">
          <Typography variant="h2">{title}</Typography>
        </Box>
      </Paper>
      <Box className="project-description">
        <Typography variant="h4">Project Description</Typography>
        {description.split(". ").map((line, index) => (
          <Typography key={index}>
            {line.trim()}
            {index !== description.split(".").length - 1 && "."}
          </Typography>
        ))}
      </Box>
      <Box className="project-link">
        <Link href={link} target="_blank">
          View Project
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
