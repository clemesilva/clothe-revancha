import { useState } from "react";
import CategoryItem from "./components/CategoryItem";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hombre from "./pages/Hombre";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<CategoryItem />} />
        <Route exact path="/hombre" element={<Hombre />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
