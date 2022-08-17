import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as ComedianCharacter } from '../../Asset/page7/Comedian.svg';

const Comedian = () => {
  return (
    <StyledDiv
      width="334px"
      height="257px"
      left="50%"
      border-width="1px"
      border="10px"
      border_color="#F1ECEC"
      border_style="solid"
      bg="white"
      top="554px"
    >
      <StyledDiv left="50%" top="15px" width="70px" height="70px">
        <ComedianCharacter />
      </StyledDiv>
      <StyledText top="100px" weight="400" size="34px" left="43%" line="32.2px">
        개그맨
      </StyledText>
      <StyledText top="140px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="18px" left="17%">
        리액션과 개그맨 뺨치는 입담으로
      </StyledText>
      <StyledText top="158px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="18px" left="26%">
        상대방을 홀리는 당신!
      </StyledText>
      <StyledDiv width="100%" left="50%" top="186px" height="71px" bg="#F1ECEC">
        <StyledText top="10px" font="Pretendard" fontWeight="bold" line="15.6px" size="16px" left="45%" color="#F49393">
          주의!
        </StyledText>
        <StyledText top="31px" font="Pretendard" fontWeight="bold" line="15.6px" size="14px" left="15%" color="#1A1A1A">
          개그만 하다 집에 돌아올수도 있으니 <br /> 적절한 타이밍이 중요해요!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Comedian;
