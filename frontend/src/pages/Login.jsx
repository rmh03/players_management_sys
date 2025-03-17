import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role); // Store role in local storage
        navigate("/dashboard");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error logging in");
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;