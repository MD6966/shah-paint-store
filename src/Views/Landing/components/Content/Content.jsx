import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ToastComp from "../../../../components/toast/ToastComp";
import { request } from "../../../../services/axios";
import { IoMdCall } from "react-icons/io";
import ButtonComp from "../../../../components/Button/ButtonComp";
const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
}));

const Content = () => {
  const handleToast = () => {
    ToastComp({
      variant: "success",
      message: "This is success message",
    });
  };

  const handleRequest = async () => {
    const resp = await request({
      url: `/sport/coaches/id`,
      method: "post",
    });
  };
  const isLarge = useMediaQuery("(max-width:900px)");
  const isMd = useMediaQuery("(max-width:700px)");
  const isSmall = useMediaQuery("(max-width:400px)");
  return (
    <StyledRoot>
      <Box
        sx={{
          position: "relative",
          backgroundImage: !isLarge
            ? "url(/assets/bg.webp)"
            : "url(/assets/bg2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Box sx={{ width: !isMd ? "700px" : "600px", mt: 20 }}>
            <Typography
              variant={isSmall ? "h4" : "h3"}
              sx={{ fontWeight: "bold" }}
            >
              Beautiful Interior & Exterior Painting Solution
            </Typography>
            <Box sx={{ px: isSmall ? 2 : "", textAlign: "center" }}>
              <Typography sx={{ mt: 3 }}>
                Transform your home or office with our expert painting services.
                Whether you're looking to refresh your interior spaces or give
                your exterior a stunning new look, our team is dedicated to
                providing high-quality, professional results. With a wide range
                of color options and finishes, we bring your vision to life,
                ensuring long-lasting beauty and durability. Let us enhance your
                space with precision and care, making every brushstroke count.
              </Typography>
            </Box>
            <ButtonComp
              endIcon={<IoMdCall />}
              sx={{
                mt: 5,
              }}
            >
              Call Now
            </ButtonComp>
          </Box>
        </Box>
      </Box>
    </StyledRoot>
  );
};

export default Content;
