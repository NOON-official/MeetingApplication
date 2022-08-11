import AreaContiner from '../Areas/AreaContainer';

import { ReactComponent as DayCharacter } from '../../Asset/page4/DayCharacter.svg';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';

const Body4 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv top="5%" width="90%" height="10%" left="42%">
          <StyledText position="static" size="35px" color="#F49393">
            미팅 가능한 지역
          </StyledText>
          <StyledText position="static" size="35px">
            을 말해주세요
          </StyledText>
        </StyledDiv>{' '}
        <SubTitle size="13px" font="Pretendard" color="#AAAAAA" left="23%" top="11%">
          중복 선택이 가능해요
        </SubTitle>
        <AreaContiner></AreaContiner>
        <StyledDiv top="82%" left="75%">
          <DayCharacter />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};
export default Body4;
