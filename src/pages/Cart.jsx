import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsetter from "../components/Newsetter";
import { SliderData } from "../data";

const Cart = () => {
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Container>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Shopping Cart
        </Typography>
        <Typography variant="h5">4 Items in Cart</Typography>
        <Divider />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item sm={12} md={8}>
            <Stack divider={<Divider />} spacing={2}>
              {SliderData.map((element) => (
                <Stack direction={{ sm: "column", md: "row" }} key={element.id}>
                  <Box sx={{ p: 0, width: "135px", mr: 2 }}>
                    <img
                      className="img-fluid"
                      src={element.imgSrc}
                      alt="Live from space album cover"
                    />
                  </Box>
                  <Stack sx={{ width: "100%" }}>
                    <Typography variant="subtitle1" component="p">
                      Live From Space
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      component="p"
                    >
                      {element?.description}
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      sx={{ mt: 1 }}
                    >
                      <Typography variant="body1">TZS 1,925,970</Typography>
                      <div className="add-item">
                        <button>
                          <Remove />
                        </button>
                        <input defaultValue={0} readOnly />
                        <button>
                          <Add />
                        </button>
                      </div>
                      <Rating value={3} readOnly></Rating>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <Card>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Typography sx={{ fontWeight: "bold" }} variant="body2">
                    Subtotal (4 items)
                  </Typography>
                  <Typography variant="body2">TZS 1,925,970</Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 1 }}
                >
                  <Typography sx={{ fontWeight: "bold" }} variant="body2">
                    Taxes
                  </Typography>
                  <Typography variant="body2">
                    Calculated at checkout
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Estimated total
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    TZS 1,925,970
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "1px",
                    width: "100%",
                    mt: 3,
                    letterSpacing: 2,
                  }}
                >
                  CHECKOUT
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Newsetter />
      <Footer />
    </Box>
  );
};

export default Cart;
