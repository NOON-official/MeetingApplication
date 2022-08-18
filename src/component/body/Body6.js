import styled from 'styled-components';
import Appearance from '../TeamMate/Appearance';
import Mbtis from '../TeamMate/Mbti';
import Fashions from '../TeamMate/Fashion';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body6 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" left="10px">
            우리 팀에는
          </StyledText>

          <StyledText position="absolute" color="#F49393" size="35px" left="10px" top="30px">
            어떤 사람들
          </StyledText>
          <StyledText position=" absolute" size="35px" top="30px" left="120px">
            이 있나요?
          </StyledText>
          <SubTitle weight="400" size="20px" font="Nanum JungHagSaeng" color="#BBBBBB" left="250px" top="45px">
            5/9
          </SubTitle>
        </StyledDiv>
        <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="24%" top="17%">
          중복 선택이 가능해요
        </SubTitle>
        <StyledDiv top="20%" width="90%" height="75%" left="50%">
          <Appearance></Appearance>
          <Mbtis></Mbtis>
          <Fashions></Fashions>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body6;
