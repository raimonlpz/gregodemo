import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./views/Home.jsx";
import AnimatedCursor from "react-animated-cursor";
import AudioViz from "./components/AudioViz.jsx";
import Agenda from "./views/Agenda.jsx";
import Film from "./views/Film.jsx";

function App() {
  return (
  <Router>
        <AnimatedCursor  color='173,216,230' />
        <Routes>
          <Route path="/film" exact element={<Film />} />
          <Route path="/agenda" exact element={<Agenda />} />
          <Route path="/" exact element={<Home />} />
        </Routes>

        <div className="audio-viz">
          <AudioViz />
        </div>

        <div className="frame">
          <img src="imgs/frame2.png" alt="Frame" />
        </div> 
  </Router>
  )
}

export default App;
