import * as React from 'react';
import UnivBox from '../Universities/UnivBox';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
import { ReactComponent as Character } from '../../Asset/page3/Character.svg';
import { ReactComponent as ChatBallon } from '../../Asset/page3/ChatBallon.svg';
const Body3 = () => {
  return (
    <Container bg={'#F5F5F5'}>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="5%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%" margin="0 0 0 10px">
            {/* TitleBox*/}
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
              {/* TextTitle*/}
              <StyledText position="static" color="#F49393" size="1em">
                우리 팀의 학교
              </StyledText>
              <StyledText position=" static" size="1em">
                는?
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
              <StyledText position="static" weight="400" size="1em" font="Nanum JungHagSaeng" color="#BBBBBB">
                2/9
              </StyledText>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            display="flex"
            direction="row"
            transform="0"
            width="100%"
            size="13px"
            margin="0 0 0 10px"
          >
            <StyledText position="static" weight="400" size="1em" font="Pretendard" color="#AAAAAA">
              팀원들의 모든 학교를 말해주세요
            </StyledText>
            <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="28%" top="50%"></SubTitle>
          </StyledDiv>
        </StyledDiv>

        <UnivBox></UnivBox>
        <StyledDiv
          display="flex"
          direction="row"
          justify_content="flex-end"
          align_item="flex-end"
          top="88%"
          height="auto"
          width="100%"
          left="40%"
        >
          <ChatBallon />
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body3;
