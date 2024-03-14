import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from '../../Component/Navbar';
import Carrousel from '../../Component/Carrousel';
import DogCard from '../../Component/Card';
import Footer from '../../Component/Footer';
import { images } from '../../images'; 
import { saveInLocalStorage, getFromLocalStorage } from '../../utils/LocalStorage';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PetsIcon from "@mui/icons-material/Pets";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
  const [activeCard,  setActiveCard] = React.useState(null);
  const [dataImg, setDataImg] = React.useState([]);

  useEffect(() => {
    const localStorageData = getFromLocalStorage('data');
    if (localStorageData !== undefined) {
      setDataImg(localStorageData);
    } else {
      setDataImg(images); 
      saveInLocalStorage('data', images);
    }
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <Carrousel setActiveCard={setActiveCard} />
      <div style={{ margin: '40px auto' }} className='cards'>
      {dataImg.map((dog) => (
        <Element name={`dog-card-${dog.id}`} key={dog.id}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <DogCard
              id={dog.id}
              isActive={activeCard}
              setActiveCard={setActiveCard}
              {...dog}
            />
          </div>
        </Element>
      ))}
      </div>
      <Box sx={{ '& > :not(style)': { m: 2 } , position: 'fixed', bottom: 16, right: 16}}>
      <Tooltip title="Inscribir" arrow>
      <Fab color="primary" aria-label="add" onClick={() => navigate('/Inscribir')}>
        <AddIcon />
      </Fab>
      </Tooltip>
    </Box>
    <Box sx={{ '& > :not(style)': { m: 2 } , position: 'fixed', bottom: 16, left: 16}}>
    <Tooltip title="Adoptar" arrow>
      <Fab color="primary" aria-label="add" onClick={() => navigate('/Adoptar')}>
      <PetsIcon />
      </Fab>
      </Tooltip>
    </Box>
      
      <Footer />
    </div>
  );
};

export default Home;
