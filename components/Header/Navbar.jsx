import { AccountBox, MenuRounded, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import PreviewDialog from "../PreviewDialog";

const Navbar = () => {
  const [openPreview, setOpenPreview] = useState(false);
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handlePreviewOpen = () => {
    setOpenPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };
  return (
    <>
      <Box className="nav-content">
        <Box className="nav-logo">
          <Image src={"/images/logo.png"} alt="" />
        </Box>
        <Box className="nav-menu">
          <Link href="#about">
            <Typography variant="h6">About</Typography>
          </Link>
          <Link href="#projects">
            <Typography variant="h6">Projects</Typography>
          </Link>
          <Link href="#contacts">
            <Typography variant="h6">Contacts</Typography>
          </Link>
        </Box>
        <Box className="nav-resume">
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
        <Box className="nav-menu-drawer">
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuRounded />
          </IconButton>
          <Drawer
            className="drawer-menu"
            anchor="top"
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            <Box
              role="presentation"
              onClick={toggleDrawer("top", false)}
              onKeyDown={toggleDrawer("top", false)}
            >
              <List>
                <ListItem disablePadding>
                  <Link href="#about">
                    <Typography variant="h6" px={4}>
                      About
                    </Typography>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <Link href="#projects">
                    <Typography variant="h6" px={4}>
                      Projects
                    </Typography>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <Link href="#contacts">
                    <Typography variant="h6" px={4}>
                      Contacts
                    </Typography>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Drawer>
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
