import React, { useCallback } from 'react';

function KakaoLogin() {
  const { Kakao } = window;

  const LoginWithKakao = useCallback(() => {
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_CLIENT_URL}/auth/kakao/main/callback`,
    });
  }, []);

  return <div onClick={LoginWithKakao}>로그인</div>;
}

export default KakaoLogin;
