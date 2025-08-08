import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from "./components/navbar.jsx";
import Beranda from "./pages/Beranda.jsx";
import Profil from "./pages/Profil.jsx";
import Usaha from "./pages/Usaha.jsx";
import Footer from './components/footer.jsx';
import Layanan from "./pages/Layanan.jsx";
import PerangkatDesa from "./pages/PerangkatDesa.jsx";
import PengaduanSaran from './pages/PengaduanSaran.jsx';
import BeritaDetail from './pages/BeritaDetail';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        {/* <PengaduanSaran /> */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/profil-desa" element={<Profil />} />
          <Route path="/Layanan" element={<Layanan />} />
          <Route path="/usaha-desa" element={<Usaha />} />
          <Route path="/perangkat-desa" element={<PerangkatDesa />} />
          {/* <Route path="/kontak" element={<Kontak />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;