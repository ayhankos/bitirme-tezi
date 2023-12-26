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
import MyNavbar from "./appbar";
import Footer from "./footer";
import { styled } from "@mui/material/styles";
import theme from "./colors";

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

  // Her etkinlik için özel bir URL belirtin
  const events = [
    {
      title: "Açık Hava Konseri",
      detail: "Etkinlik Detayları 1",
      imageUrl:
        "https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "DJ Partisi",
      detail: "Etkinlik Detayları 2",
      imageUrl:
        "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    // Diğer etkinlikler
    {
      title: "Etkinlik Başlığı 3",
      detail: "Etkinlik Detayları 3",
      imageUrl:
        "https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 4",
      detail: "Etkinlik Detayları 4",
      imageUrl:
        "https://images.pexels.com/photos/225238/pexels-photo-225238.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 5",
      detail: "Etkinlik Detayları 5",
      imageUrl:
        "https://images.pexels.com/photos/332688/pexels-photo-332688.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 6",
      detail: "Etkinlik Detayları 6",
      imageUrl:
        "https://images.pexels.com/photos/306088/pexels-photo-306088.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 7",
      detail: "Etkinlik Detayları 7",
      imageUrl:
        "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 8",
      detail: "Etkinlik Detayları 8",
      imageUrl:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 9",
      detail: "Etkinlik Detayları 9",
      imageUrl:
        "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 10",
      detail: "Etkinlik Detayları 10",
      imageUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 11",
      detail: "Etkinlik Detayları 11",
      imageUrl:
        "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Etkinlik Başlığı 12",
      detail: "Etkinlik Detayları 12",
      imageUrl:
        "https://images.pexels.com/photos/19524944/pexels-photo-19524944/free-photo-of-sanat-heykel-anit-kentsel.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

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
          {events.slice(0, 6).map((event, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Item>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "cover", maxHeight: 200 }}
                    image={event.imageUrl}
                    alt={`Etkinlik ${index + 1} görseli`}
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {event.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {event.detail}
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
          {events.slice(6).map((event, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Item>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "cover", maxHeight: 200 }}
                    image={event.imageUrl}
                    alt={`Etkinlik ${index + 7} görseli`}
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      {event.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {event.detail}
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
