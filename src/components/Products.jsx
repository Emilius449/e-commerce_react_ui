import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { productData } from "../data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <Box sx={{ py: 4, bgcolor: "grey.200" }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Products
        </Typography>
        <Grid container spacing={{ xs: 2 }} columns={{ sm: 6, md: 12 }}>
          {productData.map((product) => (
            <Grid item sm={3} md={4} key={product.id}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
