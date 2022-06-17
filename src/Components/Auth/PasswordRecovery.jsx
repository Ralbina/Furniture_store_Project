import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { authContext, useAuth } from "../Context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigation } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userAdmin } from "../../helpers/const";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function PasswordRecovery() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirm: data.get("password_confirm"),
    });
  };

  const { user } = useAuth();

  const [activate_code, setActivate_code] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirm, setPassword_confirm] = React.useState("");
  const { register, error } = useAuth();

  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  function handleRegister(activate_code, password, password_confirm) {
    if (
      activate_code.trim() === "" ||
      password.trim() === "" ||
      password_confirm.trim() === ""
    ) {
      alertToastify();
    }

    register({ activate_code, password, password_confirm });
    alert("ok");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
            <LockOutlinedIcon color="string" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Password recovery
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            {error ? <Typography>{error}</Typography> : null}

            <TextField
              margin="normal"
              required
              fullWidth
              id="activate_code"
              label="activate_code"
              name="activate_code"
              autoComplete="activate_code"
              autoFocus
              onChange={(e) => setActivate_code(e.target.value)}
              value={activate_code}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirm"
              label="Password_confirm"
              type="password"
              id="password_confirm"
              autoComplete="current-password_confirm"
              onChange={(e) => setPassword_confirm(e.target.value)}
              value={password_confirm}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                handleRegister(password, password_confirm);
                navigate("/");
              }}
            >
              Change password
            </Button>

            {user.email === userAdmin ? (
              <NavLink className="nav-link" to="/add">
                <p variant="contained">Add Produts</p>
              </NavLink>
            ) : null}

            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
