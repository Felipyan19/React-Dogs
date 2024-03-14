import React, { useEffect } from "react";
import Navbar from "../../Component/Navbar";
import { images } from "../../images";
import { Element } from "react-scroll";
import DogCard from "./../../Component/Card/index";
import Footer from "./../../Component/Footer/index";

const Hembras = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "60px auto" }} className="cards">
        {images.map(
          (dog) =>
            dog.genero === "Hembra" && (
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

export default Hembras;
