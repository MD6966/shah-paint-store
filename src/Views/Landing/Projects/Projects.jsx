import { Box, Grid } from "@mui/material";
import React from "react";
import Heading from "../../../components/Text/Heading";

const Projects = () => {
  return (
    <Box sx={{ minHeight: "50vh", py: 5, px: 2 }}>
      <Heading>Projects</Heading>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: "100%",
              height: "550px", // Adjust height as needed
              backgroundImage: "url('/assets/exterior.jpeg')", // Set image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            OFFICE INTERIOR
          </Box>
        </Grid>

        {/* Top right small image */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "550px", // Adjust height as needed
              backgroundImage: "url('/assets/home.jpeg')", // Set image path
              backgroundSize: "cover",
              backgroundPosition: "fixed",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>

        {/* Bottom images */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "300px", // Adjust height as needed
              backgroundImage: "url('/assets/exterior.jpeg')", // Set image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "300px", // Adjust height as needed
              backgroundImage: "url('/assets/exterior.jpeg')", // Set image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: "300px", // Adjust height as needed
              backgroundImage: "url('/assets/exterior.jpeg')", // Set image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
