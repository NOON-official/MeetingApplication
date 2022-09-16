import { useSelector } from "react-redux";
import { StyledDiv, StyledText } from "../../Elements/StyledComponent";
const WantsInfo = () => {
    const want = useSelector((state) => state.prefferedthing);
  
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
        id="WantInfo"
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
            3. 그날의 분위기는 어땠으면 좋겠어요?
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
                  {want.map((data, index) => {
                    if (index + 1 != want.length) {
                      return ` ${data} / `;
                    } else {
                      return ` ${data} `;
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

  export default WantsInfo