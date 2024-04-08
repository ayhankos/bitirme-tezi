import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Snackbar,
  Slide,
} from "@mui/material";
import MyNavbar from "./appbar";
import Footer from "./footer";
import { styled } from "@mui/material/styles";
import theme from "./colors";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CustomSnackbar = styled(Snackbar)(({ theme }) => ({
  "& .MuiSnackbarContent-root": {
    color: "#424242",
    backgroundColor: "#bdbdbd", // Snackbar arka plan rengini değiştir
  },
}));

const Etkinlikler = () => {
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState(""); // Kullanıcı kimliği
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar durumu
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar mesajı

  useEffect(() => {
    // Kullanıcı kimliğini al
    const userIdFromSession = sessionStorage.getItem("userId");
    setUserId(userIdFromSession);

    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/events");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("There was a problem fetching events:", error);
    }
  };

  const handleClickLogo = () => {
    history.push("/main");
  };

  const handleApplyEvent = async (eventId, userId) => {
    console.log(`Bearer ${localStorage.getItem("accessToken")}`);
    try {
      const origin = window.location.origin; // İstemcinin adresini al
      const response = await fetch("http://localhost:3001/apply_event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          audience: origin,
        },
        body: JSON.stringify({ eventId, userId }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Başvuru başarılı:", data.message);
        // Başvuru başarılı olduğunda Snackbar'ı aç
        setSnackbarMessage("Başvuru Başarılı!");
        setOpenSnackbar(true);
      } else {
        setSnackbarMessage("Daha önce bu etkinliğe başvurdunuz.");
        setOpenSnackbar(true);
        console.error("Başvuru başarısız:", data.error);
      }
    } catch (error) {
      console.error("Başvuru sırasında bir hata oluştu:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />

      <Box
        sx={{
          width: "100%",
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: theme.palette.primary.main,
          padding: theme.spacing(1),
        }}
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          <Grid container spacing={2}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={item}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      boxShadow: 6,
                      borderRadius: 6,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={event.imageUrl}
                      alt={`Etkinlik ${index + 1} görseli`}
                      sx={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.detail}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApplyEvent(event.id, userId)} // handleApplyEvent fonksiyonuna tıklama olayını bağlama
                        >
                          Başvuru Yap
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      <CustomSnackbar
        open={openSnackbar}
        autoHideDuration={3000} // 3 saniye sonra kapanacak
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />

      <Footer />
    </>
  );
};

export default Etkinlikler;
