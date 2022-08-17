import React, { useState, useEffect, useCallback } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import client from '../../api';
import { useNavigate } from 'react-router-dom';

const override = {
  display: 'block',
  margin: '0 auto',
};

const KakaoLoginCallback = (props) => {
  const navigate = useNavigate();

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
        window.localStorage.setItem('access', res.data.data.user.accessToken);
        window.localStorage.setItem('refresh', res.data.data.user.refreshToken);
        window.localStorage.setItem('id', res.data.data.user.id);
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
//
/*  client
      .post('/api/user/ourteam', body, { headers: { authorization: `Bearer ${AccessToken}` } })
      .then((res) => {
        console.log('response', res);
        const newBody = { ...prefferenceBody, id: res.data.data.id };
        console.log('1', newBody);
        client
          .post('/api/user/preference', newBody)
          .then((res) => {
            alert('완성');
          })
          .catch((err) => {
            console.log('error');
            alert(err.response.data.message);
          });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }; //데이터 보내기*/
