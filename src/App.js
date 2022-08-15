import Header from './component/Header';
import Body1 from './component/body/Body1';
import Body2 from './component/body/Body2';
import Body3 from './component/body/Body3';
import Body4 from './component/body/Body4';
import Body5 from './component/body/Body5';
import Body6 from './component/body/Body6';
import Body7 from './component/body/Body7';
import Body8 from './component/body/Body8';
import Body9 from './component/body/Body9';
import Body10 from './component/body/Body10';
import Body11 from './component/body/Body11';
import Body12 from './component/body/Body12';
import Body13 from './component/body/Body13';
import Body14 from './component/body/Body14';
import KakaoLogin from './component/Auth/KakaoLogin';
import KakaoLoginCallback from './component/Auth/KakaoLoginCallback';
import Footer from './component/Footer';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { app } from './component/Firebase/firebase';
function App() {
  const Bootom = () => {
    const location = useLocation().pathname;
    if (location === '/') {
      return;
    } else {
      return <Footer></Footer>;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body1 />}></Route>
          <Route path="/apply/2" element={<Body2 />}></Route>
          <Route path="/apply/3" element={<Body3 />}></Route>
          <Route path="/apply/4" element={<Body4 />}></Route>
          <Route path="/apply/5" element={<Body5 />}></Route>
          <Route path="/apply/6" element={<Body6 />}></Route>
          <Route path="/apply/7" element={<Body7 />}></Route>
          <Route path="/apply/8" element={<Body8 />}></Route>
          <Route path="/apply/9" element={<Body9 />}></Route>
          <Route path="/apply/10" element={<Body10 />}></Route>
          <Route path="/apply/11" element={<Body11 />}></Route>
          <Route path="/apply/12" element={<Body12 />}></Route>
          <Route path="/apply/13" element={<Body13 />}></Route>
          <Route path="/apply/14" element={<Body14 />}></Route>
          <Route path="/auth/kakao" element={<KakaoLogin />}></Route>
          <Route path="/auth/kakao/callback" element={<KakaoLoginCallback />}></Route>
        </Routes>
        <Bootom></Bootom>
      </BrowserRouter>
    </div>
  );
}

export default App;
