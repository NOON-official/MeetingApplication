import { Container, MobileBox, StyledDiv } from "../Elements/StyledComponent"
import MyInfo from "./MypageComponents/MyInfo"
import MyTeamInfo from "./MypageComponents/MyTeamInfo"
import PrefferedTeamInfo from "./MypageComponents/PrefferedTeamInfo"
import WantsInfo from "./MypageComponents/WantsInfo"

const MyPage = ()=>{
return(
    <Container height={'100%'} bg="#f8f3f3">
        <MobileBox overflow="auto">
            <StyledDiv
            left="50%"
            height="900px"
            width="90%"
            id="InfoBox"
            display="flex"
            direction="column"
            justify_content="space-around"
            >
            <MyInfo/>
            <StyledDiv position="static" font="Nanum JungHagSaeng" size="30px"transform="0" left="0" display="flex" justify_content="flex-start"margin="0 0 0 20px"align_itme="center">
                우리팀의 미팅학개론입니다.
            </StyledDiv>
            <MyTeamInfo/>
            <PrefferedTeamInfo/>
            <WantsInfo/>
            </StyledDiv>
        </MobileBox>
    </Container>
)
}

export default MyPage