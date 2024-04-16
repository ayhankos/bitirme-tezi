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

const Topluluklar = () => {
  const history = useHistory();
  const [communities, setCommunities] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar durumu

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    try {
      const response = await fetch("http://localhost:3001/communities");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCommunities(data);
    } catch (error) {
      console.error("There was a problem fetching Communities:", error);
    }
  };

  const handleClickLogo = () => {
    history.push("/main");
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
            {communities.map((Communities, index) => (
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
                      image={Communities.imageUrl}
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
                        {Communities.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {Communities.detail}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary">
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
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />

      <Footer />
    </>
  );
};

export default Topluluklar;
