import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route,  } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
             
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element=<About /> />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
