import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';

const MyTeamInfo = () => {
  const genderstate = useSelector((state) => state.gender);
  const num = useSelector((state) => state.num);
  const age = useSelector((state) => state.age);
  const universities = useSelector((state) => state.university);
  const area = useSelector((state) => state.area);
  const day = useSelector((state) => state.day);
  const appearance = useSelector((state) => state.appearance);
  const mbti = useSelector((state) => state.mbti);
  const characters = useSelector((state) => state.characters);
  const height = useSelector((state) => state.height);
  const gender = React.useMemo(() => (genderstate == 1 ? '남자' : '여자'), [genderstate]);
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
              <td>{height}cm</td>
            </tr>
          </table>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
const PrefferedInfo = () => {
  const job = useSelector((state) => state.prefferedjobs);
  const age = useSelector((state) => state.prefferedage);
  const university = useSelector((state) => state.preffereduniversity);
  const height = useSelector((state) => state.prefferedheight);
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
            <tr>
              <th>직업</th>
              <td>
                {job.map((data, index) => {
                  if (index + 1 != job.length) {
                    return ` ${data} ,`;
                  } else {
                    return ` ${data} `;
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
              <td>
                {height.map((data, index) => {
                  if (index + 1 != height.length) {
                    return ` ${data}cm ~ `;
                  } else return ` ${data}cm`;
                })}
              </td>
            </tr>
          </table>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
const WantInfo = () => {
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
const Body10 = () => {
  return (
    <Container>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="2%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv
            position="static"
            display="flex"
            direction="column"
            transform="0"
            width="100%"
            margin="5px 0 0 10px"
          >
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0" width="100%">
              <StyledText position=" static" size="0.8em" color="#F49393">
                당신만의 미팅학개론
              </StyledText>
              <StyledText position=" static" size="0.8em">
                을
              </StyledText>
            </StyledDiv>
            <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%">
              {/* TitleBox*/}
              <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
                {/* TextTitle*/}

                <StyledText position=" static" size="0.8em">
                  정리해드립니다.
                </StyledText>
              </StyledDiv>
              <StyledDiv
                position="static"
                transform="0"
                direction="row"
                size="20px"
                justify_content="center"
                align_item="center"
                margin=" 10px 0 0 10px"
              >
                {/*TextNumber*/}
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
        <StyledDiv max_width="350px" left="50%" top="17%" height="80%" width="100%" id="scrollbox" overflow="scroll">
          <StyledDiv
            left="50%"
            height="700px"
            width="95%"
            id="InfoBox"
            display="flex"
            direction="column"
            justify_content="space-around"
          >
            <MyTeamInfo></MyTeamInfo>
            <PrefferedInfo />
            <WantInfo />
          </StyledDiv>
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body10;
