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
import KakaoLogin from './component/body/KaKaoLogin';
import KakaoLoginCallback from './component/body/KakaoLoginCallback';
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
          <Route path="Meeting2" element={<Body2 />}></Route>
          <Route path="Meeting3" element={<Body3 />}></Route>
          <Route path="Meeting4" element={<Body4 />}></Route>
          <Route path="Meeting5" element={<Body5 />}></Route>
          <Route path="Meeting6" element={<Body6 />}></Route>
          <Route path="Meeting7" element={<Body7 />}></Route>
          <Route path="Meeting8" element={<Body8 />}></Route>
          <Route path="Meeting9" element={<Body9 />}></Route>
          <Route path="Meeting10" element={<Body10 />}></Route>
          <Route path="Meeting11" element={<Body11 />}></Route>
          <Route path="Meeting12" element={<Body12 />}></Route>
          <Route path="Kakaologin" element={<KakaoLogin />}></Route>
          <Route path="/auth/callback/kakao" element={<KakaoLoginCallback />}></Route>
        </Routes>
        <Bootom></Bootom>
      </BrowserRouter>
    </div>
  );
}

export default App;
