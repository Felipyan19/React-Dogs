import React, { useEffect } from "react";
import Navbar from "../../Component/Navbar";
import { images } from "../../images";
import { Element } from "react-scroll";
import DogCard from "./../../Component/Card/index";
import Footer from "./../../Component/Footer/index";
import { saveInLocalStorage, getFromLocalStorage } from '../../utils/LocalStorage';
import DogFormCard from "../../Component/Form";
const Inscribir = () => {

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
    <div>
      <Navbar />
      <DogFormCard />
      <Footer />
    </div>
  );
};

export default Inscribir;
