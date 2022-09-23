import { Container, MobileBox, StyledDiv ,StyledButton} from "../Elements/StyledComponent"
import MyInfo from "./MypageComponents/MyInfo"
import MyTeamInfo from "./MypageComponents/MyTeamInfo"
import PrefferedTeamInfo from "./MypageComponents/PrefferedTeamInfo"
import WantsInfo from "./MypageComponents/WantsInfo"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const MyPage = ()=>{
    const userLogin = useSelector((state)=> state.userLogin);
return(
    <Container height={'100%'} bg="#f8f3f3">
        <MobileBox overflow="auto">
        {userLogin?
        <StyledDiv
        left="50%"
        height="1000px"
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
        <Link to="/apply/2" style={{ textDecoration: 'none' }}>
            <StyledButton size="18px"position="static" left="0" transform="0" height="45px" width="180px" >
            수정하기
            </StyledButton>
        </Link>
        </StyledDiv>:
        <StyledDiv 
        left="50%"
        height="90%"
        width="90%"
        display="flex"
        justify_content="center"
        color="#777777"font="Nanum JungHagSaeng">로그인 후에 이용해주세요</StyledDiv>
        }
            
        </MobileBox>
    </Container>
)
}

export default MyPage