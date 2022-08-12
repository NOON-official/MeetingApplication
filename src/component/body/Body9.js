import Wants from '../SelectWants/Wants';

import { ReactComponent as Character } from '../../Asset/page9/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body9 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv max_width="350px" top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" color="#F49393" left="10px">
            그날의 분위기
          </StyledText>
          <StyledText position="absolute" size="35px" left="130px">
            는
          </StyledText>
          <StyledText position="absolute" size="35px" left="10px" top="30px">
            어땠으면 좋겠어요?
          </StyledText>
        </StyledDiv>
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="23%" top="20%">
          중복 선택이 가능해요
        </SubTitle>
        <Wants></Wants>
        <StyledDiv
          display="flex"
          justify_content="flex-end"
          align_item="flex-end"
          top="80%"
          height="auto"
          width="100%"
          left="40%"
          margin
        >
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body9;
