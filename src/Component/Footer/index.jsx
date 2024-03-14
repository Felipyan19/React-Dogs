import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            ¡Adopta, no compres! Ayúdanos a darles un hogar a nuestros amigos
            de cuatro patas.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            ¿Necesitas ayuda? Contáctanos: example@example.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "right" }}>
            <IconButton href="https://www.facebook.com/" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com/" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton href="mailto:example@example.com">
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        &copy; 2024 Fundación para Perritos
      </Typography>
      <Typography variant="body2" align="center">
        <Link to="/voluntariado" style={{ color: "#fff", textDecoration: "underline" }}>
          Únete como voluntario
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
