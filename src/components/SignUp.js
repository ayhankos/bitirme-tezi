import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid, Link, Divider, Snackbar, Slide } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material"; // Facebook ve Google ikonları
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const defaultTheme = createTheme();

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email || !password) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    // Parola en az 6 karakterden oluşmalıdır
    if (password.length < 6) {
      alert("Parola en az 6 karakter olmalıdır.");
      return;
    }

    // Tüm alanların doldurulduğundan emin olun

    // Eposta doğrulaması
    if (!emailPattern.test(email)) {
      alert("Geçersiz eposta adresi.");
      return;
    }

    try {
      // Kayıt işlemi
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();

        if (data.success) {
          setOpenSnackbarSuccess(true);
          setTimeout(() => {
            history.push("/sign-in");
          }, 1500);
        } else {
          console.error("Kayıt başarısız: ", data.message);
          setOpenSnackbarError(true);
        }
      } else {
        console.error(
          "Kayıt işlemi sırasında bir hata oluştu: ",
          response.status
        );
        alert("Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu: ", error.message);
      alert("Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.");
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
              Kayıt Ol
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
                        Facebook ile kayıt ol
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
                      <Google />
                      <span style={{ marginLeft: 8 }}>Google ile kayıt ol</span>
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
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ marginBottom: "12px" }}
              />
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{ marginBottom: "12px" }}
              />
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
                autoComplete="new-password"
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
                Kayıt Ol
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/sign-in" variant="body2">
                    Zaten bir hesabın var mı? Giriş yap!
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
        TransitionComponent={Slide}
        message="Kayıt Başarılı! Giriş yap sayfasına yönlendiriliyorsunuz..."
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />

      {/* Hata Snackbar'ı */}
      <Snackbar
        open={openSnackbarError}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbarError(false)}
        TransitionComponent={Slide}
        message="Kayıt Başarısız! Lütfen tekrar deneyiniz."
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />
    </ThemeProvider>
  );
};

export default SignUp;
