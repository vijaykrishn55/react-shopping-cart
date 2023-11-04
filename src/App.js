import React,{useState} from "react";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";






const App = () => {
 
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>

    </Routes>
    
   

    </BrowserRouter>
   
   
  );
};
export default App;
