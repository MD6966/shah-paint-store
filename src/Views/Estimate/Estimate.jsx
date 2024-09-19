import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Estimate = ({ type }) => {
  const isSmall = useMediaQuery("(max-width:400px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
          width: "100%",
          background:
            "linear-gradient(to right, #eebe33, #bed839, teal, #af1975, violet)",
        }}
      >
        {type === "estimate" && (
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: isSmall ? "15px" : "19px",
            }}
          >
            Get Free Estimate : (+92) 301 - 4409254
          </Typography>
        )}
        {type === "bottom" && (
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: isSmall ? "15px" : "19px",
            }}
          >
            All rights reserved &copy; 2025
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Estimate;
