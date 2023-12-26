import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useHistory } from "react-router-dom";
import MyNavbar from "./appbar";
import Footer from "./footer";

const Hakkimizda = () => {
  const history = useHistory();
  const theme = useTheme();

  const handleClickLogo = () => {
    history.push("/main");
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />

      <Box
        sx={{
          backgroundImage: `url("https://wallpapers.com/images/hd/black-and-white-fenerbahce-n2u4qfe5a0776iei.jpg")`, // Arka plan resminin URL'si
          backgroundSize: "cover", // Resmi kutuya sığdırma
          backgroundPosition: "center", // Resmin ortalanması
          color: "#fff", // Yazı rengi
          padding: theme.spacing(4), // İçerik içindeki boşluk (örneğin, tema için varsayılan boşluk çarpanıyla çarpılabilir)
          borderRadius: theme.spacing(1), // Arka planın köşe yuvarlatma
          marginBottom: theme.spacing(4), // Box bileşenleri arasındaki boşluk
        }}
      >
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Neden KommuNex?
          </Typography>

          <Typography variant="body2" gutterBottom>
            KommuNex, insanların bir araya gelerek yeni şeyler öğrenmelerine,
            bağlantı kurmalarına ve büyümelerine yardımcı olan bir çevrimiçi
            topluluktur.
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url("https://wallpapers.com/images/hd/black-and-white-fenerbahce-n2u4qfe5a0776iei.jpg")`, // Arka plan resminin URL'si
          backgroundSize: "cover", // Resmi kutuya sığdırma
          backgroundPosition: "center", // Resmin ortalanması
          color: "#fff", // Yazı rengi
          padding: theme.spacing(4), // İçerik içindeki boşluk
          borderRadius: theme.spacing(1), // Arka planın köşe yuvarlatma
          marginBottom: theme.spacing(4), // Box bileşenleri arasındaki boşluk
        }}
      >
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Neden KommuNex?
          </Typography>

          <Typography variant="body2" gutterBottom>
            KommuNex, insanların bir araya gelerek yeni şeyler öğrenmelerine,
            bağlantı kurmalarına ve büyümelerine yardımcı olan bir çevrimiçi
            topluluktur.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Hakkimizda;
