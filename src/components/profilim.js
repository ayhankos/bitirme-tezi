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

const Profilim = () => {
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
            <Paper elevation={6} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Kullanıcı Bilgileri
              </Typography>
              <Typography variant="body1">
                Ad: Ayhan Emin Kös
                <br />
                E-posta: ayhan@example.com
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Profil Ayarları
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginBottom: 1 }}
              >
                Profil Fotoğrafını Değiştir
              </Button>
              <Button variant="contained" color="secondary">
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
