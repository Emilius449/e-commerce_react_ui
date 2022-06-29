import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box sx={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <Stack spacing={2} sx={{ width: "350px" }}>
        <TextField size="small" id="email" label="Email" variant="outlined" />
        <TextField
          fullWidth
          size="small"
          id="password"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" sx={{ width: "100%" }}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
