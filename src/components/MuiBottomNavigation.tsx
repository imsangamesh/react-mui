import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  const pageText = value === 0 ? "Home" : value === 1 ? "Favorite" : "Profile";

  return (
    <>
      <Box height="100%" width="100%" bgcolor="pink">
        <Typography>{pageText}</Typography>
      </Box>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
        value={value}
        onChange={(e, newVal) => setValue(newVal)}
        showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  );
};

export default MuiBottomNavigation;
