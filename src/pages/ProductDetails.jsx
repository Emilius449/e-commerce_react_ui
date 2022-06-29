import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsetter from "../components/Newsetter";
import { productData } from "../data";
import { Add, Remove } from "@mui/icons-material";
const ProductDetails = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Announcement />
      <Navbar />
      <Container sx={{ py: 3 }}>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <Box sx={{ p: 4, bgcolor: "grey.300" }}>
              <img
                className="img-fluid"
                src={productData[0].imgSrc}
                alt="E Tech World"
              />
            </Box>
          </Grid>
          <Grid item md={8} sm={6} xs={12}>
            <Stack>
              <Typography variant="h4">Product Name</Typography>
              <Typography variant="h5" sx={{ py: 2 }}>
                55,000/= Tsh
              </Typography>
              <Rating value={2} readOnly />
              <Typography sx={{ mb: 4, mt: 2 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti eos, dolorum excepturi quia quisquam delectus soluta
                cupiditate, cumque laboriosam unde rerum fugit mollitia corporis
                distinctio repellat. Harum temporibus hic repellat!
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <div className="add-item">
                  <button>
                    <Remove />
                  </button>
                  <input value={0} />
                  <button>
                    <Add />
                  </button>
                </div>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "1px", width: "160px" }}
                >
                  ADD TO CART
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ mt: 4 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>DESCRIPTION</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>ADDITIONAL INFORMATION</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography>REVIEWS</Typography>
            <Typography color={"primary"} sx={{ ml: 1 }}>
              (1)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Newsetter />
      <Footer />
    </Box>
  );
};

export default ProductDetails;
