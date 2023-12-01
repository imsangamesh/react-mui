import { Avatar, AvatarGroup, Stack } from "@mui/material";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={4}>
          {nums.map((e) => (
            <Avatar
              src={`https://randomuser.me/api/portraits/women/${e}.jpg`}
              alt="Jane Doe"
            />
          ))}
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 50, height: 50 }}>
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 50, height: 50 }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
