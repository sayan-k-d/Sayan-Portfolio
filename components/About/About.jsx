import { Box, Typography } from "@mui/material";
import React from "react";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <>
      <Typography variant="h2">About</Typography>
      <Box display="flex" gap={2}>
        <div className="horizental-line top-spacing"></div>
        <Typography variant="h6">
          Experienced
          <span className="text-yellow">
            {" "}
            Full Stack developer with 2+ years of hands-on experience
          </span>
          . Proficient in creating robust web applications using modern HTML,
          CSS, and JavaScript, React JS, Next JS, Node JS and Python frameworks
          like Django, Flask. Motivated and quick learner with a passion for
          staying updated on latest industry trends. Seeking growth-oriented
          opportunities to contribute skills and continue personal and
          professional development.
        </Typography>
      </Box>
      <Skills />
    </>
  );
};

export default About;
