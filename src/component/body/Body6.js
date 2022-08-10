import styled from 'styled-components'
import Appearance from '../TeamMate/Appearance'
import Mbtis from '../TeamMate/Mbti'
import Fashions from '../TeamMate/Fashion'
import {
  Container,
  MobileBox,
  StyledDiv,
  StyledText,
  SubTitle,
} from '../Elements/StyledComponent'

const Body6 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="10%" left="18%">
          <StyledText position="static" size="35px">
            우리팀에는 <br />
          </StyledText>
        </StyledDiv>
        <StyledDiv top="10%" width="90%" height="10%" left="33%">
          <StyledText position="static" size="35px" color="#F49393">
            어떤사람들
          </StyledText>
          <StyledText position="static" size="35px">
            이 있나요?
          </StyledText>
        </StyledDiv>{' '}
        <SubTitle
          size="13px"
          font="Pretendard"
          color="#AAAAAA"
          left="24%"
          top="17%"
        >
          중복 선택이 가능해요
        </SubTitle>
        <StyledDiv top="20%" width="90%" height="75%" left="50%">
          <Appearance></Appearance>
          <Mbtis></Mbtis>
          <Fashions></Fashions>
        </StyledDiv>
      </MobileBox>
    </Container>
  )
}

export default Body6
