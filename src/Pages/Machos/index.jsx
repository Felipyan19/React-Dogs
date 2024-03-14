import React, { useEffect } from "react";
import Navbar from "../../Component/Navbar";
import { images } from "../../images";
import { Element } from "react-scroll";
import DogCard from "./../../Component/Card/index";
import Footer from "./../../Component/Footer/index";
import { saveInLocalStorage, getFromLocalStorage } from '../../utils/LocalStorage';

const Machos = () => {

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
      <div style={{ margin: "60px auto" }} className="cards">
        {dataImg.map(
          (dog) =>
            dog.genero === "Macho" && (
              <Element name={`dog-card-${dog.id}`} key={dog.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DogCard {...dog} />
                </div>
              </Element>
            )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Machos;
