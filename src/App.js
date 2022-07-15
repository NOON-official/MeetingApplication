import Header from './component/Header';
import Body1 from './component/body/Body1';
import Body2 from './component/body/Body2';
import Body3 from './component/body/Body3';
import Body4 from './component/body/Body4';
import Footer from './component/Footer';
import React,{useState} from "react";
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
 
 const Bootom=()=>{
  const location = useLocation().pathname;
  if (location==="/"){
    return
  }
  else{
    return( <Footer></Footer>)
  }
 }
  return (
    <div className="App">
       
      <BrowserRouter>
     
          <Header>
          </Header>
     <Routes>
            <Route path="/" element={<Body1/>}></Route>
            <Route path="Meeting2" element={<Body2/>}></Route>
            <Route path="Meeting3" element={<Body3/>}></Route>
            <Route path="Meeting4" element={<Body4/>}></Route>
           
     </Routes>
    <Bootom></Bootom>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
