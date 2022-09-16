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
  font-size: 12px;
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
      <StyledDiv display="flex" direction="column" top="2%" width="90%" height="20%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            margin="5px 0 0 10px"
          >
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="0.8em" >
                우리팀을 소개하는
              </StyledText>
              
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}

                <StyledText position=" static" size="0.8em" color="#F49393">
             마지막 한 줄 어필
                </StyledText>
              </StyledDiv>
              <StyledDiv
                position="static"
                transform="0"
                direction="row"
                size="20px"
                justify_content="center"
                align_item="center"
                margin=" 10px 0 0 10px"
              >
                {/*TextNumber*/}
                <StyledText position="static" weight="400" size="0.8em" font="Nanum JungHagSaeng" color="#BBBBBB">
                  9/9
                </StyledText>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            size="13px"
            margin="0 0 0 10px"
          >
            <StyledText position="static" weight="400" size="1em" font="Pretendard" color="#AAAAAA">
             센스 넘치게 우리 팀을 소개할수록 매칭률이 올라가요!
            </StyledText>
            <StyledText position="static" weight="400" size="1em" font="Pretendard" color="#AAAAAA">
             3문장 이내로 작성해 주세요.
            </StyledText>
            <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="28%" top="50%"></SubTitle>
          </StyledDiv>
          </StyledDiv>
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
