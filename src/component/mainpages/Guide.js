import { Container } from "../Elements/StyledComponent"
import { MobileBox, StyledDiv, StyledButton } from "../Elements/StyledComponent"
const Guide =()=>{
    return(
<Container height={'100%'} bg="#f8f3f3">
<MobileBox overflow="auto" justify_content=" center" height="100%">
    {/** white space box */}
    <StyledDiv  display= "flex" direction="column" justify_content="space-around" align_item="center"position=" static" transform="0" left="0" height="80%" bg="white" width="90%" border="10px">
            {/** from here each div is for paragraph */}
            <StyledDiv  height="30%" display= "flex" direction="column" justify_content="space-around"position=" static" transform="0" left="0" >
                <StyledDiv weight="bold" text_align="start" font="Pretendard" size="23px" color="#777777" position="static" transform="0" left="0" >
                    미팅학개론은?
                </StyledDiv>
                <StyledDiv  height="50%" position="static" transform="0" left="0" display="flex" direction="column" justify_content=" space-around">
                    <StyledDiv weight="700" text_align="start" font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    - 설렘 반 재미 반. 여러분의 이상형에 맞는 상대팀을 <br/> 매칭해드리고 채팅방까지 파드려요. 
                    </StyledDiv>
                    
                    <StyledDiv weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" direction="column">
                    - 오픈채팅으로 서로 신원노출 위험까지 제로! <br/>미팅을 쉽고 간편하게. 
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv  height="50%" display= "flex" direction="column" justify_content="space-around" align_item="center" position=" static" transform="0" left="0" >
                <StyledDiv  position="static" transform="0" left="0" display="flex" direction="column" width="100%" >
                    <StyledDiv weight="bold" display="flex" text_align="start"font="Pretendard" size="23px" color="#777777" position="static" transform="0" left="0" >
                    미팅학개론 진행 방식
                    </StyledDiv>
                </StyledDiv>
                <StyledDiv  position="static" transform="0" height="70%" left="0" display="flex" direction="column" justify_content="space-around">
                <StyledDiv  weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    0. 신청하기 전 팀을 구해주세요 (2:2 혹은 3:3)
                    </StyledDiv>
                    <StyledDiv  weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    1. 팀 대표 혼자만! 매칭 시작버튼 누르고 정보입력하기! 
                    </StyledDiv>
                    <StyledDiv weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    2. 회원가입까지 하면 이틀 이내로 매칭결과를 문자로<br/> 보내드려요. 
                    </StyledDiv>
                    <StyledDiv weight="700" text_align="start"font="Pretendard" size="13px" color="#777777" position="static" transform="0" left="0" display="flex" >
                    3. 보내드린 링크를 통해 오픈채팅방에 접속하면 매칭 <br/> 완료!
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv  height="20%" display= "flex" direction="column" justify_content="space-around" align_item="center" position=" static" transform="0" left="0" >
            <a href="https://furry-bank-197.notion.site/9c7eacd16070426fab83478adfd4c091"> 
                    <StyledButton position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    자세히 알아보기
                    </StyledButton>
                </a>
            </StyledDiv>
            </StyledDiv>
    
</MobileBox>
</Container>
    )
}

export default Guide