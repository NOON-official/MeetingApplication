import React, { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import client from '../../api';
// import { useDispatch } from "react-redux";
// import { actionCreators as userActions} from "../Redux/Modules/User";

const override = {
  display: 'block',
  margin: '0 auto',
};

const KakaoLoginCallback = (props) => {
  let [color, setColor] = useState('#EB8888');
  // const dispatch = useDispatch();

  // const href = window.location.href;
  // let params = new URL(document.URL).searchParams;
  // let code = params.get("code");

  // React.useEffect(async () => {
  //     await dispatch(userActions.kakaoLogin(code));
  // }, []);

  // 카카오 인가코드 추출
  let code = new URL(window.location.href).searchParams.get('code');

  // 서버에 인가코드 넘겨주기
  client
    .get(`/api/auth/kakao/callback?code=${code}`)
    .then((res) => {
      console.log(res);
      // 홈화면으로 넘겨주기
      // const newBody = { ...prefferenceBody, id: res.data.data.id };
    })
    .catch((err) => {
      console.log(err);
      window.alert('로그인 실패');
      window.location.replace('/');
    });

  return (
    <div className="sweet-loading">
      <div>loading...</div>
      <PulseLoader color={color} cssOverride={override} size={12} speedMultiplier={0.7} />
    </div>
  );
};

export default KakaoLoginCallback;
