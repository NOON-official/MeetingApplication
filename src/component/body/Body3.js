import * as React from 'react';
import UnivBox from '../Universities/UnivBox';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
import { ReactComponent as Character } from '../../Asset/page3/Character.svg';
import { ReactComponent as ChatBallon } from '../../Asset/page3/ChatBallon.svg';
const Body3 = () => {
  return (
    <Container bg={'#F5F5F5'}>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position="absolute" color="#F49393" size="35px" left="10px">
            우리 팀의 학교
          </StyledText>
          <StyledText position=" absolute" size="35px" left="135px">
            는?
          </StyledText>
        </StyledDiv>
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="30%" top="12%">
          팀원들의 모든 학교를 말해주세요
        </SubTitle>
        <UnivBox></UnivBox>
        <StyledDiv
          display="flex"
          direction="row"
          justify_content="flex-end"
          align_item="flex-end"
          top="80%"
          height="auto"
          width="100%"
          left="40%"
          margin
        >
          <ChatBallon />
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body3;
