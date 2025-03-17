import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Player Management System 
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ mx: 1 }}
            activeClassName="active"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            sx={{ mx: 1 }}
            activeClassName="active"
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/dashboard"
            sx={{ mx: 1 }}
            activeClassName="active"
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/logout"
            sx={{ mx: 1 }}
            activeClassName="active"
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
