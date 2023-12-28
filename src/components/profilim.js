import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Profilim() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profilim
      </Typography>

      <Divider sx={{ marginBottom: 2 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Kullanıcı Bilgileri
            </Typography>
            <Typography variant="body1">
              Ad: John Doe
              <br />
              E-posta: john@example.com
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
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
  );
}

export default Profilim;
