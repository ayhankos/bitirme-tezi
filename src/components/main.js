import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import theme from "./colors";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import MyNavbar from "./appbar";

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
      <>
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            borderRadius: { xs: 0, sm: "sm" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center the content horizontally
            justifyContent: "center", // Center the content vertically
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton variant="plain">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton variant="plain">
              <GitHubIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { md: "flex-start" },
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <List
              size="sm"
              orientation="horizontal"
              wrap
              sx={{
                flexGrow: 0,
                "--ListItem-radius": "18px",
                "--ListItem-gap": "0px",
                display: "flex", // Use flex display to enable flex properties on ListItem
              }}
            >
              <ListItem
                nested
                sx={{
                  width: { xs: "100%", md: "50%" }, // Set width to 100% for small screens and 50% for medium screens
                  display: "flex", // Enable flex properties
                  flexDirection: "column", // Center items vertically
                  justifyContent: "center", // Center items horizontally
                  alignItems: "center", // Center text within the ListItem
                }}
              >
                <ListSubheader sx={{ fontWeight: "xl" }}>Sitemap</ListSubheader>
                <List>
                  <ListItem>
                    <ListItemButton>Services</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Blog</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>About</ListItemButton>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem
                nested
                sx={{
                  width: { xs: "100%", md: "50%" }, // Set width to 100% for small screens and 50% for medium screens
                  display: "flex", // Enable flex properties
                  flexDirection: "column", // Center items vertically
                  justifyContent: "center", // Center items horizontally
                  alignItems: "center", // Center text within the ListItem
                }}
              >
                <ListSubheader sx={{ fontWeight: "xl" }}>
                  Products
                </ListSubheader>
                <List sx={{ "--ListItemDecorator-size": "32px" }}>
                  <ListItem>
                    <ListItemButton>Joy UI</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Base UI</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Material UI</ListItemButton>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Box>
        </Box>
      </>
    </Box>
  );
}

export default ResponsiveAppBar;
