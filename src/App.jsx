import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../src/utils/ScrollToTop";
import Home from "./Pages/Home";
import Hembra from "./Pages/Hembras";
import Machos from "./Pages/Machos";
import Inscribir from "./Pages/Incribir";
import Adopar from "./Pages/Adoptar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hembras" element={<Hembra />} />
        <Route path="/Machos" element={<Machos />} />
        <Route path="/Inscribir" element={<Inscribir />} />
        <Route path="/Adoptar" element={<Adopar />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;