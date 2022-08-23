import styled from 'styled-components';
import * as React from 'react';
import { ReactComponent as Character } from '../../Asset/page11/InputCharacter.svg';
import { ReactComponent as ChatBallon } from '../../Asset/page11/ChatBallon.svg';
import { useDispatch } from 'react-redux';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
const StyledTextArea = styled.textarea`
  position: static;
  width: 90%;
  height: 80%;
  border: 0;
  margin: 5%;
  font-family: pretendard;
  font-size: 14px;
  ::placeholder {
    justify-content: flex-start;
    text-align: start;
    font-size: 13px;
  }
`;
const Body11 = () => {
  const dispatch = useDispatch();
  const setIntroduction = (e) => {
    dispatch({ type: 'SET_INTRODUCTION', payload: e.target.value });
  };

  return (
    <Container>
      <MobileBox>
        <StyledDiv max_width="350px" top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" left="10px">
            우리팀을 소개하는
          </StyledText>
          <StyledText position="absolute" size="35px" color="#F49393" left="10px" top="30px">
            마지막 한 줄 어필
          </StyledText>
          <SubTitle weight="400" size="20px" font="Nanum JungHagSaeng" color="#BBBBBB" left="60%" top="35%">
            9/9
          </SubTitle>
          <StyledText position="absolute" size="13px" font="Pretendard" color="#AAAAAA" left="10px" top="75px">
            센스 넘치게 우리팀을 소개할수록 매칭률이 올라가요.
          </StyledText>
          <StyledText position="absolute" size="13px" font="Pretendard" color="#AAAAAA" left="10px" top="95px">
            2문장 이상으로 우리팀을 소개해주세요!
          </StyledText>
        </StyledDiv>{' '}
        <StyledDiv
          display="flex"
          justify_content="center"
          align_item="center"
          max_width="350px"
          border="10px"
          bg="white"
          left="50%"
          width="90%"
          height="20%"
          top="170px"
        >
          <StyledTextArea
            onChange={setIntroduction}
            placeholder="안녕하세요 한국대학교 개그동아리 학생들입니다. 진짜 재미를 원하는 분들은 후회하지 않을 겁니다^^ 아, 참고로 잘생겼습니다."
          ></StyledTextArea>
        </StyledDiv>
        <StyledDiv top="65%" left="35%">
          {' '}
          <ChatBallon />
        </StyledDiv>
        <StyledDiv
          display="flex"
          justify_content="flex-end"
          align_item="flex-end"
          top="80%"
          height="auto"
          width="100%"
          left="40%"
          margin
        >
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body11;
