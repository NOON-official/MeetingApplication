import { async } from '@firebase/util';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import client from '../../api';
import DataGet from '../Elements/DataGet';
const override = {
  display: 'block',
  margin: '0 auto',
};


const MainLoginCallback = (props) => {
    let [color, setColor] = useState('#EB8888');
    let [IsLogin, setIsLogin] = useState(false);
    
    // 카카오 인가코드 추출
    let code = new URL(window.location.href).searchParams.get('code');
  
    // 서버에 인가코드 넘겨주기
    useEffect(() => {
      // 로그인 전
      if (!IsLogin) {
        client
          .get(`/api/auth/kakao/callback?code=${code}`)
          .then((res) => {
            // 반환된 Access Token, Refresh Token, 유저 정보 저장
            console.log('로그인 성공');
            window.sessionStorage.setItem('access', res.data.data.user.accessToken);
            window.sessionStorage.setItem('refresh', res.data.data.user.refreshToken);
            window.sessionStorage.setItem('id', res.data.data.user.id);
            setIsLogin((state) => !state);
          })
          .catch((err) => {
            console.log(err);
            window.alert('로그인 실패');
          });
      }
      // 로그인 후
      else {
        console.log("1",window.sessionStorage.getItem('access'))
        async function callDataGet() {
            await DataGet();
          }
        console.log('데이터 이전 시도중');
       
        callDataGet() // 매칭 정보 서버에 저장
          .then(() => {
            console.log('완료');
            
          })
          .catch((err) => {
            console.log('오류', err);
          });
      }
    }, [IsLogin]);
  }

export default MainLoginCallback
