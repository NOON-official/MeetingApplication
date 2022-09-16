import { StyledDiv, StyledButton } from "../../Elements/StyledComponent"
import { ReactComponent as Character } from '../../../Asset/mainPage/Character.svg';
import { Link } from 'react-router-dom';
const Done = ()=>{
return(
<StyledDiv position= "static" transform="0" left="0" height="100%" width="100%" display="flex" direction="column" justify_content="space-between" align_item="center">
        <StyledDiv top="20%" height="30%" left="50%"  width="90%">
          <Character/>
        </StyledDiv>
        <StyledDiv top="50%" height="13%" left="50%" width="90%" display="flex" direction="column" justify_content="space-between" align_item="center">
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
               여러분의 상대팀이 매칭되었습니다.
            </StyledDiv>
            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                상대팀의 미팅학개론을 확인해 주세요!
            </StyledDiv>
            
        </StyledDiv>
        <StyledDiv top="70%" height="20%" left="50%" width="90%" display="flex" direction="column" justify_content="center" align_item="center">
                {/**link 수정 필요 */}
                <Link to="/apply/2" style={{ textDecoration: 'none' }}>
                    <StyledButton position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    결과 조회하기
                    </StyledButton>
                </Link>
        </StyledDiv>

</StyledDiv>
)
}

export default Done