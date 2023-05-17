import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

export default function MenuHeader() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Steven Reed
          </Typography>

          <Link
            className="header--title"
            component={RouterLink}
            to="/"
            underline="none"
            sx={{ color: "white", "&:hover": { color: "#A9DCF1" } }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Home
            </Typography>
          </Link>
          <Link
            className="header--title"
            component={RouterLink}
            to="/contact"
            underline="none"
            sx={{
              color: "white",
              paddingLeft: "50px",
              "&:hover": { color: "#A9DCF1" },
            }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Contact
            </Typography>
          </Link>
          <Link
            className="header--title"
            component={RouterLink}
            to="/plans"
            underline="none"
            sx={{
              color: "white",
              paddingLeft: "50px",
              "&:hover": { color: "#A9DCF1" },
            }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Plans
            </Typography>
          </Link>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#A9DCF1",
              }}
            >
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton component={RouterLink} to="/">
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={RouterLink} to="/contact">
                  <ListItemIcon>
                    <PhoneForwardedIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>

                <ListItemButton component={RouterLink} to="/plans">
                  <ListItemIcon>
                    <FitnessCenterIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Plans" />
                </ListItemButton>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
