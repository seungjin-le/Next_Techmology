"use client";

import { Box, Container } from "@mui/material";

import React from "react";
import ImageBtn from "components/images/ImageBtn";
import HeaderUserIcons from "components/lists/users/HeaderUserIcons";

const MainHeader = () => {
  const mainPageCategories = ["HEADPHONES", "EARPHONES", "SPEAKERS", "EXPLORE"];

  return (
    <Container
      className={
        "bg-[rgb(25,23,32,0.5)] px-24 max-h-[78px] h-full flex items-center z-[3]"
      }
    >
      <Box
        className={"flex justify-space max-h-[50px]  w-full items-center"}
        sx={{
          opacity: 1,
        }}
      >
        <ImageBtn src={"/logo.png"} alt={"Logo"} size={50} />
        <Box
          sx={{
            flexGrow: 1,
            display: { sm: "flex", xs: "none" },
            justifyContent: "center",
          }}
          className={"h-full max-h-[50px]"}
        >
          {mainPageCategories?.map((page) => (
            <button
              className={
                "text-[#fff] border-b-2 border-transparent mx-5 hover:border-current h-full"
              }
              key={page}
            >
              {page}
            </button>
          ))}
        </Box>
        <Box className={"h-full max-h-[50px] flex flex-row items-center "}>
          <HeaderUserIcons />
        </Box>
      </Box>
    </Container>
  );
};

export default MainHeader;
