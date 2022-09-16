import { StyledDiv, StyledText } from "../../Elements/StyledComponent";
import { useSelector } from "react-redux";
//gender, num, age,universities,area,day, appearance,mbti,characters,height
const MyTeamInfo = () => {
    const gender = useSelector((state) => state.gender);
    const num = useSelector((state) => state.num);
    const age = useSelector((state) => state.age);
    const universities = useSelector((state) => state.university);
    const area = useSelector((state) => state.area);
    const day = useSelector((state) => state.day);
    const appearance = useSelector((state) => state.appearance);
    const mbti = useSelector((state) => state.mbti);
    const characters = useSelector((state)=> state.characters);
    const height = useSelector((state)=> state.height);
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
        id="MyTeamInfo"
      >
        <StyledDiv
          position="static"
          transform="0"
          display="flex"
          justify_content="start"
          borderBottom="1px solid #F1ECEC"
          width="90%"
          height="30px"
          id="title"
          margin="5%"
        >
          <StyledText position="static" font="Pretendard" line="16.8px" size="12px" fontWeight="600" color="#777777">
            1. 우리는 이런 팀이에요!
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
                <th>성별</th>
                <td>{gender}</td>
              </tr>
              <tr>
                <th>인원수</th>
                <td>{num} 명</td>
              </tr>
              <tr>
                <th>나이</th>
                <td>평균 {age}살</td>
              </tr>
              <tr>
                <th>학교</th>
                <td>
                  {universities.map((data, index) => {
                    if (index + 1 != universities.length) {
                      return ` ${data} ,`;
                    } else {
                      return ` ${data} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>지역</th>
                <td>
                  {' '}
                  {area.map((data, index) => {
                    if (index + 1 != area.length) {
                      return ` ${data} ,`;
                    } else {
                      return ` ${data} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>요일</th>
                <td>
                  {day.map((data, index) => {
                    if (index + 1 != day.length) {
                      return ` ${data} ,`;
                    } else {
                      return ` ${data} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>구성원</th>
                <td>
                  {characters.map((data, index) => {
                    if (index + 1 != characters.length) {
                      return ` ${data} ,`;
                    } else {
                      return ` ${data} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>스타일</th>
                <td>
                  {appearance.map((data, index) => {
                    if (index + 1 != appearance.length) {
                      return ` ${data} ,`;
                    } else {
                      return ` ${data} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>mbti</th>
                <td>
                  {mbti.map((data, index) => {
                    if (index + 1 != mbti.length) {
                      return ` ${data} ,`;
                    } else {
                      return ` ${data} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>평균키</th>
                <td>
                  {height}cm
                </td>
              </tr>
            </table>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    );
  };

  export default MyTeamInfo