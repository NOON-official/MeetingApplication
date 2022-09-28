import { StyledDiv, StyledText } from "../../Elements/StyledComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect  } from "react";
import client from "../../../api";

import Universities from "../../Universities";
//gender, num, age,universities,area,day, appearance,mbti,characters,height
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
  const dispatch= useDispatch()
  
  const gender = useSelector((state)=> state.gender)
  const num = useSelector((state)=> state.num)
  const age = useSelector((state)=> state.age)
  const universities= useSelector((state)=> state.university)
  const area = useSelector((state)=> state.area)
  const day = useSelector((state)=> state.day)
  const characters = useSelector((state)=> state.characters)
  const appearance = useSelector((state)=> state.appearance)
  const mbti = useSelector((state)=> state.mbti)
  const height = useSelector((state)=> state.height);
  
 
  const GetData=()=>{
   
    let id = window.sessionStorage.getItem('ourteamId')
    //let accessToken = window.sessionStorage.getItem('access')
    client
    .get(`api/team/${id}`)
    //delete header
    .then((res)=>{
      
      {res.data.data.ourteam.gender==1? dispatch({type:'SET_MALE'}):dispatch({type:"SET_FEMALE"})}
      dispatch({type:'NUMBER', payload:res.data.data.ourteam.num})
      dispatch({type:'AGE', payload:res.data.data.ourteam.age})
      dispatch({type:'GET_UNIVERSITIES', payload:res.data.data.ourteam.university})
      dispatch({type:'GET_AREA', payload: res.data.data.ourteam.area})
      dispatch({type:'GET_DAY', payload:res.data.data.ourteam.day})
      dispatch({type:'GET_CHARACTER',payload:res.data.data.ourteam.role})
      dispatch({type:'GET_APPREANCE', payload:res.data.data.ourteam.appearance})
      dispatch({type:'GET_MBTI',payload:res.data.data.ourteam.mbti})
      dispatch({type:'GET_HEIGHT', payload:res.data.data.ourteam.height})
      dispatch({type:'GET_JOB', payload: res.data.data.ourteam.job})
      dispatch({type:'GET_FASHION', payload:res.data.data.ourteam.fashion})
      dispatch({type:'GET_INTRO', payload:res.data.data.ourteam.intro})
      dispatch({type:'GET_PREFFEREDJOB', payload:res.data.data.ourteamPreference.job})
      dispatch({type:'GET_PREFFEREDUNIVERSITIES', payload:res.data.data.ourteamPreference.sameUniversity})
      dispatch({type:'GET_PREFFEREDAGE', payload:res.data.data.ourteamPreference.age})
      dispatch({type:'GET_PREFFEREDHEIGHT', payload:res.data.data.ourteamPreference.height})
      dispatch({type:'GET_PREFFEREDTHING', payload:res.data.data.ourteamPreference.vibe})
    })
    .catch((err)=>console.log(err))
  }
    useEffect(()=>{
    GetData()
    },[])
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
            <tbody>
              <tr>
                <th>성별</th>
                <td>{gender==1?'남자':'여자'}</td>
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
                <td>
                  {height}cm
                </td>
              </tr>
              </tbody>
            </table>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    );
  };

  export default MyTeamInfo