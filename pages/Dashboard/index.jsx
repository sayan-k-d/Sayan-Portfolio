import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Dashboard = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="dashboard-layout" id="dashboard">
        <Paper elevation={5} className="header-section">
          <div className="container">
            <Box display="flex" flexDirection="column" height="100%">
              <Header />
            </Box>
          </div>
        </Paper>
        <Box className="about-section" id="about">
          <div className="container">
            <About />
            <Projects
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              show={show}
              setShow={setShow}
            />
          </div>
        </Box>
        <Box mt="5rem" className="experience-section">
          <Box component={Paper} className="experiance-area">
            <Typography variant="h2" position="absolute">
              Experience
            </Typography>
            <Box className="experiences">
              <Experience />
            </Box>
          </Box>
        </Box>
        <Box className="contacts-section" id="contacts">
          <Box className="contact-me">
            <Typography variant="h2">Contact Me</Typography>
          </Box>
          <Contacts />
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
