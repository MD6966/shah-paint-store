import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import Heading from "../../../components/Text/Heading";
import ProductCard from "./components/Product_Card";

const Products = () => {
  const data = [
    { id: 1, label: "Weathershield exterior paint", src: "/assets/ws.png" },
    { id: 2, label: "Plastic Emulsion interior paint", src: "/assets/pe.png" },
    { id: 3, label: "Gloss Enamel metallic paint", src: "/assets/en.png" },
  ];
  return (
    <Box sx={{ minHeight: "50vh", py: 5 }}>
      <Heading>Our Products</Heading>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: -3,
        }}
      >
        <Typography sx={{ width: "50vw", textAlign: "center" }}>
          We deal in all kind of interioir, exterior, metallic paints. All type
          of wooden polish material is also available.
          <strong>Quality is our first priority</strong>
        </Typography>
      </Box>
      <Grid2 container spacing={2} sx={{ px: 2, mt: 6 }}>
        {data.map((val, ind) => {
          return (
            <Grid2 key={ind} size={{ xs: 12, md: 4, lg: 3 }}>
              <ProductCard val={val} />
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
};

export default Products;
