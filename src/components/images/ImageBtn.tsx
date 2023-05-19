import { ImageProps } from "lodash";
import { Button } from "@mui/material";
import React from "react";

const ImageBtn = ({ src, alt, size }: ImageProps) => {
  return (
    <Button className={`p-0 max-w-[${size}] max-h-[${size}]`}>
      <img src={src} alt={alt} style={{ width: size, height: size }} />
    </Button>
  );
};

export default ImageBtn;
