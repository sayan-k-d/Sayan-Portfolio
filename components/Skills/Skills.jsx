import { skillsData } from "@/utils/constants";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";

const Skills = () => {
  return (
    <Box mt="40px">
      <Typography variant="h2" textAlign="center">
        My Skills
      </Typography>
      <Box
        className="skills"
        display="-webkit-box"
        gap={2}
        mt={5}
        overflow="auto"
      >
        {skillsData.map((skills, index) => (
          <Card className="skills-card" key={skills.name + index}>
            <CardContent className="skill-centents">
              <div className="card-image">
                <Image src={skills.image} />
              </div>
              <Typography variant="h6" className="text-white">
                {skills.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
