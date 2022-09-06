import AreaContiner from '../Areas/AreaContainer';

import { ReactComponent as DayCharacter } from '../../Asset/page4/DayCharacter.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body4 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="5%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%" margin="0 0 0 10px">
            {/* TitleBox*/}
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
              {/* TextTitle*/}
              <StyledText position="static" color="#F49393" size="0.8em">
                미팅 가능한 지역
              </StyledText>
              <StyledText position=" static" size="0.8em">
                을 알려주세요
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
                3/9
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
            <StyledText position="static" weight="400" size="0.8em" font="Pretendard" color="#AAAAAA">
              중복 선택이 가능해요
            </StyledText>
            <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="28%" top="50%"></SubTitle>
          </StyledDiv>
        </StyledDiv>

        <AreaContiner></AreaContiner>
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
          <DayCharacter />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};
export default Body4;
