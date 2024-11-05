import { Box, Button, Dialog, Typography } from "@mui/material";
import React from "react";

const PreviewDialog = ({ openPreview, handlePreviewClose }) => {
  return (
    <Dialog
      open={openPreview}
      onClose={handlePreviewClose}
      fullScreen
      maxWidth="md"
    >
      <Box p={2} className="preview-frame">
        <Typography variant="h6">Sayan Kumar Das Resume</Typography>
        <Box className="preview-content">
          <iframe
            src="https://drive.google.com/file/d/1b1S2xghxPv0KHj3ojGn4FYhJuHMikYMF/preview"
            width="80%"
            height="100%"
            title="Sayan Kumar Das Resume"
          />
          <Box className="close-button">
            <Button
              onClick={handlePreviewClose}
              variant="contained"
              color="primary"
            >
              Close Preview
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PreviewDialog;
