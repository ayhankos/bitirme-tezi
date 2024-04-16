import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MyNavbar from "./appbar";
import Footer from "./footer";
import { useHistory } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Profilim = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    // Profil sayfası yüklendiğinde, backend'den gerçek kullanıcı bilgilerini al
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:3001/user_profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Token'ı local storage'dan alabilirsiniz
          },
        });
        const data = await response.json();

        setUserInfo(data);

        if (response.status === 200) {
        } else {
          console.error("Kullanıcı bilgileri alınamadı.");
        }
      } catch (error) {
        console.error("Kullanıcı bilgileri alınırken bir hata oluştu: ", error);
      }
    };

    fetchUserInfo();
  }, []);

  console.log("array", userInfo);
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

        <Box
          sx={{
            width: "100%",
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              display: "block",
              width: "1px",
              bgcolor: "warning.300",
              left: "500px",
              top: "-24px",
              bottom: "-24px",
              "&::before": {
                top: "4px",
                display: "block",
                position: "absolute",
                right: "0.5rem",
                color: "text.tertiary",
                fontSize: "sm",
                fontWeight: "lg",
              },
              "&::after": {
                top: "4px",
                display: "block",
                position: "absolute",
                left: "0.5rem",
                color: "text.tertiary",
                fontSize: "sm",
                fontWeight: "lg",
              },
            }}
          />
          <Card
            orientation="horizontal"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              // make the card resizable for demo
              overflow: "auto",
              resize: "horizontal",
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={4}>
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHyF6IQWEqDPw/profile-displayphoto-shrink_800_800/0/1652908007347?e=1718841600&v=beta&t=sljmsQsSRqqMla1e1R7zKTwJg0IMK39MYOHZdOY7RzY"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <CardContent>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {userInfo?.firstName} {userInfo?.lastName}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.secondary"
                    gutterBottom
                  >
                    Üye
                  </Typography>
                  <Paper
                    sx={{
                      bgcolor: "background.level1",
                      borderRadius: "sm",
                      p: 1.5,
                      my: 1.5,
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography variant="body2" fontWeight="bold">
                          Articles
                        </Typography>
                        <Typography fontWeight="bold">34</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" fontWeight="bold">
                          Followers
                        </Typography>
                        <Typography fontWeight="bold">980</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" fontWeight="bold">
                          Rating
                        </Typography>
                        <Typography fontWeight="bold">8.9</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button variant="outlined" color="primary">
                      Sohbet
                    </Button>
                    <Button variant="contained" color="primary">
                      Takip Et
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Profilim;
