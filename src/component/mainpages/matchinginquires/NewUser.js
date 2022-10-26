import { StyledDiv, StyledButton } from "../../Elements/StyledComponent"
import { ReactComponent as Star } from '../../../Asset/finalPage/1.svg';
import { ReactComponent as StarYellow } from '../../../Asset/finalPage/2.svg';
import { ReactComponent as Heart } from '../../../Asset/finalPage/3.svg';
import { ReactComponent as Character } from '../../../Asset/finalPage/4.svg';
import { Link } from 'react-router-dom';
const NewUser = ()=>{
return(
<StyledDiv position= "static" transform="0" left="0" height="100%" width="100%" display="flex" direction="column" justify_content="space-between" align_item="center">
        <StyledDiv top="10%" height="40%" left="50%"  width="90%">
          <StyledDiv top="20%"left="70%">
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
        <StyledDiv top="50%" height="20%" left="50%" width="90%" display="flex" direction="column" justify_content="space-between" align_item="center">
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="32px">
              아직 미팅학개론을 이용해보시지
            </StyledDiv>
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="32px">
               않으셨군요. 여러분을 기다리는  
            </StyledDiv>
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="32px">
               분들이 있어요. 미팅 한 번?
            </StyledDiv>
        </StyledDiv>
        <StyledDiv top="70%" height="20%" left="50%" width="90%" display="flex" direction="column" justify_content="center" align_item="center">
                {/**link 수정 필요 
                <Link to="/apply/2" style={{ textDecoration: 'none' }}>
                    <StyledButton position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    미팅할래요
                    </StyledButton>
                </Link>
                */}
        </StyledDiv>

</StyledDiv>
)
}

export default NewUser