import { Container } from "../Elements/StyledComponent"
import { MobileBox, StyledDiv } from "../Elements/StyledComponent"
const Guide =()=>{
    return(
<Container height={'100%'} bg="#f8f3f3">
<MobileBox overflow="auto" justify_content=" center" height="100%">
    {/** white space box */}
    <StyledDiv  display= "flex" direction="column" justify_content="space-around" align_item="center"position=" static" transform="0" left="0" height="80%" bg="white" width="90%" border="10px">
            {/** from here each div is for paragraph */}
            <StyledDiv  height="40%" display= "flex" direction="column" justify_content="space-around"position=" static" transform="0" left="0" >
                <StyledDiv text_align="start" font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" >
                    미팅학개론은?
                </StyledDiv>
                <StyledDiv  position="static" transform="0" left="0" display="flex" direction="column">
                    <StyledDiv text_align="start" font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    팅학개론은 대학생활의 낭만을 찾아주고자 모인
                    </StyledDiv>
                    <StyledDiv text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    5용사가 매칭해주는 자동매칭 미팅 서비스입니다.
                    </StyledDiv>
                    <StyledDiv text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    간편한 자동 매칭부터 단톡방까지 미팅학개론의 편리한 <br/>서비스를 이용해보세요!
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv  height="60%" display= "flex" direction="column" justify_content="space-around" align_item="center" position=" static" transform="0" left="0" >
                <StyledDiv  position="static" transform="0" left="0" display="flex" direction="column" width="100%" >
                    <StyledDiv display="flex" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" >
                        미팅학개론 진행 방식
                    </StyledDiv>
                    <StyledDiv  display="flex"text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" >
                        미팅학개론의 진행방식은 다음과 같습니다.
                    </StyledDiv>
                </StyledDiv>
                <StyledDiv  position="static" transform="0" height="70%" left="0" display="flex" direction="column" justify_content="space-around">
                    <StyledDiv text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    1. 상단 홈 화면에서 매칭시작을 누른 후 본인 팀의 <br/>정보를 입력해주세요.
                    </StyledDiv>
                    <StyledDiv text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    2. 입력 후 전화번호와 카카오톡 인증을 하면 3일 이내 <br/> 원하는 상대팀을 매칭해드려요.
                    </StyledDiv>
                    <StyledDiv text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    3. 매칭된 상대방이 마음에 든다면 수락을 누르시고 <br/>그 후에 카카오톡 오픈채팅 방을 파드려요.
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
            </StyledDiv>
    
</MobileBox>
</Container>
    )
}

export default Guide