import { Call, MailOutline, Place } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import SocialAccounts from "../SocialAccounts";

const Contacts = () => {
  return (
    <>
      <Box className="contacts" my="3rem">
        <Card className="contact-card">
          <Box
            className="contact-content"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MailOutline />
            <Typography variant="h5">sayankumar.d2000@gmail.com</Typography>
          </Box>
        </Card>
        <Card className="contact-card">
          <Box
            className="contact-content"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Call />
            <Typography variant="h5">+91-8617284931</Typography>
          </Box>
        </Card>
        <Card className="contact-card">
          <Box
            className="contact-content"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Place />
            <Typography variant="h5">Kolkata, West Bengal</Typography>
          </Box>
        </Card>
      </Box>
      <Box
        display="flex"
        gap="1rem"
        alignItems="center"
        justifyContent="center"
        rowGap={1}
      >
        <div className="horizental-line line-100"></div>
        <SocialAccounts />
        <div className="horizental-line line-100"></div>
      </Box>
    </>
  );
};

export default Contacts;
