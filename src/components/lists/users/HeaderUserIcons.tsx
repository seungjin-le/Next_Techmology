import { Box } from "@mui/material";
import React from "react";
import ImageBtn from "components/images/ImageBtn";

const HeaderUserIcons = () => {
  const iconSrc: string[] = [
    "/icons/search.png",
    "/icons/profile.png",
    "/icons/buy.png",
  ];

  return (
    <Box className={"flex items-center justify-between  h-full max-h-[50px]"}>
      {iconSrc?.map((src: string, index: number) => {
        return <ImageBtn key={index} src={src} alt={src} size={25} />;
      })}
    </Box>
  );
};

export default HeaderUserIcons;
