import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  useMediaQuery,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import { AiFillProduct } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { FaPaintRoller, FaInfo, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { id: 1, label: "Products", icon: <AiFillProduct size={20} />, to: "" },
  {
    id: 2,
    label: "Color Palette",
    icon: <IoIosColorPalette size={20} />,
    to: "",
  },
  { id: 3, label: "Services", icon: <FaPaintRoller size={20} />, to: "" },
  { id: 4, label: "About Us", icon: <FaInfo size={20} />, to: "/about-us" },
];

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  letterSpacing: "2px",
  textTransform: "none",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "10px",
    textDecorationColor: "#63262f",
  },
  [theme.breakpoints.between(900, 970)]: {
    fontSize: "0.65rem",
    marginRight: "0px",
  },
}));

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmall = useMediaQuery("(max-width: 400px)");
  const isMd = useMediaQuery("(max-width: 500px)");

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const renderMenuItems = () =>
    menuItems.map(({ id, icon, label, to }) => (
      <Box key={id} sx={{ display: "flex", alignItems: "center", mr: 2 }}>
        {icon}
        <StyledButton
          sx={{ textDecoration: pathname === to ? "underline" : "" }}
          component={Link}
          to={to}
        >
          {label}
        </StyledButton>
      </Box>
    ));

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "url(/assets/header.webp)",
        backgroundSize: "cover",
        height: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Link to="/">
          <img
            src="/assets/logo-white.png"
            style={{ height: "150px", cursor: "pointer" }}
            alt="logo"
          />
        </Link>
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
          {!isMobile && renderMenuItems()}
          {isMobile && (
            <>
              <IconButton onClick={toggleDrawer(true)}>
                <GiHamburgerMenu style={{ color: "white" }} size={30} />
              </IconButton>
              <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: 2,
                    color: "#fff",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <img
                    src="/assets/logo-white.png"
                    style={{ height: "60px" }}
                    alt="logo"
                  />
                  <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{ color: "#fff" }}
                  >
                    <IoMdCloseCircle size={30} />
                  </IconButton>
                </Box>
                <Divider sx={{ backgroundColor: "#fff", mb: 2 }} />
                <Box onClick={toggleDrawer(false)}>{renderMenuItems()}</Box>
                {isSmall && (
                  <Button
                    variant="contained"
                    startIcon={<FaWhatsapp />}
                    sx={{
                      textTransform: "none",
                      background: "#fff",
                      color: "#63262f",
                      mt: 2,
                    }}
                  >
                    Contact Us
                  </Button>
                )}
              </Drawer>
            </>
          )}
          {!isSmall && (
            <>
              <Button
                variant="contained"
                startIcon={<FaWhatsapp />}
                sx={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#63262f",
                }}
              >
                Contact Us
              </Button>
              {!isMd && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CiSearch
                    size={25}
                    style={{ cursor: "pointer", margin: "0px 15px" }}
                  />
                  <CiShoppingCart size={25} style={{ cursor: "pointer" }} />
                </Box>
              )}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
