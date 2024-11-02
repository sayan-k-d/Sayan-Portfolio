import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import SocialAccounts from "../SocialAccounts";

const HeaderContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={6}
      sx={{ width: "55%", height: "100%" }}
    >
      <Typography fontSize="2rem">
        I'M <span className="text-yellow text-600">Sayan Kumar Das</span>
      </Typography>
      <Typography fontSize="1.5rem">
        Full Stack Developer with a passion for technology and design.
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="2rem"
        gap={1}
      >
        <Link className="btn-contact" href="#contacts">
          Contact Me
        </Link>
        <div className="horizental-line line-4"></div>
        <SocialAccounts />
        <div className="horizental-line line-4"></div>
      </Box>
    </Box>
  );
};

export default HeaderContent;
