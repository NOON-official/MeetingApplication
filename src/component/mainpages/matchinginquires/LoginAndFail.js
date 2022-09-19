import { StyledDiv, StyledButton } from "../../Elements/StyledComponent"
import { ReactComponent as Character } from '../../../Asset/mainPage/FailCharacter.svg';
import { Link } from 'react-router-dom';
import client from "../../../api";
const Fail = ()=>{
  async function ReMatching(){
    client
  }
return(
<StyledDiv position= "static" transform="0" left="0" height="100%" width="100%" display="flex" direction="column" justify_content="space-between" align_item="center">
        <StyledDiv top="25%" height="25%" left="50%"  width="90%">
          <Character/>
        </StyledDiv>
        <StyledDiv top="50%" height="13%" left="50%" width="90%" display="flex" direction="column" justify_content="space-between" align_item="center">
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
              아쉽게도 이번에는 원하는
            </StyledDiv>
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                상대팀이 매칭되지 않았어요.
            </StyledDiv>
            
        </StyledDiv>
        <StyledDiv top="70%" height="20%" left="50%" width="90%" display="flex" direction="column" justify_content="center" align_item="center">
                {/**link 수정 필요 */}
                
                    <StyledButton position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    한번 더 진행하기 
                    </StyledButton>
                
        </StyledDiv>

</StyledDiv>
)
}

export default Fail