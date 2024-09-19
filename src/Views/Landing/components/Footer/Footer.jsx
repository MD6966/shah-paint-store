import { Box, Typography, Link, Grid } from "@mui/material";
import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "40px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={3}>
          <img
            src="/assets/logo.png"
            alt="Paint Pros Logo"
            width="150"
            style={{ margin: " -70px 0px", marginLeft: "-20px" }}
          />
          <Typography variant="subtitle1" sx={{ marginTop: "20px" }}>
            Exceptional Painting Services
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <Link href="https://twitter.com" target="_blank" color="inherit">
              <Twitter />
            </Link>
            <Link href="https://facebook.com" target="_blank" color="inherit">
              <Facebook />
            </Link>
            <Link href="https://instagram.com" target="_blank" color="inherit">
              <Instagram />
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>
          <Typography>History</Typography>
          <Typography>Sustainability</Typography>
          <Typography>Trade Account</Typography>
          <Typography>Stockists</Typography>
          <Typography>Color Consultation</Typography>
          <Typography>Paint Calculator</Typography>
        </Grid>

        {/* Links */}
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Typography>Paint Advice</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Order Tracking</Typography>
          <Typography>Color Card</Typography>
          <Typography>Our Inspiration</Typography>
          <Typography>Cookies Settings</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Location
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LocationOn />
            <Typography>Bedian Road Lahore.</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Phone />
            <Typography>+92 301 - 4409254</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {/* <Email /> */}
            {/* <Typography>syedmuzamilshah786@gmail.com</Typography> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
