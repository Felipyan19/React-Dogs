import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PetsIcon from "@mui/icons-material/Pets";
import CategoryIcon from "@mui/icons-material/Category";
import CakeIcon from "@mui/icons-material/Cake";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { saveInLocalStorage, getFromLocalStorage } from '../../utils/LocalStorage';
import Inscribir from './../../Pages/Incribir/index';

const DogFormCard = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [img, setImg] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOpen();
    console.log("Nombre:", name);
    console.log("Raza:", breed);
    console.log("Edad:", age);
    console.log("Género:", gender);
    console.log("Imagen:", img);
    console.log("Descripción:", descripcion);

    const localStorageData = getFromLocalStorage('data');
    console.log(localStorageData);
    if (localStorageData !== undefined) {
        localStorageData.push({
            id : localStorageData.length + 1,
            name: name,
            breed: breed,
            age: age,
            genero: gender,
            imageUrl: img,
            description: descripcion
        })
        console.log(localStorageData);
        saveInLocalStorage('data', localStorageData)
    } else {
        saveInLocalStorage('data', [{
            name: name,
            breed: breed,
            age: age,
            gender: gender,
            img: img,
            description: descripcion
        }])
    }
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 500,
        margin: "8% auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Agregar Perro
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Raza"
            variant="outlined"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Edad"
            variant="outlined"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            select // Campo de selección
            label="Género"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            <MenuItem value="Macho">Macho</MenuItem>
            <MenuItem value="Hembra">Hembra</MenuItem>
          </TextField>
          <TextField
            label="Url Img"
            variant="outlined"
            value={img}
            onChange={(event) => setImg(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Descripción"
            variant="outlined"
            type="number"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
            fullWidth
            margin="normal"
            multiline
            maxRows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Inscribir
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card
              sx={{
                maxWidth: 400,
                m: "auto",
                p: 2,
                position: "relative",
                mt: 2,
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" component="h2" gutterBottom>
                <PetsIcon sx={{ mr: 1, verticalAlign: "bottom" }} />
                Datos del Perro
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", mt: 2 }}
              >
                <CategoryIcon sx={{ mr: 1, color: "primary.main" }} />
                Nombre: {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                <CategoryIcon sx={{ mr: 1, color: "primary.main" }} />
                Raza: {breed}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                <CakeIcon sx={{ mr: 1, color: "secondary.main" }} />
                Edad: {age}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                {gender === "male" ? (
                  <MaleIcon sx={{ mr: 1, color: "info.main" }} />
                ) : (
                  <FemaleIcon sx={{ mr: 1, color: "error.main" }} />
                )}
                Género: {gender === "male" ? "Macho" : "Hembra"}
              </Typography>
              <img
                src={img}
                alt="Perro"
                style={{ maxWidth: "100%", height: "auto", marginTop: 10 }}
              />
              <Typography variant="body1" style={{ marginTop: 10 }}>
                Descripción: {descripcion}
              </Typography>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Cerrar
              </Button>
            </Card>
          </Modal>
        </form>
      </CardContent>
    </Card>
  );
};

export default DogFormCard;
