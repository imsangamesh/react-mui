import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width={250} textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
