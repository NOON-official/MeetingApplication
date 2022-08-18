import AreaContiner from '../Areas/AreaContainer';

import { ReactComponent as DayCharacter } from '../../Asset/page4/DayCharacter.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body4 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position="absolute" color="#F49393" size="35px" left="10px">
            미팅 가능한 지역
          </StyledText>
          <StyledText position=" absolute" size="35px" left="170px">
            을 말해주세요
          </StyledText>
          <SubTitle size="20px" font="Nanum JungHagSaeng" color="#BBBBBB" left="90%" top="10%">
            3/9
          </SubTitle>
        </StyledDiv>
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="23%" top="13%">
          중복 선택이 가능해요
        </SubTitle>
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
