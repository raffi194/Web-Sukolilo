import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero title1="Selamat Datang di" title2="Website Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
      </div>
    </>
  )
}

export default App