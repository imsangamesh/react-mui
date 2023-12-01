import { colors, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import MuiResponsiveness from "./components/MuiResponsiveness";
// import MuiTabs from "./components/MuiTabs";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import MuiProgress from "./components/MuiProgress";
// import MuiDialog from "./components/MuiDialog";
// import MuiSnackbar from "./components/MuiSnackbar";
// import MuiAlert from "./components/MuiAlert";
// import MuiTable from "./components/MuiTable";
// import MuiTooltip from "./components/MuiTooltip";
// import MuiChips from "./components/MuiChips";
// import MuiList from "./components/MuiList";
// import MuiBadge from "./components/MuiBadge";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
// import MuiLink from "./components/MuiLink";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiImageList from "./components/MuiImageList";
// import MuiAccordian from "./components/MuiAccordian";
// import MuiCard from "./components/MuiCard";
// import MuiLayout from "./components/MuiLayout";
// import MuiAutoComplete from "./components/MuiAutoComplete";
// import MuiRating from "./components/MuiRating";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiSelect from "./components/MuiSelect";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";

const theme = createTheme({
  status: {
    danger: "#E53E3E",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordian /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChips /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiTabs /> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
