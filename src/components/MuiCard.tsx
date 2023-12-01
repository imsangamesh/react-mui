import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width={300}>
      <Card>
        <CardMedia
          component="img"
          height={140}
          image="https://source.unsplash.com/random"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            assumenda, nam obcaecati sequi natus quis. Corrupti incidunt
            inventore dicta quia.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
