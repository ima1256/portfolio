import { useState } from "react";
import { Dialog, DialogContent, Box } from "@mui/material"

const BookCallDialog = ({open, onClose}) => {

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent
        sx={{
          overflow: "hidden",
          padding: 0,
          height: "600px",
        }}
      >
        <Box sx={{ width: "100%", height: "100%" }}>
          <iframe
            src="https://calendly.com/imanolcondeimanol/20min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a Call"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog