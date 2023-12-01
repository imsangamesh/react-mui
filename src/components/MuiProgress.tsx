import { CircularProgress, LinearProgress, Stack } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="secondary" />
      <CircularProgress variant="determinate" value={75} color="secondary" />

      <LinearProgress color="secondary" />
      <LinearProgress variant="determinate" value={75} color="secondary" />
    </Stack>
  );
};

export default MuiProgress;
