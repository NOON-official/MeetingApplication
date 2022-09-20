import { StyledDiv,StyledText } from "../../../Elements/StyledComponent";
import Universities from "../../../Universities";

//gender, num, age,universities,area,day, appearance,mbti,characters,height
const TeamInfo = () => {
  var partnerteamInfo = JSON.parse(window.sessionStorage.getItem("partnerTeamInfo"))?.ourteam
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
            1. 상대는 이런 팀이에요!
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
                <td>{partnerteamInfo?.gender==1?'남자':'여자'}</td>
              </tr>
              <tr>
                <th>인원수</th>
                <td>{partnerteamInfo?.num} 명</td>
              </tr>
              <tr>
                <th>나이</th>
                <td>평균 {partnerteamInfo?.age}살</td>
              </tr>
              <tr>
                <th>학교</th>
                <td>
                  {
                  partnerteamInfo?.university.map((data, index) => {
                    // 숫자가 들어옴
                    if(typeof(data)=="number"){
                    let univ = binarySearch(Universities,data)
                    if (index + 1 != partnerteamInfo?.university.length) {
                      return  (
                      ` ${univ} ,`);
                    } else {
                      return (` ${univ} `);
                    }
                  }
                  else{
                    let univ = binarySearch(Universities,data["key"])
                    if (index + 1 != partnerteamInfo?.university.length) {
                    
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
                  {partnerteamInfo?.area.map((data, index) => {
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
                    if (index + 1 != partnerteamInfo?.area.length) {
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
                  {partnerteamInfo?.day.map((data, index) => {
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
                    if (index + 1 != partnerteamInfo?.day.length) {
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
                  {partnerteamInfo?.role.map((data, index) => {
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
                    if (index + 1 != partnerteamInfo?.role.length) {
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
                  {partnerteamInfo?.appearance.map((data, index) => {
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
                    if (index + 1 != partnerteamInfo?.appearance.length) {
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
                  {partnerteamInfo?.mbti.map((data, index) => {
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
                    if (index + 1 != partnerteamInfo?.mbti.length) {
                      return ` ${local} ,`;
                    } else {
                      return ` ${local} `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <th>평균키</th>
                <td>
                  {partnerteamInfo?.height}cm
                </td>
              </tr>
            </table>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
   ); 
  };

  export default TeamInfo