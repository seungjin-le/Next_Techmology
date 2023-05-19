"use client";

import { PageLayoutProps } from "lodash";
import { Box, Container } from "@mui/material";
import ImageBtn from "components/images/ImageBtn";

const MainBanner = ({ children }: PageLayoutProps) => {
  return (
    <Container
      className={
        "p-0 flex flex-col max-h-[38.5rem] h-full  bg-[#2B2835] w-[100%] relative"
      }
    >
      {children}
      <Box
        className={
          "absolute flex flex-row  h-full w-full items-center justify-center"
        }
      >
        <Box className={"flex-1"}>
          <img
            className={"absolute top-0 left-[0]"}
            src="productImages/headphones/bannerImage.png"
            alt=""
          />
        </Box>
        <Box className={"flex-1"}>
          <Box>Beats Studio3 Wireless</Box>
          <Box>Experince your music like never before</Box>
          <Box>
            <Box>$299.95</Box>
            <Box>BUY NOW</Box>
          </Box>
          <Box>
            $60 Apple Music gift card with purchase of select Beats products.*
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainBanner;
