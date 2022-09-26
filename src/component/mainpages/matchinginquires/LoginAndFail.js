import { StyledDiv, StyledButton } from "../../Elements/StyledComponent"
import { ReactComponent as Character } from '../../../Asset/mainPage/FailCharacter.svg';
import { Link } from 'react-router-dom';
import client from "../../../api";
const Rematch = async()=>{
  await client
  .put('api/team/reapply',{ourteamId: window.sessionStorage.getItem('ourteamId')})
  .then((res)=>{
    alert("현재 입력하신 정보로 재매칭 합니다. \n 매칭 정보 수정이 필요하시다면 내정보 \n 수정하기 버튼을 클릭해주세요.")
 

  })
  
  .catch((err)=>{
    alert("실패")
  })
  window.location.reload()
}
const Fail = ()=>{
 
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
              
                    <StyledButton onClick={Rematch} position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    한번 더 진행하기 
                    </StyledButton>
               
        </StyledDiv>

</StyledDiv>
)
}

export default Fail