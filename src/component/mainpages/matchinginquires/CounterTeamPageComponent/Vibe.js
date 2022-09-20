import { StyledDiv,StyledText } from "../../../Elements/StyledComponent";
const Vibe = () => {
    var partnerteamInfo = JSON.parse(window.sessionStorage.getItem("partnerTeamInfo")).ourteamPreference
    return (
      <StyledDiv
        position="static"
        transform="0"
        width="100%"
        display="inline-block"
        border_width="1px"
        border="10px"
        border_style="solid"
        border_color="#F1ECEC"
        borderBottom="1px solid #F1ECEC"
        bg="white"
  
      >
        <StyledDiv
          position="static"
          transform="0"
          display="flex"
          justify_content="start"
          borderBottom="1px solid #F1ECEC"
          width="90%"
          id="title"
          height="30px"
          margin="5%"
        >
          <StyledText position="static" font="Pretendard" line="16.8px" size="12px" fontWeight="600" color="#777777">
            3. 상대팀이 원하는 분위기
          </StyledText>
        </StyledDiv>
        <StyledDiv
          position="static"
          transform="0"
          display="inline-block"
          direction="column"
          justify_content="space-around"
          left="50%"
          top="50px"
          height="auto"
          width="90%"
          id="contents"
        >
          <StyledDiv width="100%" display="inline-block" height="auto" transform="0" position="static">
            <table>
              <tr>
                <td>
                  { partnerteamInfo.vibe.map((data, index) => {
                    let local
                    if(data ==1){
                      local = '술게임 좋아요'
                    }
                    else if(data == 2){
                      local ='보드게임 좋아요'
                    }
                    else if(data == 3){
                      local = "대화가 좋아요"
                    }
                    else if(data == 4){
                      local ='설레임이 좋아요'
                    }
                    else if (data ==5){
                      local = '재밌는게 좋아요'
                    }
                    else if (data == 6){
                      local = '마시고 죽자'
                    }
                    else if (data == 7){
                      local = ' 술은 싷어요'
                    }
                    else if (data == 8){
                      local = ' 구독과 좋아요'
                    }
                    else if (data == 9){
                      local = ' 아무거나 좋아요'
                    }
                    if (index + 1 != partnerteamInfo.vibe.length) {
                      return ` ${local} / `;
                    } else {
                      return ` ${local} `;
                    }
                  })}
                </td>
              </tr>
            </table>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    );
  };

  export default Vibe