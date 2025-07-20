import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Beranda from "./pages/Beranda.jsx";
import Profil from "./pages/Profil.jsx";
import Usaha from "./pages/Usaha.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil-desa" element={<Profil />} />
          {/* <Route path="/layanan" element={<Layanan />} /> */}
          <Route path="/usaha-desa" element={<Usaha />} />
          {/* <Route path="/perangkat-desa" element={<PerangkatDesa />} />
          <Route path="/kontak" element={<Kontak />} /> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;