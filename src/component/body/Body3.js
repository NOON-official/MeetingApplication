import * as React from 'react';
import UnivBox from '../Universities/UnivBox';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
import { ReactComponent as Character } from '../../Asset/page3/Character.svg';
import { ReactComponent as ChatBallon } from '../../Asset/page3/ChatBallon.svg';
const Body3 = () => {
  return (
    <Container bg={'#F5F5F5'}>
      <MobileBox>
        <StyledDiv top="5%" width="50%" height="10%" left="25%">
          <StyledText position="static" size="35px" color="#F49393">
            우리 팀의 학교
          </StyledText>
          <StyledText position="static" size="35px">
            는?
          </StyledText>
        </StyledDiv>
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="30%" top="12%">
          팀원들의 모든 학교를 말해주세요
        </SubTitle>
        <UnivBox></UnivBox>
        <StyledDiv top="78%" left="40%">
          <ChatBallon />
        </StyledDiv>
        <StyledDiv top="85%" left="75%">
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body3;
