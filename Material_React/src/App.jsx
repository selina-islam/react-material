import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Presentation from './Components/Presentation';
import Slider from './Components/Slider';
import Vedio from './Components/Vedio';
import WorkPage from './Components/Time';
import BombArea from './Components/BombArea';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Slider />
      <Vedio />
      <WorkPage />
      <BombArea />
      <Blog />
      <Footer/>
    </>
  )
}

export default App
