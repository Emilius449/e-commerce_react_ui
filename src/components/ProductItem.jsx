import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box, Fab, Stack } from "@mui/material";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <Box>
      <div className="product-image-container">
        <img className="img-fluid" src={product.imgSrc} alt="E Tech World" />
        <div className="product-actions">
          <Stack direction="row" spacing={2}>
            <Fab size="medium">
              <ShoppingCartOutlined />
            </Fab>
            <Fab size="medium">
              <FavoriteBorderOutlined />
            </Fab>
            <Fab size="medium">
              <SearchOutlined />
            </Fab>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

export default ProductItem;
