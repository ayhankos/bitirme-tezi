import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "./colors";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MyNavbar from "./appbar";
import Footer from "./footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ResponsiveAppBar() {
  return (
    <Box sx={{}}>
      <MyNavbar />
      <>
        <Box
          component="div"
          p={20}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-53266.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Hoş Geldiniz .</h1>
              <p>
                Topluluğunuzun paylaşımlarını yapmak, biletlerini satmak,
                kimlerin üye olduğunu görmek bizi kullanabilirsiniz.
              </p>
            </Grid>
          </Grid>
        </Box>
      </>
      <>
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
                Etkinliklerimiz
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
                    alt="Live from space album cover"
                  />
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
                    alt="Live from space album cover"
                  />
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
                    alt="Live from space album cover"
                  />
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
                    alt="Live from space album cover"
                  />
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"
                    alt="Live from space album cover"
                  />
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
      <Footer />
    </Box>
  );
}

export default ResponsiveAppBar;
