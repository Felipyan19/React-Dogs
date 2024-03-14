import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  IconButton,
  Button,
  Modal,
  Box,
} from '@mui/material';
import {
  Pets as PetsIcon,
  AccessTime as AccessTimeIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
} from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { saveInLocalStorage, getFromLocalStorage } from '../../utils/LocalStorage';

const DogCard = ({ id, isActive, setActiveCard, name, breed, age, description, imageUrl, genero }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    const dataDog = getFromLocalStorage('data');
    saveInLocalStorage('data', dataDog.filter((dog) => dog.id !== id));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    //refresh la pagina
    window.location.reload();
  };

  return (
    <>
      <Card
        onMouseEnter={() => setActiveCard(id)}
        sx={{
          display: 'flex',
          width: '100%', // Responsive width
          maxWidth: 800, // Maximum width
          boxShadow: isActive === id ? '0 12px 20px 0 rgba(0,0,0,0.3)' : '0 6px 12px 0 rgba(0,0,0,0.1)',
          transform: isActive === id ? 'scale(1.05)' : 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          borderRadius: '10px',
          overflow: 'hidden',
          m: 2,
        }}
      >
        <Avatar
          variant="square"
          sx={{ width: 300, height: 350, objectFit: 'cover' }} // Make avatar take full height of card
          src={imageUrl}
          alt={name}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ my: 4 }}>
              {name}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <PetsIcon color="primary" />
                <Typography variant="body1" color="text.primary">
                  {breed}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <AccessTimeIcon color="primary" />
                <Typography variant="body1" color="text.primary">
                  {age}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {genero === 'Macho' ? <MaleIcon color="primary" /> : <FemaleIcon color="primary" />}
                <Typography variant="body1" color="text.primary">
                  {genero}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {description}
            </Typography>
          </CardContent>
          <Button
            startIcon={<FavoriteBorderIcon />}
            variant="contained"
            color="primary"
            sx={{ m: 2 }}
            onClick={handleOpenModal}
          >
            Adoptar
          </Button>
        </div>
      </Card>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¡Felicidades!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Has adoptado a {name}.
          </Typography>
          <img src={imageUrl} alt={name} style={{ maxWidth: '100%', marginTop: '10px' }} />
          <Button variant="contained" onClick={handleCloseModal} sx={{ mt: 2 }}>
            Aceptar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default DogCard;
