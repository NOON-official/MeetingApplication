import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as NerdCharacter } from '../../Asset/page7/Nerd.svg';
const Nerd = () => {
  return (
    <StyledDiv
      width="90%"
      height="23%"
      left="50%"
      border-width="1px"
      border="10px"
      border_color="#F1ECEC"
      border_style="solid"
      bg="white"
      top="75%"
    >
      <StyledDiv left="50%" top="10%">
        <NerdCharacter />
      </StyledDiv>
      <StyledText top="30%" weight="400" size="34px" left="40%" line="32.2px">
        깍두기
      </StyledText>
      <StyledDiv
        align_item="center"
        justify_content="flex-start"
        top="55%"
        height="25%"
        left="50%"
        width="100%"
        display="flex"
        direction="column"
      >
        <StyledText position="static" font="pretendard" fontWeight="500" size="15px" color="#777777" line="18px">
          수줍음이 많은 당신
        </StyledText>
        <StyledText position="static" font="Pretendard" fontWeight="500" size="15px" color="#777777" line="18px">
          순수한 매력에 상대방이 반할지도?
        </StyledText>
      </StyledDiv>

      <StyledDiv
        display="flex"
        direction="column"
        justify_content="space-around"
        align_item="center"
        width="100%"
        left="50%"
        top="80%"
        height="20%"
        bg="#F1ECEC"
      >
        <StyledText position="static" font="Pretendard" fontWeight="700" line="15.6px" size="16px" color="#F49393">
          주의!
        </StyledText>
        <StyledText position="static" font="Pretendard" fontWeight="500" line="15.6px" size="16px" color="#1A1A1A">
          좀 더 자신감을 가지고 강하게 어필해 봅시다!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};
export default Nerd;
