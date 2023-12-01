import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => setFormats(updatedFormats);

  return (
    <Stack spacing={4}>
      {/* ------------------------- NORMAL BUTTONS */}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained" href="google.com">
          contained
        </Button>
      </Stack>

      {/* ------------------------- TEXXT COLOR BUTTONS */}
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>

      {/* ------------------------- OUTLINED COLOR BUTTONS */}
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      {/* ------------------------- CONTAINED COLOR BUTTONS */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      {/* ------------------------- SIZED COLOR BUTTONS */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* ------------------------- ICONS + BUTTONS */}
      <Stack spacing={2} direction="row">
        <Button
          startIcon={<SendIcon />}
          variant="contained"
          disableRipple
          onClick={() => alert("Clicked")}>
          Send
        </Button>
        <Button endIcon={<SendIcon />} variant="contained" disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* ------------------------- BUTTONGROUP */}
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* ------------------------- TOGGLEGROUP BUTTONS */}
      <Stack direction="row">
        <ToggleButtonGroup
          size="small"
          color="warning"
          orientation="vertical"
          aria-label="text formatting"
          value={formats}
          exclusive
          onChange={handleFormatChange}>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
