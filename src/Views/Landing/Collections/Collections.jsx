import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import Heading from "../../../components/Text/Heading";
import Col_Cards from "./components/Col_Cards";
import ButtonComp from "../../../components/Button/ButtonComp";
import { FaArrowRight } from "react-icons/fa";
const Collections = () => {
  const data = [
    { id: 1, label: "Interior Paints", src: "/assets/interioir.jpg" },
    { id: 2, label: "Exterior Paints", src: "/assets/exterior.jpeg" },
    { id: 3, label: "Polish Material", src: "/assets/polish.jpg" },
  ];
  return (
    <Box sx={{ minHeight: "50vh", py: 5 }}>
      <Heading>Collections</Heading>
      <Box sx={{ px: 4 }}>
        <Grid2 container spacing={3}>
          {data.map((val, ind) => {
            return (
              <Grid2 key={ind} size={{ xs: 12, md: 6, lg: 4 }}>
                <Col_Cards val={val} />
              </Grid2>
            );
          })}
        </Grid2>
        <ButtonComp sx={{ mt: 5 }} endIcon={<FaArrowRight />}>
          See All
        </ButtonComp>
      </Box>
    </Box>
  );
};

export default Collections;
