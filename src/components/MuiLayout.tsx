import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ p: 2 }} elevation={4}>
      <Stack
        padding={2}
        border="1px solid"
        direction="row"
        spacing={2}
        divider={<Divider flexItem orientation="vertical" />}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": { backgroundColor: "primary.light" },
          }}>
          MuiLayout
        </Box>

        <Box
          display="flex"
          height="100px"
          width="100px"
          p={2}
          bgcolor="success.light"></Box>
      </Stack>

      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="success.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="warning.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>

      <Grid container my={4} spacing={2}>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="success.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="warning.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
