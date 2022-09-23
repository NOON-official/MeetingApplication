import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MobileBox, StyledDiv, StyledText } from '../Elements/StyledComponent';
import Universities from '../Universities';
const MyTeamInfo = () => {
  function binarySearch(arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let start = 0;
    let end = arr.length-1
    let mid
   
    while(start<=end){ //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다
    
    mid = parseInt((start+end)/2)
    
    if(target === arr[mid]["key"]){
      return arr[mid]["univ"];
    } else{
      if(target<arr[mid]["key"]){
        end = mid-1
      }
      else{
        start = mid+1
      }
    }
    }
    return -1
  
  };
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
              {
                  universities.map((data, index) => {
                    // 숫자가 들어옴
                    if(typeof(data)=="number"){
                    let univ = binarySearch(Universities,data)
                    if (index + 1 != universities.length) {
                      return  (
                      ` ${univ} ,`);
                    } else {
                      return (` ${univ} `);
                    }
                  }
                  else{
                    let univ = binarySearch(Universities,data["key"])
                    if (index + 1 != universities.length) {
                    
                      return  (
                      ` ${univ} ,`);
                    } else {
                      return (` ${univ} `);
                    }
                  }
                  })}
              </td>
            </tr>
            <tr>
              <th>지역</th>
              <td>
                {' '}
                {area.map((data, index) => {
                   let localArea
                   if(data ==1){
                     localArea = '상관없음'
                   }
                   else if(data == 2){
                     localArea ='강남'
                   }
                   else if(data == 3){
                     localArea = "건대"
                   }
                   else if(data == 4){
                     localArea ='사당'
                   }
                   else if (data ==5){
                     localArea = '신천'
                   }
                   else if (data == 6){
                     localArea = '이태원'
                   }
                   else if (data == 7){
                     localArea = ' 잠실'
                   }
                   else if (data == 8){
                     localArea ='홍대'
                   }
                   else if(data == 9){
                     localArea = '회기'
                   }
                   else if( data == 10){
                     localArea = '대학로'
                   }
                   else if(data == 11){
                     localArea = '왕십리'
                   }
                   else if(data ==12){
                     localArea ='성수'
                   }
                  if (index + 1 != area.length) {
                    return ` ${localArea} ,`;
                  } else {
                    return ` ${localArea} `;
                  }
                })}
              </td>
            </tr>
            <tr>
              <th>요일</th>
              <td>
                {day.map((data, index) => {
                  let local
                  if(data ==1){
                    local = '월요일'
                  }
                  else if(data == 2){
                    local ='화요일'
                  }
                  else if(data == 3){
                    local = "수요일"
                  }
                  else if(data == 4){
                    local ='목요일'
                  }
                  else if (data ==5){
                    local = '금요일'
                  }
                  else if (data == 6){
                    local = '토요일'
                  }
                  else if (data == 7){
                    local = ' 일요일'
                  }
                  if (index + 1 != day.length) {
                    return ` ${local} ,`;
                  } else {
                    return ` ${local} `;
                  }
                })}
              </td>
            </tr>
            <tr>
              <th>구성원</th>
              <td>
                {characters.map((data, index) => {
                  let local
                  if(data ==1){
                    local = '비주얼'
                  }
                  else if(data == 2){
                    local ='사회자'
                  }
                  else if(data == 3){
                    local = "개그맨"
                  }
                  else if(data == 4){
                    local ='깍두기'
                  }
                  if (index + 1 != characters.length) {
                    return ` ${local} ,`;
                  } else {
                    return ` ${local} `;
                  }
                })}
              </td>
            </tr>
            <tr>
              <th>스타일</th>
              <td>
                {appearance.map((data, index) => {
                  let local
                  if(data ==1){
                    local = '강아지상'
                  }
                  else if(data == 2){
                    local ='고양이상'
                  }
                  else if(data == 3){
                    local = "토끼상"
                  }
                  else if(data == 4){
                    local ='공룡상'
                  }
                  else if (data ==5){
                    local = '말상'
                  }
                  else if (data == 6){
                    local = '원숭이상'
                  }
                  else if (data == 7){
                    local = ' 여우상'
                  }
                  else if (data == 8){
                    local = ' 쥐상'
                  }
                  if (index + 1 != appearance.length) {
                    return ` ${local} ,`;
                  } else {
                    return ` ${local} `;
                  }
                })}
              </td>
            </tr>
            <tr>
              <th>mbti</th>
              <td>
                {mbti.map((data, index) => {
                  let local
                  if(data ==1){
                    local = 'ENFJ'
                  }
                  else if(data == 2){
                    local ='ENTJ'
                  }
                  else if(data == 3){
                    local = "ENFP"
                  }
                  else if(data == 4){
                    local ='ENTP'
                  }
                  else if (data ==5){
                    local = 'ESFP'
                  }
                  else if (data == 6){
                    local = 'ESFJ'
                  }
                  else if (data == 7){
                    local = ' ESTP'
                  }
                  else if (data == 8){
                    local = ' ESTJ'
                  }
                  else if(data ==9){
                    local = 'INFP'
                  }
                  else if(data == 10){
                    local ='INFJ'
                  }
                  else if(data == 11){
                    local = "INTP"
                  }
                  else if(data == 12){
                    local ='ISTP'
                  }
                  else if (data ==13){
                    local = 'ISFP'
                  }
                  else if (data == 14){
                    local = 'ISFJ'
                  }
                  else if (data == 15){
                    local = ' ISTJ'
                  }
                  else if (data == 16){
                    local = ' INTJ'
                  }
                  if (index + 1 != mbti.length) {
                    return ` ${local} ,`;
                  } else {
                    return ` ${local} `;
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
                if (index + 1 != want.length) {
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
