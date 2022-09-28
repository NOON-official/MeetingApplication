import styled from 'styled-components';
import { StyledDiv } from './Elements/StyledComponent';

import React, { useState, useEffect } from 'react'
import client from '../api';
const FullDiv = styled.div`
  width: 100%;
`;
//useCallback 특정 파리미터가 함수를 변환 


const TestPage =  () => {

  const [maleThreeTeam , setMaleThreeTeam] = useState();
  const [maleTwoTeam, setMaleTwoTeam] =useState();
  const [femaleTwoTeam, setFemaleTwoTeam] =useState();
  const [femaleThreeeTeam, setFemaleThreeTeam] =useState();
  function hideColumn() {
    const column = document.getElementById('others');
    column.style.display = 'none';
  }
  function showColumn() {
    const column = document.getElementById('others');
    column.style.display = '';
  }
  //여기서 데이터 채우기 
  //const maleTwoData =MaleTwoData()
  //const femaleTwoDate =FemaleTwoData()
  //const femaleThreewoData =FemaleThreewoData()
  const columns1=['id','여성유저 이름','인원','나이','희망나이','희망요일']//여성유저(2명) 테이블 배열
  const columns2=['id','남성유저 이름','인원','나이','희망나이','희망요일']//남성유저(2명) 테이블 배열
  const columns3=['id','여성유저 이름','인원','나이','희망나이','희망요일']//여성유저(3명) 테이블 배열
  const columns4=['id','남성유저 이름','인원','나이','희망나이','희망요일']//남성유저(3명) 테이블 배열
  
  let data=[0,0,0];
  let data1 =[];//남성유저 3명 데이터
  let data2 =[];//남성유저 2명 데이터
  let data3 =[];//여성유저 3명 데이터
  let data4 =[];//여성유저 2명 데이터
useEffect(()=>{
  client
    .get('api/admin/team/male/3')
    .then(async(res)=>{
  
     setMaleThreeTeam(res.data.data.maleTeam)
     .then(()=>{
      console.log("1",maleThreeTeam)
      })
   
        //console.log(maleThreeTeam[0]['userId'])
    })
    .catch((err)=>{})



},[])
console.log("2",maleThreeTeam)
/*
for(let i=0; i<maleThreeTeam.length;i++)
{
  data1[i] ={'age' : maleThreeTeam[i]['age'], 'preferenceAge' : maleThreeTeam[i]['preferenceAge']}
}
console.log(data1)
*/
  let sameuser = [];
  let nowUserNum = 0;
  let nowUserName = data[0][0];
  data.map((user, idx) => {
    if (user[0] === nowUserName) {
      nowUserNum += 1;
    } else {
      sameuser.push([nowUserName, nowUserNum]);
      nowUserNum = 1;
      nowUserName = user[0];
    }
    if (idx === data.length - 1) {
      sameuser.push([user[0], nowUserNum]);
    }
  });
  let prevUserName = null;
  return (
    <div>
      <div> 매칭 리스트업</div>
      <StyledDiv left="50%" width="100%">
        <table width="100%" border="1" bordercolor="blue">
          <tr>
            <td>
              <td id="womanName"> 여성유저 이름</td>
              <td id="womanNum">인원</td>
              <td id="womanAge">나이</td>
              <td id="womanPrefferedAge">희망나이</td>
              <td id="womanDay">요일</td>
            </td>
            <td>
              <td id="manName"> 남성유저 이름</td>
              <td id="manNum">인원</td>
              <td id="manAge">나이</td>
              <td id="manPrefferedAge">희망나이</td>
              <td id="manDay">요일</td>
              <td id="others">기타</td>
              <td>매칭버튼</td>
            </td>
          </tr>
          {data.map((data, idx) => {
            if (data[0] !== prevUserName) {
              return sameuser.map((sameuserdata) => {
                if (sameuserdata[0] === data[0]) {
                  console.log('true');

                  prevUserName = data[0];
                  return (
                    <tr key={idx}>
                      <td rowSpan={sameuserdata[1]}>
                        <td id="womanName"> {data[0]}</td>
                        <td id="womanNum">인원</td>
                        <td id="womanAge">나이</td>
                        <td id="womanPrefferedAge">희망나이</td>
                        <td id="womanDay">요일</td>
                      </td>
                      <td>
                        <td id="manName"> {data[1]}</td>
                        <td id="manNum">인원</td>
                        <td id="manAge">나이</td>
                        <td id="manPrefferedAge">희망나이</td>
                        <td id="manDay">요일</td>
                        <td id="others">{data[2]}</td>
                        <td>
                          <button />
                        </td>
                      </td>
                    </tr>
                  );
                }
              });
            } else {
              return (
                <tr key={idx}>
                  <td>
                    <td id="manName"> {data[1]}</td>
                    <td id="manNum">인원</td>
                    <td id="manAge">나이</td>
                    <td id="manPrefferedAge">희망나이</td>
                    <td id="manDay">요일</td>
                    <td id="others">{data[2]}</td>
                    <td>
                      <button />
                    </td>
                  </td>
                </tr>
              );
            }
          })}
        </table>
        <button
          onClick={() => {
            hideColumn();
          }}
        ></button>
        <button
          onClick={() => {
            showColumn();
          }}
        ></button>
      </StyledDiv>
    </div>
  );
};
export default TestPage;
