import { StyledDiv, Container, MobileBox, StyledText } from '../Elements/StyledComponent';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { authentication } from '../Firebase/firebase';
import client from '../../api';
import axios from 'axios';

const StyledInput = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 100%;
  display: flex;
  font-size: 24px;
  border: 0;
  text-align: 'center';
  outline: none;
  margin-left: 10px;
  font-family: var(--font-family);
  ::placeholder {
    justify-content: center;
    text-align: 'center';
    font-size: 18px;
    outline: none;
    font-family: var(--font-family);
  }
`;
const Body14 = () => {
  const dispatch = useDispatch();
  const KakaoId = (e) => {
    dispatch({ type: 'SET_KAKAOID', payload: e.target.value });
  };
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
  const DataRequest = () => {
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
    console.log(body);

    console.log('userInfo', authentication.currentUser);
    console.log('client', client);
    client
      .post('/api/user/ourteam', body)
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
  }; //데이터 보내기
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" left="10px" color="#F49393">
            카카오톡 아이디
          </StyledText>
          <StyledText position="absolute" size="35px" left="165px">
            를
          </StyledText>
          <StyledText position="absolute" size="35px" left="10px" top="30px">
            알려주세요!
          </StyledText>
          <StyledText position="absolute" size="13px" font="Pretendard" color="#AAAAAA" left="10px" top="80px">
            매칭 확인 후 상대방에게 전달됩니다!
          </StyledText>
        </StyledDiv>
        <StyledDiv height="80%" top="20%" width="90%" left="50%">
          <StyledDiv height="88px" width="100%" left="50%" border="10px" bg="white" top="5%">
            <StyledText
              color="#777777"
              font="Pretendard"
              weight="400"
              size="13px"
              height="30%"
              width="90%"
              top="20%"
              left="5%"
            >
              카카오톡 아이디
            </StyledText>
            <StyledDiv top="50%" width="100%" left="50%" height="50%">
              <StyledDiv display="flex" justify_content="flex-start" left="50%" height="100%" width="100%">
                <StyledInput
                  name="KakaoId"
                  onChange={KakaoId}
                  placeholder="카카오톡 아이다를 입력해주세요"
                ></StyledInput>
              </StyledDiv>
            </StyledDiv>
            <button onClick={DataRequest}>버튼</button>
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};
export default Body14;
