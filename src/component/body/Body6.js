import Appearance from '../TeamMate/Appearance';
import Mbtis from '../TeamMate/Mbti';
import Fashions from '../TeamMate/Fashion';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body6 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="2%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv position="static" display="flex" direction="column" transform="0" width="100%" margin="0 0 0 10px">
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="1em">
                우리 팀에는
              </StyledText>
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}
                <StyledText position="static" color="#F49393" size="1em">
                  어떤 사람들
                </StyledText>
                <StyledText position=" static" size="1em">
                  이 있나요?
                </StyledText>
              </StyledDiv>
              <StyledDiv
                position="static"
                transform="0"
                direction="row"
                size="20px"
                justify_content="center"
                align_item="center"
                margin=" 0 0 0 10px"
              >
                {/*TextNumber*/}
                <StyledText position="static" weight="400" size="1em" font="Nanum JungHagSaeng" color="#BBBBBB">
                  5/9
                </StyledText>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            display="flex"
            direction="row"
            margin=" 5px 0 0 10px"
            transform="0"
            width="100%"
            size="13px"
          >
            <StyledText position="static" weight="400" size="1em" font="Pretendard" color="#AAAAAA">
              중복 선택이 가능해요
            </StyledText>
          </StyledDiv>
        </StyledDiv>

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
