import React, { useEffect, useState } from "react";
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
  Modal,
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
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState(""); // Kullanıcı kimliği
  const [successModalOpen, setSuccessModalOpen] = useState(false); // Başvuru başarılı modalinin açık olup olmadığını belirleyen state

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
      const origin = window.location.origin; // İstemcinin adresini alın
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
        // Başvuru başarılı olduğunda modalı aç
        setSuccessModalOpen(true);
      } else {
        console.error("Başvuru başarısız:", data.error);
      }
    } catch (error) {
      console.error("Başvuru sırasında bir hata oluştu:", error);
    }
  };

  const handleCloseSuccessModal = () => {
    // Modalı kapat
    setSuccessModalOpen(false);
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />

      <Box
        sx={{
          width: "100%",
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: theme.palette.secondary.main,
          padding: theme.spacing(1),
        }}
      >
        <Grid container spacing={2}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Item sx={{ border: 0.5, borderRadius: 2 }}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.imageUrl}
                    alt={`Etkinlik ${index + 1} görseli`}
                  />
                  <CardContent sx={{}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.detail}
                    </Typography>
                  </CardContent>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ paddingBottom: 1.5 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleApplyEvent(event.id, userId)} // handleApplyEvent fonksiyonuna tıklama olayını bağlama
                    >
                      Başvuru Yap
                    </Button>
                  </Box>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />

      {/* Başvuru başarılı olduğunda gösterilecek modal */}
      <Modal
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            bgcolor: "#fff",
            boxShadow: 24,
            border: "1px solid",
            borderRadius: "3rem",
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" id="modal-modal-title" gutterBottom>
            Başvuru Başarılı!
          </Typography>
          <Button
            onClick={handleCloseSuccessModal}
            variant="contained"
            color="primary"
          >
            Onay
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Etkinlikler;
