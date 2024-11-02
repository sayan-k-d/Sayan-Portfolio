import { AccountBox, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import PreviewDialog from "../PreviewDialog";

const Navbar = () => {
  const [openPreview, setOpenPreview] = useState(false);

  const handlePreviewOpen = () => {
    setOpenPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box p={1}>
          <Image
            src={"/images/logo.png"}
            style={{ height: "auto", width: "4rem" }}
            alt=""
          />
        </Box>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Link href="#about">
            <Typography variant="h6" px={4}>
              About
            </Typography>
          </Link>
          <Link href="#projects">
            <Typography variant="h6" px={4}>
              Projects
            </Typography>
          </Link>
          <Link href="#contacts">
            <Typography variant="h6" px={4}>
              Contacts
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            p: "2px 10px",
            textAlign: "center",
            width: 300,
            backgroundColor: "#292929ff",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#292929cc",
            },
          }}
        >
          <Button
            className="btn-resume"
            title="Resume Preview"
            onClick={handlePreviewOpen}
          >
            Resume
          </Button>
          {/* <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
          }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Search sx={{ color: "white" }} />
        </IconButton> */}
        </Box>
      </Box>
      <PreviewDialog
        openPreview={openPreview}
        handlePreviewClose={handlePreviewClose}
      />
    </>
  );
};

export default Navbar;
