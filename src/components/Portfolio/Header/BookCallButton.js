import { Button, Dialog, DialogContent, Box } from "@mui/material";
import { useState } from "react";

const BookCallButton = ({ onClick }) => {


  return (
      <Button
        variant="contained"
        color="secondary"
        onClick={onClick} 
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontWeight: "bold",
          px: 3,
          py: 1.2,
          whiteSpace: "nowrap",
        }}
      >
        Book a Call
      </Button>
  );
};

export default BookCallButton;
