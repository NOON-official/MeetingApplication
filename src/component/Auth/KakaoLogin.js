import React, { useCallback } from 'react';
import styled from 'styled-components';
import KakaoLoginButton from '../../image/kakao-login-button.png';

const KakaoButton = styled.div`
  border: none;
`;

const KakaoLogin = () => {
  const { Kakao } = window;

  const LoginWithKakao = useCallback(() => {
    console.log('kakaologinstart');
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_CLIENT_URL}/auth/kakao/callback`,
    });
  }, []);

  return (
    <div>
      <KakaoButton id="kakao-login-button" onClick={LoginWithKakao}>
        <img src={KakaoLoginButton} alt="Kakao Login" width="225px" />
      </KakaoButton>
    </div>
  );
};

export default KakaoLogin;
