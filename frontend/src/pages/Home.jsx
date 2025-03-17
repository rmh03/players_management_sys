import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to the Player Management System
      </Typography>
      <Typography variant="body1">
        Manage players, track performance, and analyze data efficiently.
      </Typography>
    </Container>
  );
};

export default Home;
