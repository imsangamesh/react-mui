import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3.5);
  const handleChange = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} direction="row">
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        readOnly
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
