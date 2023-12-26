import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import theme from "./colors";
import MyNavbar from "./appbar";
import Footer from "./footer";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Etkinlikler = () => {
  const history = useHistory();

  const handleClickLogo = () => {
    history.push("/main");
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />

      {/* İlk Etkinlik Bölümü */}
      <Box
        sx={{
          width: "100%",
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Etkinliklerimiz (Bölüm 1)
            </Typography>
          </Grid>

          {/* Etkinlik Kartları */}
          {[...Array(6)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Etkinlik Başlığı {index + 1}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Etkinlik Detayları {index + 1}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <Button variant="contained" color="primary">
                        Detayları Gör
                      </Button>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`https://example.com/event-${index + 1}-image.jpg`}
                    alt={`Etkinlik ${index + 1} görseli`}
                  />
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* İkinci Etkinlik Bölümü */}
      <Box
        sx={{
          width: "100%",
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Etkinliklerimiz (Bölüm 2)
            </Typography>
          </Grid>

          {/* Diğer etkinlik kartları */}
          {[...Array(6)].map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Etkinlik Başlığı {index + 7}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Etkinlik Detayları {index + 7}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <Button variant="contained" color="primary">
                        Detayları Gör
                      </Button>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`https://example.com/event-${index + 7}-image.jpg`}
                    alt={`Etkinlik ${index + 7} görseli`}
                  />
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Etkinlikler;
