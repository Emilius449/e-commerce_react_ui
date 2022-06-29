import { Box } from "@mui/material";
import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsetter from "../components/Newsetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsetter />
      <Footer />
    </Box>
  );
};

export default Home;
