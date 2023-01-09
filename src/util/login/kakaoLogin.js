import React, { useCallback } from "react";
import styled from "styled-components";

const KakaoLogin = () => {
  const { Kakao } = window;

  const LoginWithKakao = useCallback(() => {
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_CLIENT_URL}/auth/kakao/callback`,
    });
  }, []);

  return (
    <KakaoButton id="kakao-login-button" onClick={LoginWithKakao}>
      <img src="../../asset/img/kakaologin" alt="Kakao Login" width="225px" />
    </KakaoButton>
  );
};

export default KakaoLogin;

const KakaoButton = styled.div`
  border: none;
`;
