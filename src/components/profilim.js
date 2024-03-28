import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MyNavbar from "./appbar";
import Footer from "./footer";
import { useHistory } from "react-router-dom";
import theme from "./colors";

const Profilim = () => {
  const history = useHistory();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
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

  const handleOpenPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    // Ek işlemler yapabilirsiniz, örneğin modal kapatıldığında newPassword'i temizleme
    setNewPassword("");
  };

  const handlePasswordChange = () => {
    // Şifre değiştirme işlemleri burada yapılabilir
    // newPassword state'ini kullanarak yeni şifreyi alabilirsiniz
    console.log("Yeni Şifre:", newPassword);
    // Şifre değiştirme işlemi tamamlandıktan sonra modal'ı kapatın
    handleClosePasswordModal();
  };

  return (
    <>
      <MyNavbar onClickLogo={handleClickLogo} />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profilim
        </Typography>

        <Divider sx={{ marginBottom: 2 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                padding: 2,
                height: "8rem",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Kullanıcı Bilgileri
              </Typography>
              <Typography variant="body1">
                Ad: {userInfo?.firstName} {userInfo?.lastName}
                <br />
                E-posta: {userInfo?.email}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                padding: 2,
                height: "8rem",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Profil Ayarları
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginBottom: 1,
                  maxWidth: "20rem",
                  backgroundColor: theme.palette.text.main,
                }}
                onClick={handleOpenPasswordModal}
              >
                Şifreyi Değiştir
              </Button>
              {/* Şifre değiştirme modal'ı */}
              {showPasswordModal && (
                <div>
                  <input
                    type="password"
                    placeholder="Yeni Şifre"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      marginBottom: 1,
                      maxWidth: "20rem",
                      backgroundColor: theme.palette.text.main,
                    }}
                    onClick={handlePasswordChange}
                  >
                    Şifreyi Kaydet
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      maxWidth: "20rem",
                      backgroundColor: theme.palette.text.main,
                    }}
                    onClick={handleClosePasswordModal}
                  >
                    İptal
                  </Button>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Profilim;
