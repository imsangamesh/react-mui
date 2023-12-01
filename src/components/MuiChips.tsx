import FaceIcon from "@mui/icons-material/Face";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

const MuiChips = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3", "Chip 4"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((currChips) => currChips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" icon={<FaceIcon />} />

      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />

      <Chip label="Click" color="success" onClick={() => alert("Clicked!")} />

      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked!")}
        onDelete={() => alert("Deleted!")}
      />

      {chips.map((chip) => (
        <Chip
          key={chip}
          color="warning"
          label={chip}
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default MuiChips;
