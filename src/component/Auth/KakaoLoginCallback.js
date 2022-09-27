import React, { useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import client from '../../api';
import DataPush from '../Elements/DataPush';
import DataPut from '../Elements/DataPut';
import {  useDispatch } from 'react-redux';
const override = {
  display: 'block',
  margin: '0 auto',
};

const KakaoLoginCallback = (props) => {
  let [color, setColor] = useState('#EB8888');  
  //let accessToken;
  let ourteamId;
  let userId;
  // 카카오 인가코드 추출
  let code = new URL(window.location.href).searchParams.get('code');
  async function callDataPush() {
    await DataPush();
  }

  async function callDataPut() {
    await DataPut();
  }

  // 서버에 인가코드 넘겨주기
  useEffect(() => {
    // 로그인 전
    
      client
        .get(`/api/auth/kakao/callback?code=${code}`)
        //header부분 삭제함
        .then((res) => {
          // 반환된 Access Token, Refresh Token, 유저 정보 저장
          //window.sessionStorage.setItem('access', res.data.data.user.accessToken);
          //accessToken = res.data.data.user.accessToken;
          //window.sessionStorage.setItem('refresh', res.data.data.user.refreshToken);
          window.sessionStorage.setItem('id', res.data.data.user.id);
          userId = res?.data?.data?.user?.id;
          //dispatch({type: "SET_LOGIN", payload: true})
          window.localStorage.setItem('isLogin',true);
          window.sessionStorage.setItem('isAdmin',res.data.data.user.isAdmin);
        })
        // status 받아오기
        .then(async()=>{
            await client
            .get(`api/team/ourteam-id/${userId}`)
            .then(async(res)=>{
              ourteamId = res?.data?.data?.ourteamId;
              window.sessionStorage.setItem('ourteamId', ourteamId);
            })
            .then(async()=>{
              if (ourteamId === -1)
              {
                callDataPush()
                .then(() => {
                  console.log('완료');
                  window.location.replace('/apply/15');
                })
                .catch((err) => {
                  console.log('오류', err);
                });// 매칭 정보 서버에 저장
              }
              else 
              {
                callDataPut()
                .then(() => {
                  console.log('완료');
                 window.location.replace('/apply/15');
                })
                .catch((err) => {
                  console.log('오류', err);
                });// 매칭 정보 서버에 저장
              }
            })

          console.log('로그인 성공');
          // window.sessionStorage.setItem('access', res.data.data.user.accessToken);
          // window.sessionStorage.setItem('refresh', res.data.data.user.refreshToken);
         // window.sessionStorage.setItem('id', res.data.data.user.id);
          //window.sessionStorage.setItem('isAdmin', res.data.data.user.isAdmin);
          //setIsLogin((state) => !state);

        })
        .catch((err) => {
          console.log(err);
          //window.alert('로그인 실패');
        });
   
  }, []);

  return (
    <div className="sweet-loading">
      <div>loading...</div>
      <PulseLoader color={color} cssOverride={override} size={12} speedMultiplier={0.7} />
    </div>
  );
};

export default KakaoLoginCallback;
