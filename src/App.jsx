import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Form from "./components/Form";
import Card from "./components/Card";

import './index.css'

function App() {
  const [telefone, setTelefone] = useState("");
  
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Card />
      <Form value={telefone} onChange={(event) => setTelefone(event.target.value)}/>
      <Footer />
    </>
  )
}
export default App
