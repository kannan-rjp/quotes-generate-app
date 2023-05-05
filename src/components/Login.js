import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import { authService } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../service/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  // async function handleLogToken() {
  //   try {
  //     const data = await authService.getLogged({ email, password });
  //     if (data.status) {
  //       localStorage.setItem('user',email)
  //       localStorage.setItem('token', data.data.token)
  //       navigate('/home')
  //     }
  //   }
  //   catch (e) {
  //     console.log('error', e)
  //   }
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    auth.login({email,password});
    console.log(`Email: ${email}, Password: ${password}`);
    navigate('/home')
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          padding: 2,
        }}
      >
        <Typography align="center" fontSize='1.5rem'>Login</Typography>
        <form
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            marginTop: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 2,
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
