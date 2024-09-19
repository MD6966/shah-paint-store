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
import { FaPaintRoller } from "react-icons/fa6";
import { FaInfo, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
const data = [
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

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const StyledButton = styled(Button)({
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "10px",
      textDecorationColor: "#63262f",
    },
  });

  const isMobile = useMediaQuery("(max-width: 900px)");
  const isSmal = useMediaQuery("(max-width: 400px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

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
        <Box sx={{ ml: "auto", display: "flex" }}>
          {!isMobile && (
            <>
              {data.map((val, ind) => (
                <Box
                  key={ind}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 2,
                    cursor: "pointer",
                    "&:hover": {
                      "& svg": {
                        color: "#63262f",
                      },
                    },
                  }}
                >
                  {val.icon}
                  <StyledButton
                    sx={{
                      textDecoration: pathname === val.to ? "underline" : "",
                      textUnderlineOffset: "10px",
                      textDecorationColor: "#63262f",
                    }}
                    component={Link}
                    to={val.to}
                  >
                    {val.label}
                  </StyledButton>
                </Box>
              ))}
            </>
          )}

          {isMobile && (
            <>
              <IconButton onClick={toggleDrawer(true)}>
                <GiHamburgerMenu
                  style={{ marginTop: "3px", color: "white" }}
                  size={30}
                />
              </IconButton>
              <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                    color: "#fff",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
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
                    <IoMdCloseCircle size={30} />{" "}
                  </IconButton>
                </Box>
                <Divider sx={{ backgroundColor: "#fff", mb: 2 }} />
                <Box
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  {data.map((val, ind) => (
                    <Box
                      key={ind}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      {val.icon}
                      <StyledButton component={Link} to={val.to}>
                        {val.label}
                      </StyledButton>
                    </Box>
                  ))}

                  {isSmal && (
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
                </Box>
              </Drawer>
            </>
          )}

          {!isSmal && (
            <Button
              variant="contained"
              startIcon={<FaWhatsapp />}
              sx={{
                textTransform: "none",
                background: "#fff",
                color: "#63262f",
                ml: isMobile ? 2 : "",
              }}
            >
              Contact Us
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
