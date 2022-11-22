import { StyledDiv } from '../../Elements/StyledComponent';
import { ReactComponent as Star } from '../../../Asset/finalPage/1.svg';
import { ReactComponent as StarYellow } from '../../../Asset/finalPage/2.svg';
import { ReactComponent as Heart } from '../../../Asset/finalPage/3.svg';
import { ReactComponent as Character } from '../../../Asset/finalPage/4.svg';
const WaitingPage = () => {
  return (
    <StyledDiv
      position="static"
      transform="0"
      left="0"
      height="100%"
      width="100%"
      display="flex"
      direction="column"
      justify_content="space-between"
      align_item="center"
    >
      <StyledDiv top="10%" height="40%" left="50%" width="90%">
        <StyledDiv top="20%" left="70%">
          <Star />
        </StyledDiv>
        <StyledDiv top="82%" left="28%">
          <StarYellow />
        </StyledDiv>
        <StyledDiv top="14%" left="28%">
          <Heart />
        </StyledDiv>
        <StyledDiv top="30%" left="50%">
          <Character />
        </StyledDiv>
      </StyledDiv>
      <StyledDiv
        top="50%"
        height="20%"
        left="50%"
        width="90%"
        display="flex"
        direction="column"
        justify_content="space-between"
        align_item="center"
      >
        <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="32px">
          상대방의 수락 여부를 확인하고
        </StyledDiv>
        <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="32px">
          있어요. 다음날 23시까지
        </StyledDiv>
        <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="32px">
          알려드릴께요.
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};

export default WaitingPage;
