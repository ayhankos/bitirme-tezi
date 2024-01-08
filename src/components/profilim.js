import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MyNavbar from "./appbar";
import Footer from "./footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import theme from "./colors";

const Profilim = ({ userInfo }) => {
  const history = useHistory();

  const handleClickLogo = () => {
    history.push("/main");
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profilim
        </Typography>

        <Divider sx={{ marginBottom: 2 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                padding: 2,
                height: "8rem",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Kullanıcı Bilgileri
              </Typography>
              <Typography variant="body1">
                Ad: {userInfo.firstName} {userInfo.lastName}
                <br />
                E-posta: {userInfo.email}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                padding: 2,
                height: "8rem",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Profil Ayarları
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginBottom: 1,
                  maxWidth: "20rem",
                  backgroundColor: theme.palette.text.main,
                }}
              >
                Profil Fotoğrafını Değiştir
              </Button>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "20rem",
                  backgroundColor: theme.palette.text.main,
                }}
              >
                Şifreyi Değiştir
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Profilim;
