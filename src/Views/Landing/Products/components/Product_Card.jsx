import React, { useState } from "react";
import { Card, CardMedia, Box, Avatar, Typography } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

const ProductCard = ({ val }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          transition: "0.3s",
          cursor: "pointer",
          position: "relative",
          background: "#F7F7F7",
          pt: 2,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            sx={{
              objectFit: "contain",
              width: "100%",
              transition: "transform 0.3s ease-in-out",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
            image={val.src}
            alt="product image"
          />
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateX(0)" : "translateX(100%)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#000",
                height: "30px",
                width: "30px",
              }}
            >
              <FaRegHeart color="white" size={15} />
            </Avatar>
            <Avatar
              sx={{
                backgroundColor: "#000",
                height: "30px",
                width: "30px",
              }}
            >
              <CiShare1 color="white" size={15} />
            </Avatar>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 2,
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isHovered
              ? "linear-gradient(to right, #af1975, violet)"
              : "transparent",
            transition: "background 0.3s ease",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(20px)",
            transition:
              "background 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <Typography
            sx={{
              color: isHovered ? "#fff" : "transparent",
              transition: "color 0.3s ease",
            }}
          >
            Add to Cart
          </Typography>
        </Box>
      </Card>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "24px",
          mt: 4,
          cursor: "pointer",
          transition: "color 0.3s ease",
          color: isHovered ? "#af1975" : "#000",
          "&:hover": {
            color: "#af1975",
          },
        }}
      >
        {val.label}
      </Typography>
    </Box>
  );
};

export default ProductCard;
