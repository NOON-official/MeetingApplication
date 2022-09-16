import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as ComedianCharacter } from '../../Asset/page7/Comedian.svg';

const Comedian = () => {
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
      top="50%"
    >
      <StyledDiv left="50%" top="10%">
        <ComedianCharacter />
      </StyledDiv>
      <StyledText top="30%" weight="400" size="31px" left="40%" line="32.2px">
        개그맨
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
        <StyledText position="static" font="pretendard" fontWeight="500" size="13px" color="#777777" line="18px">
          리액션과 개그맨 뺨치는 입담으로
        </StyledText>
        <StyledText position="static" font="Pretendard" fontWeight="500" size="13px" color="#777777" line="18px">
          상대방을 홀리는 당신!
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
        <StyledText position="static" font="Pretendard" fontWeight="700" line="15.6px" size="14px" color="#F49393">
          주의!
        </StyledText>
        <StyledText position="static" font="Pretendard" fontWeight="500" line="15.6px" size="14px" color="#1A1A1A">
          개그만 하다 집에 돌아올수도 있으니
        </StyledText>
        <StyledText position="static" font="Pretendard" fontWeight="500" line="15.6px" size="14px" color="#1A1A1A">
          적절한 타이밍이 중요해요!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Comedian;
