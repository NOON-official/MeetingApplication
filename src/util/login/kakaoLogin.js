import React, { useCallback } from 'react';
import styled from 'styled-components';

const KakaoLogin = () => {
  const { Kakao } = window;

  const LoginWithKakao = useCallback(() => {
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_CLIENT_URL}/auth/kakao/main/callback`,
    });
  }, []);

  return (
    <div onClick={LoginWithKakao}>로그인</div>
  );
};

export default KakaoLogin ;

