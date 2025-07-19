import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Beranda from "./pages/Beranda.jsx";
import Profil from "./pages/Profil.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;