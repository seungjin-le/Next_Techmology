"use client";
import { OnChangeProps, onChangeProps, PageLayoutProps } from "lodash";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  ThemeProvider,
} from "@mui/material";
import MuiTheme from "components/styles/MuiTheme";
import React, { useState } from "react";
import axios from "axios";
import ProductInput from "../../inputs/ProductInput";

const PageLayout = ({ children }: PageLayoutProps) => {
  const [product, setProduct] = useState({
    productId: 0,
    productName: "",
    description: "",
    price: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const formData = new FormData();

  const addProjects = async () => {
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    await axios
      .post("http://localhost:4000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const onChange = ({ target: { id, value } }: OnChangeProps) => {
    console.log(formData);
    if (id === "productId" || id === "price") {
      setProduct({
        ...product,
        [id]: Number(value),
      });
    } else {
      setProduct({
        ...product,
        [id]: value,
      });
    }
  };
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <ThemeProvider theme={MuiTheme}>
      <Container className={"p-0 h-full w-full"}>{children}</Container>
      <ProductInput
        handleOpen={handleOpen}
        handleClose={handleClose}
        product={product}
        onChange={onChange}
        showModal={showModal}
        formData={formData}
        addProjects={addProjects}
      />
    </ThemeProvider>
  );
};

export default PageLayout;
