import { useState } from 'react'
import "./styles/main.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home"
import Submit from  "./submit"
function App() {
  const optArr1 = ["option1", "option2", "option3"];
  const optArr2 = ["1", "2", "3", "4", "5"];
  const optArr3 = ["Row1", "Row2", "Row3"];

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submit' element={<Submit/>}/>
        </Routes>


      </Router>


    </>
  )
}

export default App
