import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid, Link, Divider, Snackbar } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material"; // Facebook ve Google ikonları
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const defaultTheme = createTheme();

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const data = await response.json();

      // Giriş başarılıysa yönlendirme yapabilirsiniz
      if (data.success) {
        localStorage.setItem("accessToken", data.token);
        setOpenSnackbarSuccess(true);
        setTimeout(() => {
          if (data.isAdmin) {
            history.push("/admin");
          } else {
            history.push("/main");
          }
        }, 1500);
      } else {
        setOpenSnackbarError(true);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setOpenSnackbarError(true);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <Avatar
              sx={{ m: "auto", bgcolor: "primary.dark", marginBottom: 1 }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Giriş Yap
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item textAlign="center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#3b5998",
                      color: "#3b5998",
                      textTransform: "none",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Facebook />
                      <span style={{ marginLeft: 8 }}>
                        Facebook ile giriş yap
                      </span>
                    </Box>
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#db4437",
                      color: "#db4437",
                      textTransform: "none",
                      marginLeft: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Google /> {/* İkon */}
                      <span style={{ marginLeft: 8 }}>
                        Google ile giriş yap
                      </span>
                    </Box>
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ mb: 2 }}>veya</Divider>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: "12px" }}
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ marginBottom: "24px" }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
              >
                Giriş Yap
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Hesabın yok mu? Kayıt ol!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Başarı Snackbar'ı */}
      <Snackbar
        open={openSnackbarSuccess}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbarSuccess(false)}
        message="Giriş Başarılı! Ana sayfaya yönlendiriliyorsunuz..."
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />

      {/* Hata Snackbar'ı */}
      <Snackbar
        open={openSnackbarError}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbarError(false)}
        message="Giriş Başarısız. Lütfen bilgilerinizi kontrol edin."
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />
    </ThemeProvider>
  );
};

export default SignIn;
