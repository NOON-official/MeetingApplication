import { StyledDiv, StyledText } from '../Elements/StyledComponent'
import { ReactComponent as NerdCharacter } from '../../Asset/page7/Nerd.svg'
const Nerd = () => {
  return (
    <StyledDiv
      width="100%"
      height="20%"
      left="50%"
      max_width="350px"
      max_height="350px"
      border-width="1px"
      border="10px"
      border_color="#F1ECEC"
      border_style="solid"
      bg="white"
      top="75%"
    >
      <StyledDiv left="50%" top="15%" width="70px" height="70px">
        <NerdCharacter />
      </StyledDiv>
      <StyledText top="40%" weight="400" size="34px" left="43%" line="32.2px">
        비주얼
      </StyledText>
      <StyledText
        top="58%"
        font="Pretend"
        fontWeight="bold"
        size="15px"
        color="#777777"
        line="18px"
        left="20%"
      >
        존재만으로 분위기를 녹이는 당신!
      </StyledText>
      <StyledText
        top="65%"
        font="Pretend"
        fontWeight="bold"
        size="15px"
        color="#777777"
        line="18px"
        left="23%"
      >
        바라만 보고 있어도 웃음이 나요
      </StyledText>
      <StyledDiv width="100%" left="50%" top="75%" height="25%" bg="#F1ECEC">
        <StyledText
          top="20%"
          font="Pretendard"
          fontWeight="bold"
          line="15.6px"
          size="16px"
          left="45%"
          color="#F49393"
        >
          주의!
        </StyledText>
        <StyledText
          top="50%"
          font="Pretendard"
          fontWeight="bold"
          line="15.6px"
          size="16px"
          left="32%"
          color="#1A1A1A"
        >
          주위에 물어볼 것!
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  )
}
export default Nerd
