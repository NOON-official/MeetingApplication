import React, { useState, useEffect, useCallback } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import client from '../../api';

const override = {
  display: 'block',
  margin: '0 auto',
};

const KakaoLoginCallback = (props) => {
  let [color, setColor] = useState('#EB8888');

  // 카카오 인가코드 추출
  let code = new URL(window.location.href).searchParams.get('code');

  // 서버에 인가코드 넘겨주기
  useEffect(() => {
    client
      .get(`/api/auth/kakao/callback?code=${code}`)
      .then((res) => {
        // 반환된 자체 토큰, 유저 정보 저장
        // ###### 여기서 Access Token과 Refresh Token을 저장해주시면 됩니다! ######
        console.log('로그인 성공');
        window.sessionStorage.setItem('access', res.data.data.user.accessToken);
        window.sessionStorage.setItem('refresh', res.data.data.user.refreshToken);
        window.sessionStorage.setItem('id', res.data.data.user.id);
        window.location.replace('/apply/14');
      })
      .catch((err) => {
        console.log(err);
        window.alert('로그인 실패');
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
