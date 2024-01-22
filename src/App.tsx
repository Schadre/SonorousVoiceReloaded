import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Podcast } from "./Pages";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
