import MailIcon from "@mui/icons-material/Mail";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const MuiList = () => {
  return (
    <Box sx={{ width: 400, bgcolor: "#EFEFEF" }}>
      <List>
        {[1, 2, 3, 4, 5].map((each) => (
          <Box>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`List Item ${each}`}
                secondary={`Secondary Text ${each}`}
              />
            </ListItemButton>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default MuiList;
