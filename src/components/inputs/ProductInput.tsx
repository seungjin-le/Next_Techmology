import React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "600px",
};

const ProductInput = ({
  handleOpen,
  handleClose,
  product,
  onChange,
  showModal,
  formData,
  addProjects,
}) => {
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            required
            id={"productId"}
            label={"productId"}
            onChange={onChange}
            value={product.productId || ""}
          />
          <TextField
            required
            id={"productName"}
            label={"productName"}
            onChange={onChange}
            value={product.productName || ""}
          />
          <TextField
            required
            id={"description"}
            label={"description"}
            onChange={onChange}
            value={product.description || ""}
          />
          <TextField
            required
            id={"price"}
            label={"price"}
            onChange={onChange}
            value={product.price || ""}
          />
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              hidden
              onChange={({ target: { files } }) => {
                if (files.length > 0) {
                  const file = files[0];
                  formData.append("productImage", file);
                }
              }}
              id={"productImage"}
              accept="image/gif,image/jpeg,image/jpg,image/png"
            />
          </Button>
          <Button
            variant="contained"
            component="label"
            onClick={() => addProjects()}
          >
            Add Product
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductInput;
