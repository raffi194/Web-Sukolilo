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
        <Hero />
      </div>
    </>
  )
}

export default App