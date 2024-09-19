import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mb: 5,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="h3"
      >
        {children}
      </Typography>
      <img src="/assets/bottom.png" />
    </Box>
  );
};

export default Heading;
