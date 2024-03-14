import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar, IconButton } from '@mui/material';
import { Pets as PetsIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

const DogCard = ({ id,isActive, name, breed, age, description, imageUrl, genero }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: 800,
        boxShadow: isActive===id ? '0 8px 16px 0 rgba(0, 0, 0, 0.2)' : '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        scale: isActive===id ? '1.1' : '1',
        transition: 'box-shadow 0.3s ease' + 'scale 0.3s ease',
        borderRadius: '10px',
        margin: '15px',
      }}
    >
      <Avatar variant="square" sx={{ width: 300, height: 400, borderRadius: '10px 0 0 10px' }} src={imageUrl} alt={name} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <PetsIcon color="primary" />
              <Typography variant="body1" color="text.primary">{breed}</Typography>
            </Grid>
            <Grid item xs={4}>
              <AccessTimeIcon color="primary" />
              <Typography variant="body1" color="text.primary">{age}</Typography>
            </Grid>
            <Grid item xs={4}>
              {genero === 'Macho' ? <MaleIcon color="primary" /> : <FemaleIcon color="primary" />}
              <Typography variant="body1" color="text.primary">{genero}</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
            {description}
          </Typography>
        </CardContent>
        <IconButton aria-label="adopt" sx={{ marginLeft: 'auto' }}>
          <PetsIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default DogCard;
