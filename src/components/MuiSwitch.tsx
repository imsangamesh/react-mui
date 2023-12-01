import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            size="small"
            color="secondary"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
