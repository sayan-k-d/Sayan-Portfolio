import { Box, Typography } from "@mui/material";
import React from "react";

const Experience = () => {
  return (
    <>
      <Box className="experience">
        <Box className="experience-year">
          <Typography>2024</Typography>
        </Box>
        <div className="experience-line">
          <div className="experience-icon"></div>
        </div>
        <Box className="experience-content">
          <Box className="experience-header">
            <Typography variant="h3">Full Stack Developer</Typography>
            <Typography variant="h4">Confitech Solutions Pvt. Ltd.</Typography>
          </Box>
          <Typography>
            I joined Confitech Solutions Pvt. Ltd. as a Full Stack Developer in
            2024, where I contribute to the development and maintenance of web
            applications, utilizing both front-end and back-end technologies to
            deliver efficient and scalable solutions.
          </Typography>
        </Box>
      </Box>
      <Box className="experience">
        <Box className="experience-year">
          <Typography>2022</Typography>
        </Box>
        <div className="experience-line">
          <div className="experience-icon"></div>
        </div>
        <Box className="experience-content">
          <Box className="experience-header">
            <Typography variant="h3">Backend Developer</Typography>
            <Typography variant="h4">
              Telaverge Communications Pvt. Ltd.
            </Typography>
          </Box>
          <Typography>
            I joined Telaverge Communications Pvt. Ltd. as a Backend Developer
            back in 2022, specializing in Node.js, Express, MongoDB, MySQL, and
            GraphQL. My role involved building and optimizing server-side logic
            and ensuring seamless data flow between the server and the front
            end.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
