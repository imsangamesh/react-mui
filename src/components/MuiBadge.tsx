import MailIcon from "@mui/icons-material/Mail";
import { Badge, Stack } from "@mui/material";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>

      <Badge badgeContent={0} color="warning" showZero>
        <MailIcon />
      </Badge>

      <Badge badgeContent={100} color="warning">
        <MailIcon />
      </Badge>

      <Badge badgeContent={100} color="warning" max={999}>
        <MailIcon />
      </Badge>

      <Badge variant="dot" color="warning" showZero>
        <MailIcon />
      </Badge>

      <Badge invisible>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
