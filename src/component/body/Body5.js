import * as React from 'react'
import DaysContainer from '../DAYS/DaysContainer'

import { ReactComponent as DayCharacter } from '../../Asset/page5/DayCharacter.svg'
import { ReactComponent as DayChatBallon } from '../../Asset/page5/DayChatBallon.svg'
import {
  Container,
  MobileBox,
  StyledDiv,
  StyledText,
  SubTitle,
} from '../Elements/StyledComponent'

const Body5 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="10%" left="35%">
          <StyledText position="static" size="35px" color="#F49393">
            선호하는 요일
          </StyledText>
          <StyledText position="static" size="35px">
            을 알려주세요
          </StyledText>
        </StyledDiv>{' '}
        <SubTitle
          size="13px"
          font="Pretendard"
          color="#AAAAAA"
          left="23%"
          top="11%"
        >
          중복 선택이 가능해요
        </SubTitle>
        <DaysContainer></DaysContainer>
        <StyledDiv top="78%" left="40%">
          <DayChatBallon />
        </StyledDiv>
        <StyledDiv top="85%" left="75%">
          <DayCharacter />
        </StyledDiv>
      </MobileBox>
    </Container>
  )
}

export default Body5
