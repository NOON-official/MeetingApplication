import React, { useEffect } from 'react';
import client from './client';

const override = {
  display: 'block',
  margin: '0 auto',
};

const MainLoginCallback = (props) => {
  // const dispatch = useDispatch()
  const code = new URL(window.location.href).searchParams.get('code');

  // 서버에 인가코드 넘겨주기
  useEffect(async () => {
    await kakaoCallback()
      .then(() => {
        window.location.replace('/');
      })
      .catch((err) => {
        console.log('오류', err);
      });

    async function kakaoCallback() {
      await client
        .get(`/api/auth/kakao/callback?code=${code}`)
        .then((res) => {
          // 반환된 Access Token, Refresh Token, 유저 정보 저장
          console.log('로그인 성공');
        })
        .catch((err) => {
          console.log(err);
          window.alert('로그인 오류');
        });
    }
  }, []);
};

export default MainLoginCallback;
