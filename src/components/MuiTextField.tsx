import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      {/* ---------------------------------- GENERAL */}
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* ---------------------------------- COLOR & SIZE */}
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      {/* ---------------------------------- PROPS */}
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required error />
        <TextField
          disabled
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* ---------------------------------- ADORNMENTS */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* ---------------------------------- REAL TIME */}
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value}
        helperText={
          !value ? "Required!" : "Do not share your password with anyone"
        }
      />
    </Stack>
  );
};

export default MuiTextField;
