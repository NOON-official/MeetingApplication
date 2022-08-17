import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as NerdCharacter } from '../../Asset/page7/Nerd.svg';
const Nerd = () => {
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
      top="831px"
    >
      <StyledDiv left="50%" top="15px" width="70px" height="70px">
        <NerdCharacter />
      </StyledDiv>
      <StyledText top="100px" weight="400" size="34px" left="43%" line="32.2px">
        깍두기
      </StyledText>
      <StyledText top="140px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="18px" left="30%">
        수줍음이 많은 당신
      </StyledText>
      <StyledText top="158px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="18px" left="15%">
        순수한 매력에 상대방이 반할지도?
      </StyledText>
      <StyledDiv width="100%" left="50%" top="191px" height="66px" bg="#F1ECEC">
        <StyledText top="15px" font="Pretendard" fontWeight="bold" line="15.6px" size="16px" left="45%" color="#F49393">
          주의!
        </StyledText>
        <StyledText top="36px" font="Pretendard" fontWeight="bold" line="15.6px" size="14px" left="5%" color="#1A1A1A">
          좀 더 자신감을 가지고 강하게 어필해 봅시다!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};
export default Nerd;
