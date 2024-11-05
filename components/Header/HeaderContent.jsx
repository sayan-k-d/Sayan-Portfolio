import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import SocialAccounts from "../SocialAccounts";

const HeaderContent = () => {
  return (
    <Box className="header-content">
      <Box>
        <Typography className="content-name">
          I&apos;M{" "}
          <span className="text-yellow text-600 ">Sayan Kumar Das</span>
        </Typography>
        <Typography className="content-description">
          Full Stack Developer with a passion for technology and design.
        </Typography>
      </Box>
      {/* <Box className="header-content-small">
        <Typography className="content-name">
          I'M <span className="text-yellow text-600 ">Sayan Kumar Das</span>
        </Typography>
        <Typography className="content-description">
          Full Stack Developer with a passion for technology and design.
        </Typography>
      </Box> */}
      <Box className="content-socials">
        <Link className="btn-contact" href="#contacts">
          Contact Me
        </Link>
        <Box className="social-accounts">
          <div className="horizental-line line-4"></div>
          <SocialAccounts />
          <div className="horizental-line line-4"></div>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderContent;
