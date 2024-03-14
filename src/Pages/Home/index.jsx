import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import Navbar from '../../Component/Navbar';
import Carrousel from '../../Component/Carrousel';
import DogCard from '../../Component/Card';
import Footer from '../../Component/Footer';
import { images } from '../../images'; // Asegúrate de importar tu array de imágenes

const Home = () => {

  const [activeCard,  setActiveCard] = React.useState(null);

  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <Carrousel setActiveCard={setActiveCard} />
      <div style={{ margin: '40px auto' }} className='cards'>
      {images.map((dog) => (
        <Element name={`dog-card-${dog.id}`} key={dog.id}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <DogCard
              id={dog.id}
              isActive={activeCard}
              {...dog}
            />
          </div>
        </Element>
      ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
