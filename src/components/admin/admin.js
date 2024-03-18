import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import AdminNavbar from "./AdminNavbar"; // Dosya adı ve bileşen adı uyumlu olmalıdır.

const Admin = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const history = useHistory();

  const handleSaveEvent = async () => {
    try {
      const response = await fetch("http://localhost:3001/addEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          detail,
          imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Etkinlik başarıyla eklendiyse, etkinlikler sayfasına yönlendir
      history.push("/etkinlikler");
    } catch (error) {
      console.error("There was a problem adding event:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEvent();
  };

  return (
    <>
      <AdminNavbar /> {/* Değiştirildi */}
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" gutterBottom>
            Etkinlik Ekle
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Etkinlik Başlığı"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="detail"
              label="Etkinlik Detayları"
              name="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="imageUrl"
              label="Görsel URL"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Etkinliği Kaydet
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Admin;
