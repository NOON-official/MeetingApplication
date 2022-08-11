import Wants from '../SelectWants/Wants';

import { ReactComponent as Character } from '../../Asset/page9/Character.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body9 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="20%" left="50%">
          <StyledText position=" absolute" size="35px" color="#F49393" left="3%">
            그날의 분위기
          </StyledText>
          <StyledText position="absolute" size="35px" left="15%">
            는 <br /> 어땠으면 좋겠어요?
          </StyledText>
        </StyledDiv>{' '}
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="23%" top="20%">
          중복 선택이 가능해요
        </SubTitle>
        <Wants></Wants>
        <StyledDiv top="82%" left="75%">
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body9;
