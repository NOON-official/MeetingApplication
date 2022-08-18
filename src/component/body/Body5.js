import * as React from 'react';
import DaysContainer from '../DAYS/DaysContainer';

import { ReactComponent as DayCharacter } from '../../Asset/page5/DayCharacter.svg';
import { ReactComponent as DayChatBallon } from '../../Asset/page5/DayChatBallon.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body5 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position="absolute" color="#F49393" size="35px" left="10px">
            선호하는 요일
          </StyledText>
          <StyledText position=" absolute" size="35px" left="125px">
            을 알려주세요
          </StyledText>
          <SubTitle size="20px" font="Nanum JungHagSaeng" color="#BBBBBB" left="75%" top="10%">
            4/9
          </SubTitle>
        </StyledDiv>
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="23%" top="13%">
          중복 선택이 가능해요
        </SubTitle>
        <DaysContainer></DaysContainer>
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
          <DayChatBallon />
          <DayCharacter />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body5;
