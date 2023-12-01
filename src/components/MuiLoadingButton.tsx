import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>

      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}>
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        loading
        startIcon={<SaveIcon />}>
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
