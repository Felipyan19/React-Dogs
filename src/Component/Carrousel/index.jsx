import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ThemeProvider } from "@mui/material/styles";
import { images } from "../../images";
import theme from "../../Theme";
import { Link } from "react-scroll";
import { saveInLocalStorage, getFromLocalStorage } from '../../utils/LocalStorage';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carrousel({setActiveCard}) {

  const [dataImg, setDataImg] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  let maxSteps = dataImg.length;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const localStorageData = getFromLocalStorage('data');
    if (localStorageData !== undefined) {
      setDataImg(localStorageData);
    } else {
      setDataImg(images);
      saveInLocalStorage('data', images);
    }
    setLoading(false);
  }, []);


  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      return setActiveStep(0);
    }else{
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return setActiveStep(maxSteps - 1);
    }else{
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  if (loading) {
    // Si se está cargando, muestra un indicador de carga
    return <div>Cargando...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
<Box
  sx={{
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: 'hidden',
    padding: "0 0 0 0",
    margin: "0 0 0 0",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100vh", // Ajusta la altura máxima de la imagen al tamaño máximo de la pantalla
      background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,1) 100%), url(${dataImg[activeStep].imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
    },
  }}
>
        <Typography
          variant="h6"
          component="div"
          sx={{
            marginBottom: "20px",
            color: theme.palette.primary.contrastText,
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          {dataImg[activeStep]?.name }
        </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5000}
        >
          {dataImg?.map((step, index) => (
              <Link
              key={index}
              to={`dog-card-${index+1}`}
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
              onClick={() => setActiveCard(index+1)}
            >
            <div
              key={step.label}
              style={{ display: "flex", justifyContent: "center", alignItems: "center"}}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    maxHeight: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "overflow",
                  }}
                  src={step.imageUrl}
                  alt={step.name}
                />
              ) : null}
            </div>
            </Link>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{
            width: "50%",
            margin: "10px",
            background: "transparent",
            "& .MuiMobileStepper-dot": {
              width: "10px",
              height: "10px",
              borderRadius: "50%",
            },
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Siguiente
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              sx={{ color: theme.palette.primary.contrastText }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Atras
            </Button>
          }
        />
      </Box>
    </ThemeProvider>
  );
}

export default Carrousel;
