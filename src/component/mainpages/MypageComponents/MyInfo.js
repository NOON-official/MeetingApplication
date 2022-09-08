import { StyledDiv, StyledText } from "../../Elements/StyledComponent";
import { useSelector } from "react-redux";
//name, phoneNumbe
const MyInfo = (r) => {
    
    return (
      <StyledDiv
        position="static"
        transform="0"
        width="100%"
        height="auto"
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
            내정보
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
                <th>이름</th>
                <td>
                  규하
                </td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>
                  010-4983-8022
                </td>
                <td>
                    {<button> 변경</button>}
                </td>
              </tr>
              
            </table>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    );
  };

  export default MyInfo 