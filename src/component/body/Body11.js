import styled from 'styled-components';
import * as React from 'react';
import { ReactComponent as Character } from '../../Asset/page11/InputCharacter.svg';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';
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
          <StyledText position=" absolute" size="35px" color="#F49393" left="10px">
            우리팀을 어필할 수 있는
          </StyledText>
          <StyledText position="absolute" size="35px" left="10px" top="30px">
            마지막 기회
          </StyledText>
          <StyledText position="absolute" size="13px" font="Pretendard" color="#AAAAAA" left="10px" top="70px">
            위트있게 우리팀을 설명해 보아요!
          </StyledText>
          <StyledText position="absolute" size="13px" font="Pretendard" color="#AAAAAA" left="10px" top="90px">
            2문장 이내로 우리팀을 소개해주세요!
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
            placeholder="안녕하세요 한국외국어대학교 개그동아리 학생들입니다. 진짜 재미를 원하는 분들은 후회하지 않을 겁니다^^ 아, 참고로 잘생겼습니다."
          ></StyledTextArea>
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
