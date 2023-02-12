import { useEffect, useState } from 'react';
import './App.css'; 
import About from './Components/about';
import AboutMe from './Components/AboutMe';
import NavBar from './Components/NavBar';  

function App() {
  return (
    <div> 
      <div className='bg-black w-screen h-screen'>
        <NavBar/> 
        <About/>
      </div>
      <div className='bg-black w-screen h-screen'>
        <AboutMe /> 
      </div>
    </div>
  );
}

export default App;
