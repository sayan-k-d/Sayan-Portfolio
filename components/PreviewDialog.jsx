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
      <Box
        p={2}
        className="preview-frame"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h6">Sayan Kumar Das Resume</Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            display: "flex",
            overflow: "hidden",
            mt: 2,
            p: "8px",
          }}
        >
          <iframe
            src="https://drive.google.com/file/d/1b1S2xghxPv0KHj3ojGn4FYhJuHMikYMF/preview"
            width="80%"
            height="100%"
            title="Sayan Kumar Das Resume"
            style={{
              border: "none",
              marginTop: "16px",
              padding: "1rem",
              margin: "auto",
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Button
              onClick={handlePreviewClose}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
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
