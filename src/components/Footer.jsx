import styled from "@emotion/styled";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  WhatsApp,
  Phone,
  MapOutlined,
  GitHub,
} from "@mui/icons-material";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
const SocialMedia = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: none;
  color: white;
  cursor: pointer;
  /* display: grid;
  place-content: center; */
`;
const Footer = () => {
  return (
    <Box sx={{ py: 4, bgcolor: "grey.200" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Site Name
            </Typography>
            <Typography>
              “There is only one person who could ever make you happy, and that
              person is you.” David Burns
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <SocialMedia color="#3B5999">
                <Facebook />
              </SocialMedia>
              <SocialMedia color="#E4405F">
                <Instagram />
              </SocialMedia>
              <SocialMedia color="#55ACEE">
                <Twitter />
              </SocialMedia>
              <SocialMedia color="#E60023">
                <Pinterest />
              </SocialMedia>
              <SocialMedia color="#25D366">
                <WhatsApp />
              </SocialMedia>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Useful links
            </Typography>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                textDecorationLine: "none",
              }}
            >
              <GitHub sx={{ mr: 1 }} />
              Github
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Contants
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MapOutlined />
              <Typography>Location</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Phone />
              <Typography>Phone Number</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailOutlined />
              <Typography>Email</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
