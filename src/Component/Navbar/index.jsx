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
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";



const Navbar = styled(AppBar)(() => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: 0,
  width: "100%",
}));

function NavbarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState(""); // Estado para almacenar el valor de búsqueda
  const location = useLocation();
  const pages = ["Machos", "Hembras", "Registro"];
const [options, setOptions] = React.useState([
  "Labrador Retriever",
  "Golden Retriever",
  "Bulldog",
  "Pastor Alemán",
]); // Obtiene la ubicación actual del navegador

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchChange = (event, value) => {
    setSearchValue(value); // Actualiza el estado con el valor de búsqueda
  };

  return (
    <Navbar position="mobile">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PetsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DOGS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight:
                    location.pathname === `/${page}` ? "bold" : "normal",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Autocomplete
            className="ml-5 mb-2"
            //onChange={(event, newValue) => handleSearchChange(newValue)}
            options={options}
            size="small"
            omClick={() => console.log("clicked")}
            style={{ width: "17rem" ,zIndex: 10000 }}
            sx={{ zIndex: 10000, position: "relative" }}
            renderInput={(params) => <TextField {...params} label="Red" />}
          />
        </Toolbar>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
