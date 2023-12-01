import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Sandye",
    last_name: "McClay",
    email: "smcclay0@marriott.com",
    gender: "Female",
    ip_address: "201.107.81.33",
  },
  {
    id: 2,
    first_name: "Brandise",
    last_name: "Gooke",
    email: "bgooke1@imgur.com",
    gender: "Female",
    ip_address: "141.138.13.90",
  },
  {
    id: 3,
    first_name: "Nap",
    last_name: "Brereton",
    email: "nbrereton2@ftc.gov",
    gender: "Male",
    ip_address: "251.41.195.177",
  },
  {
    id: 4,
    first_name: "Tabbi",
    last_name: "Pottell",
    email: "tpottell3@myspace.com",
    gender: "Female",
    ip_address: "108.112.240.102",
  },
  {
    id: 5,
    first_name: "Rosabel",
    last_name: "Radbourne",
    email: "rradbourne4@mapquest.com",
    gender: "Female",
    ip_address: "99.95.86.176",
  },
  {
    id: 6,
    first_name: "Bond",
    last_name: "Sellner",
    email: "bsellner5@topsy.com",
    gender: "Male",
    ip_address: "186.75.5.244",
  },
  {
    id: 7,
    first_name: "Broderic",
    last_name: "Edinboro",
    email: "bedinboro6@icq.com",
    gender: "Male",
    ip_address: "50.9.65.55",
  },
  {
    id: 8,
    first_name: "Halimeda",
    last_name: "Jochanany",
    email: "hjochanany7@dagondesign.com",
    gender: "Female",
    ip_address: "254.113.23.103",
  },
  {
    id: 9,
    first_name: "Tildi",
    last_name: "Sinkin",
    email: "tsinkin8@livejournal.com",
    gender: "Female",
    ip_address: "41.27.174.155",
  },
  {
    id: 10,
    first_name: "Lane",
    last_name: "Birdsey",
    email: "lbirdsey9@chicagotribune.com",
    gender: "Female",
    ip_address: "250.81.37.49",
  },
];
