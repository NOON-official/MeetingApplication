import { Container, MobileBox, StyledDiv ,StyledButton} from "../Elements/StyledComponent"
import MyInfo from "./MypageComponents/MyInfo"
import MyTeamInfo from "./MypageComponents/MyTeamInfo"
import PrefferedTeamInfo from "./MypageComponents/PrefferedTeamInfo"
import WantsInfo from "./MypageComponents/WantsInfo"
import { Link } from "react-router-dom"
import { ReMatchingMessage } from "../ErrorMessages/ReMatchingMessage"
import { useSelector } from "react-redux"
import { useState } from "react"
const MyPage = ()=>{
    const [modalOpen, setModalOpen]= useState(false)
    const openModal = () => {
        setModalOpen(true);
      };
      const closeModal = () => {
        setModalOpen(false);
      };
    let userLogin = useSelector((state)=> state.userLogin);
    let matchingStatus = JSON.parse(window.localStorage.getItem("matchingStatus"));
    let ourteamId = window.localStorage.getItem("ourteamId")
return(
    <Container height={'100%'} bg="#f8f3f3">
        <ReMatchingMessage
        open={modalOpen}
        close={closeModal}
        >

        </ReMatchingMessage>
        <MobileBox overflow="auto">
        {(userLogin== true && ourteamId!=-1)?
       
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
        {matchingStatus==1 ||matchingStatus==2 ?
        <div></div>
        : <div>
            <StyledButton onClick={openModal} size="18px"position="static" left="0" transform="0" height="45px" width="180px" >
            수정하기
            </StyledButton>
        </div>
            
}
       
        </StyledDiv>:
        <StyledDiv 
        left="50%"
        height="90%"
        width="90%"
        display="flex"
        justify_content="center"
        color="#777777"font="Nanum JungHagSaeng">미팅 신청 후 조회가능합니다.</StyledDiv>
        }
            
        </MobileBox>
    </Container>
)
}

export default MyPage