import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Box sx={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <Stack spacing={2} sx={{ width: "700px" }}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <TextField
              fullWidth
              size="small"
              id="firstName"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              fullWidth
              size="small"
              id="lastName"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              fullWidth
              size="small"
              id="email"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              fullWidth
              size="small"
              id="password"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              fullWidth
              size="small"
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ width: "100%" }}>
          Register
        </Button>
      </Stack>
    </Box>
  );
};

export default Register;
