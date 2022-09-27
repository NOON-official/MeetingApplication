import { StyledDiv, StyledButton } from "../../Elements/StyledComponent"
import { ReactComponent as Character } from '../../../Asset/mainPage/Character.svg';
import client from "../../../api";
import { useEffect, useState } from "react";
import TeamInfo from "./CounterTeamPageComponent/TeamInfo";
import Vibe from "./CounterTeamPageComponent/Vibe";
import Intro from "./CounterTeamPageComponent/Intro";
import PrefferedInfo from "./CounterTeamPageComponent/PrefferedInfo";
const Done = ()=>{
    const [ where, setWhere] = useState(0)
    let id
    window.sessionStorage.getItem('ourteamId')? id= window.sessionStorage.getItem('ourteamId'):null;
        const GetData=async()=>{
            
             id = window.sessionStorage.getItem('ourteamId')
            //let accessToken = window.sessionStorage.getItem('access')
            let partnerTeamId
          
           
            await client
            .get(`api/team/partner-team-id/${id}`)
            //delete header
            //상대팀아이디 조회
            .then((res)=>{
                //res = 상대팀 아이디
                partnerTeamId = res.data.data.partnerTeamId  
            })
            .catch((err)=>console.log(err))
            await client 
            .get(`api/team/${partnerTeamId}`)
            //delete header
            .then((res)=>{
                window.sessionStorage.setItem("partnerTeamInfo", JSON.stringify(res.data.data));
            })
            .then(()=>{setWhere(1)})
            .catch((err)=> {
                console.log(err)
            })
          }
    
    const DonePage = () =>{
        if(where == 0)
        {
            return( <StyledDiv
                display="flex"
                direction="column"
                justify_content="space-around"
                align_item="center"
                position=" static"
                transform="0"
                left="0"
                height="80%"
                bg="white"
                width="90%"
                border="10px"
              >
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
                                
                                    <StyledButton position="static" left="0"height="45px" transform="0" width="180px" size="18px" onClick={GetData} >
                                    결과 조회하기
                                    </StyledButton>
                              
                        </StyledDiv>
                
                </StyledDiv>
            </StyledDiv>
                )
        }
        else if(where ==1){
            
            return(
                <StyledDiv
        left="50%"
        height="1000px"
        width="90%"
        id="InfoBox"
        display="flex"
        direction="column"
        justify_content="space-around"
        className="hello"
        >
                <TeamInfo/>
                <PrefferedInfo/>
                <Vibe/>
                <Intro/>
                <div>상대방의 정보를 스크린샷 찍어서 우리팀에게 공유해보세요!</div>
              <div>
              <StyledButton onClick={()=>{setWhere(2)}} position="static" left="0"height="45px" transform="0" width="180px" size="18px" >
                    연락처 보러가기
                    </StyledButton>
              </div>
                    
              
        </StyledDiv>
            )
        }
        else if (where==2){
            const [ openChatLink, setOpenChatLink] = useState()
            useEffect(()=>{
                client
                .get(`api/team/result/${id}`)
                .then(async(res)=>{
                     setOpenChatLink(res.data.data.matchingResult.chatLink)
                })
                .catch((err)=>{console.log(err)})
            },[])
         
            return(
                <StyledDiv
                display="flex"
                direction="column"
                justify_content="space-around"
                align_item="center"
                position=" static"
                transform="0"
                left="0"
                height="80%"
                bg="white"
                width="90%"
                border="10px"
              >
                <StyledDiv position= "static" transform="0" left="0" height="100%" width="100%" display="flex" direction="column" justify_content="space-between" align_item="center">
                        <StyledDiv top="20%" height="30%" left="50%"  width="90%">
                          <Character/>
                        </StyledDiv>
                        <StyledDiv top="50%" height="13%" left="50%" width="90%" display="flex" direction="column" justify_content="space-between" align_item="center">
                            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                               상대팀이 기다리고 있어요
                            </StyledDiv>
                            <StyledDiv position="static" transform="0" left="0" font="Nanum JungHagSaeng" color="1A1A1A" size="30px">
                                어서 빨리 오픈채팅으로 들어가보세요!!
                            </StyledDiv>
                            
                        </StyledDiv>
                        <StyledDiv top="70%" height="20%" left="50%" width="90%" display="flex" direction="column" justify_content="center" align_item="center">
                              <StyledDiv position="static" transform="0" left="0" height="60%" display="flex" direction="column" justify_content="space-around" align_item="center" width="80%" bg="#F1ECEC" border="10px">
                                    <StyledDiv position="static"display="flex" justify_content="center" align_item="center" transform="0" left="0" height="40%"font="Pretendard" color="#777777" size="12px">오픈채팅방 링크는 다음과 같습니다.</StyledDiv>
                                    <StyledDiv position="static" display="flex"justify_content="center" align_item="center"transform="0" left="0" height="50%" color="#777777" size="12px">
                                      
                                        <a href={openChatLink}> 
                                        {openChatLink}
                                            </a>
                                    </StyledDiv>
                                    {/**이부분에 링크 받아와서 넣기 */}
                              </StyledDiv>
                        
                        </StyledDiv>
                
                </StyledDiv>
            </StyledDiv>
            )
        }
    }
    return(<div>
        <DonePage/>
    </div>)


}

export default Done