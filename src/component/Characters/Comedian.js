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
        비주얼
      </StyledText>
      <StyledText top="140px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="18px" left="20%">
        존재만으로 분위기를 녹이는 당신!
      </StyledText>
      <StyledText top="158px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="18px" left="23%">
        바라만 보고 있어도 웃음이 나요
      </StyledText>
      <StyledDiv width="100%" left="50%" top="191px" height="66px" bg="#F1ECEC">
        <StyledText top="15px" font="Pretendard" fontWeight="bold" line="15.6px" size="16px" left="45%" color="#F49393">
          주의!
        </StyledText>
        <StyledText top="36px" font="Pretendard" fontWeight="bold" line="15.6px" size="16px" left="32%" color="#1A1A1A">
          주위에 물어볼 것!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Comedian;
