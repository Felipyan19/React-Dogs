import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PetsIcon from "@mui/icons-material/Pets";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

const pages = ["Hembras", "Machos", "Inscribir", "Adoptar"];

const Navbar = styled(AppBar)(() => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 999,
}));
function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Navbar position="mobile">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: location.pathname === `/` ? "2rem" : "1.5rem",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: location.pathname === `/` ? "bold" : "normal",
              fontSize: location.pathname === `/` ? "1.6rem" : "1.4rem",
            }}
          >
            DOGS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    navigate(`/${page}`);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: location.pathname === `/` ? "2rem" : "1.5rem",
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PetsIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              fontWeight: location.pathname === `/` ? "extrabold" : "normal",
              textShadow:
                location.pathname === `/`
                  ? "0 0 3px #000000, 0 0 5px #000000"
                  : "none",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: location.pathname === `/` ? "bold" : "normal",
              fontSize: location.pathname === `/` ? "1.6rem" : "1.4rem",
            }}
          >
            DOGS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  navigate(`/${page}`);
                  handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight:
                    location.pathname === `/${page}` ? "bold" : "normal",
                  textShadow:
                    location.pathname === `/${page}`
                      ? "0 0 3px #000000, 0 0 5px #000000"
                      : "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
