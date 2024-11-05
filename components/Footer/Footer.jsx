import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Typography sx={{ textAlign: "center", color: "#bbb", py: "1rem" }}>
        &copy;Sayan Kumar Das | 2024
      </Typography>
      <Box className="scroll-top back-top">
        <Link href="#dashboard" title="Back to Top">
          <KeyboardArrowUp />
        </Link>
      </Box>
    </>
  );
};

export default Footer;
