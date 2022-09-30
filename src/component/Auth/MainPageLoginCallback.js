import React, { useState, useEffect } from 'react';
import client from '../../api';
import DataGet from '../Elements/DataGet';
import { useSelector, useDispatch } from 'react-redux';
const override = {
  display: 'block',
  margin: '0 auto',
};

const MainLoginCallback = (props) => {
  //const dispatch = useDispatch()
  let code = new URL(window.location.href).searchParams.get('code');
  // 서버에 인가코드 넘겨주기
  useEffect(() => {
    kakaoCallback()
    .then( ()=>{
      window.localStorage.setItem('isLogin',true)
      //dispatch({ type: "SET_LOGIN", payload: true })
    })
    .then(()=>{
      callDataGet() // 매칭 정보 서버에 저장
      .then(() => {
        window.location.replace('/admin');
       })
      .catch((err) => {
        console.log('오류', err);
      });
    })

    async function kakaoCallback() {
      await client
      .get(`/api/auth/kakao/callback?code=${code}`)
      .then((res) => {
    
        // 반환된 Access Token, Refresh Token, 유저 정보 저장
        console.log('로그인 성공');
        // window.sessionStorage.setItem('access', res.data.data.user.accessToken);
        // window.sessionStorage.setItem('refresh', res.data.data.user.refreshToken);
        window.localStorage.setItem('id', res.data.data.user.id);
        window.sessionStorage.setItem('isAdmin', res.data.data.user.isAdmin);
      })
      .catch((err) => {
        console.log(err);
        window.alert('로그인 오류');
      });
    }

    async function callDataGet() {
      await DataGet();
    }
  }, []);
};

export default MainLoginCallback;