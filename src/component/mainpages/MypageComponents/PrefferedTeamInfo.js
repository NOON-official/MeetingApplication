import { StyledDiv, StyledText } from "../../Elements/StyledComponent";
import { useSelector } from "react-redux";
//job, age,university, height
const PrefferedTeamInfo = () => {
  const job = useSelector((state) => state.prefferedjobs);
    const age = useSelector((state) => state.prefferedage);
    const university = useSelector((state) => state.preffereduniversity);
    const height = useSelector((state)=> state.prefferedheight);
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
            2. 상대는 이런 팀을 원해요!
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
              <tbody>
              <tr>
                <th>직업</th>
                <td>
                  {job.map((data, index) => {
                    let local
                    if(data ==1){
                      local = '대학생'
                    }
                    else if(data == 2){
                      local ='직장인'
                    }
                    else if(data == 3){
                      local = "취준생"
                    }
                    else if(data == 4){
                      local ='대학원생'
                    }
                    if (index + 1 != job.length) {
                      return ` ${local} ,`;
                    } else {
                      return ` ${local} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>평균나이</th>
                <td>
                  {age.map((data, index) => {
                    if (index + 1 != age.length) {
                      return `${data}살~`;
                    } else return `${data}살`;
                  })}
                </td>
              </tr>
              <tr>
                <th>기피학교</th>
                <td>{university == 0 ? '같은학교는 싫어요' : '상관없어요'}</td>
              </tr>
              <tr>
                <th>선호키</th>
                <td>{height.map((data, index) => {
                    if (index + 1 != height.length) {
                      return ` ${data}cm ~ `;
                    } else return ` ${data}cm`;
                  })}</td>
              </tr>
              </tbody>
            </table>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    );
  };

  export default PrefferedTeamInfo 