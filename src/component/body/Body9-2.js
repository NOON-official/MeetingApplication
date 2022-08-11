import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const buttonColor = '#218fc3';
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
  top: 2%;
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
const SubTitle = styled.div`
  display: flex;
  top: ${(props) => props.top || '10%'};
  margin-top: ${(props) => props.margin_top};
  font-size: 12px;
  font-weight: 150;
  height: 27px;
  margin-left: ${(props) => props.margin_left};
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: auto;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;

  margin: 10px;
  width: 301px;
  overflow: hidden;
  overflow-x: hidden;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  border: 2px solid #c9c9c9;
  border-radius: 12px;
  box-sizing: border-box;
  margin: 10px;
  width: 295px;
  top: 32%;
  position: absolute;
  overflow: hidden;
  overflow-x: hidden;
`;
const IntroBox = styled.textarea`
  position: absolute;
  top: 10%;
  width: 98%;
  height: 80%;
  border: 0;
  ::placeholder {
    justify-content: flex-start;
    text-align: start;
    font-size: 13px;
  }
`;
const Body9_2 = () => {
  const dispatch = useDispatch();
  const setIntroduction = (e) => {
    dispatch({ type: 'SET_INTRODUCTION', payload: e.target.value });
  };

  return (
    <Container>
      <Title>우리팀 어필할 수 있는 마지막 소개 한줄</Title>
      <SubTitle margin_top="25px">위트있게 우리팀을 두문장 이내로 설명해보아요!</SubTitle>
      <TextContainer>
        <SubTitle margin_left="15px" top="30%">
          2문장 이내로 우리팀을 소개해 주세요!
        </SubTitle>

        <TextBox>
          <IntroBox
            onChange={setIntroduction}
            placeholder="안녕하세요 한국외국어대학교 개그동아리 학생들입니다. 진짜 재미를 원하는 분들은 후회하지 않을 겁니다^^ 아, 참고로 잘생겼습니다."
          ></IntroBox>
        </TextBox>
      </TextContainer>
    </Container>
  );
};

export default Body9_2;
