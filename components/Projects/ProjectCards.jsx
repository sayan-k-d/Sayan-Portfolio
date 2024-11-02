import { ProjectContext } from "@/context/ProjectContext";
import { ArrowForward } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const ProjectCards = ({ title, description, image, link }) => {
  const router = useRouter();
  const { setProjectData } = useContext(ProjectContext);
  const MAX_LENGTH = 50;
  const descriptionShorter = (description, maxLength) => {
    if (description.length > maxLength)
      return description.substring(0, maxLength) + "...";
    return description;
  };
  const handleCardClick = () => {
    setProjectData({ title, description, image, link }); // Set data in context
    router.push(`/Dashboard/ProjectDetails`);
  };

  return (
    <Card className="projects-card" sx={{ backgroundImage: `url(${image})` }}>
      <CardContent className="project-overlay">
        <Typography variant="h6" color="white">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="white">
          {descriptionShorter(description, MAX_LENGTH)}
        </Typography>
        <Button variant="contained" onClick={handleCardClick}>
          See Details <ArrowForward />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCards;
