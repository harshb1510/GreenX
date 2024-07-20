import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import CropForm from "./pages/CropForm.jsx"; 
import FarmerDashboard from "./pages/FarmerDashboard.jsx";
import Temp from "./pages/temp.jsx";
import Test from "./pages/Test.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cropform" element={<CropForm />} />
          <Route path="/farmerdashboard" element={<FarmerDashboard />} />
          <Route path="/temp" element={<Temp />} />
            <Route path='/test' element={<Test />} />
          <Route path='/home' element={<Hero/>} />
          <Route path='/farmerdashboard' element={<FarmerDashboard/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
