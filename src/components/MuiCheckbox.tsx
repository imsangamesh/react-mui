import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

const MuiCheckbox = () => {
  const [value, setValue] = useState(false);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms & conditions"
          control={
            <Checkbox
              checked={value}
              onChange={(e) => setValue(e.target.checked)}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              value="html"
              label="HTML"
              control={<Checkbox />}
            />
            <FormControlLabel value="css" label="CSS" control={<Checkbox />} />
            <FormControlLabel
              value="javascript"
              label="JavaScript"
              control={<Checkbox />}
            />
          </FormGroup>
        </FormControl>
        <FormHelperText />
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
