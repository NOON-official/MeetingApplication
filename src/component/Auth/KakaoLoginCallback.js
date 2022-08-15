import React, { useState, useEffect } from 'react';
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
        console.log(res.data);

        // 로그인 완료 후 홈 화면으로 넘겨주기
        window.location.replace('/');
      })
      .catch((err) => {
        console.log(err);
        window.alert('로그인 실패');
        window.location.replace('/KakaoLogin');
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
