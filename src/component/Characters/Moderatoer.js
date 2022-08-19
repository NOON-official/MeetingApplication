import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as ModeratorCharacter } from '../../Asset/page7/Moderator.svg';

const Moderatoer = () => {
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
      top="25%"
    >
      <StyledDiv left="50%" top="10%">
        <ModeratorCharacter />
      </StyledDiv>
      <StyledText top="30%" weight="400" size="34px" left="43%" line="32.2px">
        {' '}
        사회자
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
        <StyledText position="static" font="pretendard" fontWeight="500" size="15px" color="#777777" line="16px">
          어색한 분위기를 풀어주는 당신은 미팅의 유재석!
        </StyledText>
        <StyledText position="static" font="pretendard" fontWeight="500" size="15px" color="#777777" line="18px">
          당신이 없다면 미팅이 진행되지 않아요
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
        <StyledText position="static" font="Pretendard" fontWeight="500" line="15.6px" size="14px" color="#1A1A1A">
          진행만 하다가 숨겨진 인연을 놓칠 수 있어요!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Moderatoer;
