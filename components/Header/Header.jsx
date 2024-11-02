import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { AccountBox, Search } from "@mui/icons-material";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderContent />
    </>
  );
};

export default Header;
