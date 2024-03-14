import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import { images } from "../../images";
import { Element } from "react-scroll";
import DogCard from "./../../Component/Card/index";
import Footer from "./../../Component/Footer/index";
import {
  saveInLocalStorage,
  getFromLocalStorage,
} from "../../utils/LocalStorage";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Adoptar = () => {
  const [dataImg, setDataImg] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const localStorageData = getFromLocalStorage("data");
    if (localStorageData !== undefined) {
      setDataImg(localStorageData);
    } else {
      setDataImg(images);
      saveInLocalStorage("data", images);
    }
  }, []);

  useEffect(() => {
    if (searchValue === "" || searchValue === null) {
      setFilteredData(dataImg);
    } else {
      setFilteredData(
        dataImg.filter((dog) =>
          dog.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, dataImg]);

  return (
    <div>
      <Navbar />

      <div
        style={{
          margin: "80px auto",
          width: "70%",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="cards"
      >
        <Autocomplete
          sx={{ width: 300, backgroundColor: "white" }}
          value={searchValue}
          onChange={(event, newValue) => {
            setSearchValue(newValue);
          }}
          inputValue={searchValue}
          onInputChange={(event, newInputValue) => {
            setSearchValue(newInputValue);
          }}
          options={dataImg.map((dog) => dog.name)}
          renderInput={(params) => (
            <TextField {...params} label="Buscar por nombre" />
          )}
        />
      </div>
      <div style={{ maxHeight: "100vh", overflowY: "auto", marginBottom: "4%" , width: "85%" }}>
        <div style={{ maxHeight: "100%", overflowY: "auto", marginLeft: "20%" }}>
          {filteredData.map((dog) => (
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adoptar;
