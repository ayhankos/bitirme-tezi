import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import MyNavbar from "./appbar";
import Footer from "./footer";

const Hakkimizda = () => {
  const history = useHistory();

  const handleClickLogo = () => {
    history.push("/main");
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />

      <Container>
        <Box sx={{ width: "100%", marginTop: 5, marginBottom: 5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Neden Kommunity?
          </Typography>
        </Box>

        <Box sx={{ width: "100%", marginTop: 5, marginBottom: 5 }}>
          <Typography variant="body2" gutterBottom>
            Kommunity, insanların bir araya gelerek yeni şeyler öğrenmelerine,
            bağlantı kurmalarına ve büyümelerine yardımcı olan bir çevrimiçi
            topluluktur.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Kommunity'yi 2023 yılında, insanların birbirleriyle bağlantı
            kurmalarına ve ortak ilgi alanlarını paylaşmalarına yardımcı olacak
            bir platform yaratmak isteyen bir grup girişimci kurdu.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Kommunity, kullanıcılarına aşağıdakileri sunar:
          </Typography>
          <ul>
            <li>Birbirinden çeşitli konularda topluluklar</li>
            <li>Eğitici ve eğlenceli içerikler</li>
            <li>Birbirleriyle bağlantı kurma ve etkileşim kurma yolları</li>
          </ul>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Hakkimizda;
