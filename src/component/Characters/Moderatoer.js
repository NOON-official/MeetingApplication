import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import { ReactComponent as ModeratorCharacter } from '../../Asset/page7/Moderator.svg';

const Moderatoer = () => {
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
      top="277px"
    >
      <StyledDiv left="50%" top="15px" width="70px" height="70px">
        <ModeratorCharacter />
      </StyledDiv>
      <StyledText top="100px" weight="400" size="34px" left="43%" line="32.2px">
        사회자
      </StyledText>
      <StyledText top="140px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="16px" left="0">
        어색한 분위기를 풀어주는 당신은 미팅의 유재석!
      </StyledText>
      <StyledText top="158px" font="Pretend" fontWeight="bold" size="15px" color="#777777" line="16px" left="10%">
        당신이 없다면 미팅이 진행되지 않아요
      </StyledText>
      <StyledDiv width="100%" left="50%" top="191px" height="66px" bg="#F1ECEC">
        <StyledText top="15px" font="Pretendard" fontWeight="bold" line="15.6px" size="16px" left="45%" color="#F49393">
          주의!
        </StyledText>
        <StyledText top="36px" font="Pretendard" fontWeight="bold" line="15.6px" size="14px" left="5%" color="#1A1A1A">
          진행만 하다가 숨겨진 인연을 놓칠 수 있어요!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Moderatoer;
