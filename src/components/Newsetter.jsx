import { SendOutlined } from "@mui/icons-material";
import { Box, Fab, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Newsetter = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h4">News Letter</Typography>
        <Typography sx={{ my: 4 }}>
          “Success hinges less on getting everything right than on how you
          handle getting things wrong.” Michelle Russel
        </Typography>

        <Stack direction="row" justifyContent="center" alignItems="center">
          <input className="new-letter-input" />
          <Fab size="medium" sx={{ ml: "-48.5px" }} color="primary">
            <SendOutlined />
          </Fab>
        </Stack>
      </Container>
    </Box>
  );
};

export default Newsetter;
