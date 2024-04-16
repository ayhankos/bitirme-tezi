import React, { useState, useEffect } from "react";
import MyNavbar from "./appbar";
import Footer from "./footer";
import { useHistory } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Container } from "@mui/material";

const Profilim = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:3001/user_profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await response.json();

        setUserInfo(data);

        if (response.status !== 200) {
          console.error("Kullanıcı bilgileri alınamadı.");
        }
      } catch (error) {
        console.error("Kullanıcı bilgileri alınırken bir hata oluştu: ", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleClickLogo = () => {
    history.push("/main");
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Profilim
          </Typography>
        </Container>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
            maxWidth: "1000px",
            margin: "0 auto", // Ortalamak için
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center", // Merkezde hizalamak için
            }}
          >
            <Card
              orientation="horizontal"
              sx={{
                flexBasis: "100%", // Kullanılabilir alanı kapla
                maxWidth: "100%", // Kullanılabilir alanı kapla
              }}
            >
              <AspectRatio
                flex
                ratio="1"
                maxHeight={182}
                sx={{ minWidth: 182 }}
              >
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHyF6IQWEqDPw/profile-displayphoto-shrink_800_800/0/1652908007347?e=1718841600&v=beta&t=sljmsQsSRqqMla1e1R7zKTwJg0IMK39MYOHZdOY7RzY"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent>
                <Typography fontSize="xl" fontWeight="lg">
                  {userInfo?.firstName} {userInfo?.lastName}
                </Typography>
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  {userInfo?.email}
                </Typography>
                <Sheet
                  sx={{
                    bgcolor: "background.level1",
                    borderRadius: "sm",
                    p: 1.5,
                    my: 1.5,
                    display: "flex",
                    gap: 2,
                    "& > div": { flex: 1 },
                  }}
                >
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Yaş
                    </Typography>
                    <Typography fontWeight="lg">23</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Okul
                    </Typography>
                    <Typography fontWeight="lg">Bandırma</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Takipçi
                    </Typography>
                    <Typography fontWeight="lg">100</Typography>
                  </div>
                </Sheet>
                <Box
                  sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
                >
                  <Button variant="outlined" color="neutral">
                    Chat
                  </Button>
                  <Button variant="solid" color="primary">
                    Follow
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Profilim;
