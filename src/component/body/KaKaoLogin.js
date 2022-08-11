import * as React from 'react';
import styled from 'styled-components';
import KakaoLoginButton from '../../image/kakao-login-button.png';

const { Kakao } = window;
const LoginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/auth/callback/kakao',
  });
};
const KakaoButton = styled.div`
  border: none;
`;
const KakaoLogin = () => {
  return (
    <div>
      <KakaoButton id="kakao-login-button" onClick={LoginWithKakao}>
        <img src={KakaoLoginButton} alt="Kakao Login" width="225px" />
      </KakaoButton>
    </div>
  );
};

export default KakaoLogin;
