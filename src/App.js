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
import Body15 from './component/body/Body15';
import SeasonFinish from './component/body/SeasonFinishPage';
import TestPage from './component/TestPage';
import KakaoLogin from './component/Auth/KakaoLogin';
import KakaoLoginCallback from './component/Auth/KakaoLoginCallback';
import Footer from './component/Footer';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PublicRoute from './component/Router/PublicRoute';
import PrivateRoute from './component/Router/PrivateRoute';
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
          <Route
            path="/Test"
            element={
              <PublicRoute restricted={false}>
                <TestPage />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute restricted={false}>
                <SeasonFinish />
              </PublicRoute>
            }
          />
          {/*}
          <Route
            path="/"
            element={
              <PublicRoute restricted={false}>
                <Body1 />
              </PublicRoute>
            }
          />
          */}
          <Route
            path="/apply/2"
            element={
              <PublicRoute restricted={true}>
                <Body2 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/3"
            element={
              <PublicRoute restricted={true}>
                <Body3 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/4"
            element={
              <PublicRoute restricted={true}>
                <Body4 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/5"
            element={
              <PublicRoute restricted={true}>
                <Body5 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/6"
            element={
              <PublicRoute restricted={true}>
                <Body6 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/7"
            element={
              <PublicRoute restricted={true}>
                <Body7 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/8"
            element={
              <PublicRoute restricted={true}>
                <Body8 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/9"
            element={
              <PublicRoute restricted={true}>
                <Body9 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/10"
            element={
              <PublicRoute restricted={true}>
                <Body10 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/11"
            element={
              <PublicRoute restricted={true}>
                <Body11 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/12"
            element={
              <PublicRoute restricted={true}>
                <Body12 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/13"
            element={
              <PublicRoute restricted={true}>
                <Body13 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/14"
            element={
              <PublicRoute restricted={true}>
                <Body14 />
              </PublicRoute>
            }
          />
          <Route
            path="/apply/15"
            element={
              <PrivateRoute restricted={false}>
                <Body15 />
              </PrivateRoute>
            }
          />
          <Route
            path="/auth/kakao/callback"
            element={
              <PublicRoute restricted={true}>
                <KakaoLoginCallback />
              </PublicRoute>
            }
          />
        </Routes>
        <Bootom></Bootom>
      </BrowserRouter>
    </div>
  );
}

export default App;
