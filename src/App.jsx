import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hembra from './Pages/Hembras';
import './App.css'


function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/Hembras" element={<Hembra />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App
