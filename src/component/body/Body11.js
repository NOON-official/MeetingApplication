import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import client from '../../api';
import { authentication } from '../Firebase/firebase';

const Container = styled.div`
  left: 0;
  overflow: hidden;
  overflow-x: hidden;
  position: absolute;
  top: 10%;
  width: 100%;
  height: 75%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  top: 10%;
  font-size: 17px;
  font-weight: bold;
  height: auto;
  margin: 0;
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: auto;
`;
const KakaoIdInput = styled.input`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 200px;
  ::placeholder {
    justify-content: center;
    text-align: center;
    font-size: 13px;
    margin: 5px;
  }
  border: 1px solid #c4d7e0;
`;

const Body11 = () => {
  const phone = useSelector((state) => state.phone);
  const gender = useSelector((state) => state.gender);
  const num = useSelector((state) => state.num);
  const age = useSelector((state) => state.age);
  const jobs = useSelector((state) => state.jobs);
  const prefferedjobs = useSelector((state) => state.prefferedjobs);
  const prefferedage = useSelector((state) => state.prefferedage);
  const preffereduniversity = useSelector((state) => state.preffereduniversity);
  const university = useSelector((state) => state.university);
  const characters = useSelector((state) => state.characters);
  const area = useSelector((state) => state.area);
  const kakaoid = useSelector((state) => state.kakaoid);
  const day = useSelector((state) => state.day);
  const appearance = useSelector((state) => state.appearance);
  const mbti = useSelector((state) => state.mbti);
  const fashion = useSelector((state) => state.fashion);
  const dispatch = useDispatch();
  const KakaoId = (e) => {
    dispatch({ type: 'SET_KAKAOID', payload: e.target.value });
  };

  const Mid = () => {
    const body = {
      firebaseUid: authentication.currentUser.uid,
      kakaoId: kakaoid,
      phone: phone,
      gender: gender,
      num: `${num}`,
      age: `${age}`,
      job: jobs,
      university: university,
      role: characters,
      area: area,
      day: day,
      appearance: appearance,
      mbti: mbti,
      fashion: fashion,
    };
    const prefferenceBody = {
      age: prefferedage,
      job: prefferedjobs,
      exceptedUniv: preffereduniversity,
      includedUniv: [''],
      gamePercent: '78',
      sweetPercent: '100',
      funPercent: '0',
      appearance: [''],
      mbti: [''],
      fashion: [''],
    };
    // console.log(body);
    console.log(client);
    console.log('userInfo', authentication.currentUser);
    client
      .post('/api/user/ourteam', body)
      .then((res) => {
        const newBody = { ...prefferenceBody, id: res.data.data.id };
        console.log(newBody);
        client
          .post('/api/user/preference', newBody)
          .then((res) => {
            alert('완성');
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }; //데이터 보내기

  return (
    <Container>
      <Title>
        카카오톡 아이디를 알려주세요. <br /> 매칭확인 후 상대에게 전달됩니다!
      </Title>
      <KakaoIdInput onChange={KakaoId} placeholder="깨똑아이뒤"></KakaoIdInput>
      <button onClick={Mid}>버튼</button>
    </Container>
  );
};

export default Body11;
