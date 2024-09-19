import { Box, Button } from "@mui/material";
import React from "react";

const ButtonComp = ({ children, ...props }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
        variant="contained"
        {...props}
        sx={{
          background: "linear-gradient(to right, #00d1a1, teal)",
          textTransform: "none",
          fontSize: "15px",
          ...props.sx,
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

export default ButtonComp;
