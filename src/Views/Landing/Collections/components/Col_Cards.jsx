import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Col_Cards = ({ val }) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        transition: "transform 0.3s ease, background 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&:hover .MuiCardContent-root": {
          background: "linear-gradient(to right, violet, #af1975)",
          transition: "background 0.5s ease",
        },
        "&:hover .MuiTypography-root": {
          color: "white",
          transition: "color 0.5s ease",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={val.src}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            textAlign: "center",
            mt: 2,
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline",
              textUnderlineOffset: "5px",
            },
          }}
        >
          {val.label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Col_Cards;
