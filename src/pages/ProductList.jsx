import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsetter from "../components/Newsetter";
import Products from "../components/Products";

const ProductList = () => {
  const [filterby, setFilterBy] = React.useState("ALL");
  const [sortBy, setSortBy] = React.useState("");

  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Container sx={{ py: 3 }}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel id="filter-by-label">Filter By:</InputLabel>
              <Select
                labelId="filter-by-label"
                id="filter-by"
                value={filterby}
                label="Filter By"
                onChange={handleChange}
              >
                <MenuItem value={"ALL"}>All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel id="Sort-by-label">Sort By:</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={sortBy}
                label="Sort By"
                onChange={handleSortBy}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Popularity</MenuItem>
                <MenuItem value={20}>Latest</MenuItem>
                <MenuItem value={30}>Average rating</MenuItem>
                <MenuItem value={40}>Price: low to high</MenuItem>
                <MenuItem value={50}>Price: high to low</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      <Products />
      <Newsetter />
      <Footer />
    </Box>
  );
};

export default ProductList;
