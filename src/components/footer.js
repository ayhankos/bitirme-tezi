import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListSubheader from "@mui/joy/ListSubheader";
import Divider from "@mui/joy/Divider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
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
          <LinkedInIcon />
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
            <ListSubheader sx={{ fontWeight: "xl" }}>Socials</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="https://www.linkedin.com/in/ayhaneminkos/"
                >
                  Linkedin
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="https://github.com/ayhankos"
                >
                  Github
                </ListItemButton>
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
            <ListSubheader sx={{ fontWeight: "xl" }}>Products</ListSubheader>
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
  );
};
export default Footer;
