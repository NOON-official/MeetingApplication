import styled from 'styled-components';
import { StyledDiv } from './Elements/StyledComponent';

import React, { useState, useEffect } from 'react'
import client from '../api';
const FullDiv = styled.div`
  width: 100%;
`;
//useCallback 특정 파리미터가 함수를 변환 


const TestPage =  () => {

  const [maleThreeTeam , setMaleThreeTeam] = useState([]);
  const [maleTwoTeam, setMaleTwoTeam] =useState([]);
  const [femaleTwoTeam, setFemaleTwoTeam] =useState([]);
  const [femaleThreeeTeam, setFemaleThreeTeam] =useState([]);
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
  const columns4=['id','남성유저 이름','인원','나이','희망나이','희망 요일']//남성유저(3명) 테이블 배열
  
  const data = [
    ['me', 'a', 'info'],
    ['me', 'b', 'info'],
    ['me', 'c', 'info'],
    ['he', 'c', 'info'],
    ['he', 'd', 'info'],
  ];

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
      console.log("1",maleThreeTeam);
      })
   
        //console.log(maleThreeTeam[0]['userId'])
    })
    .catch((err)=>{})
},[])

console.log("2",maleThreeTeam);
console.log("0번째",maleThreeTeam[0]);

for(let i=0; i<maleThreeTeam.length;i++)
{
  data1[i] ={'userID' : maleThreeTeam[i]['userId'],'name': "민수",'num': maleThreeTeam[i]['num'],'age' : maleThreeTeam[i]['age'], 'preferenceAge' : maleThreeTeam[i]['preferenceAge'],'day':maleThreeTeam[i]['day']}
}
console.log(data1)

  return (
    <div>
      <div style={{
        marginBottom :'30px'

      }}> 매칭 리스트업</div>
      <StyledDiv left="30%" width="50%" height="200px">
      <table border="1"color="blue">
        <thead >
          {columns2.map((column)=>
          (<th style={{width:"5vw"}}key={column}>{column}</th>)
          )}
        </thead>
       
        <tbody>
        {data1.map(({ userID, name, num,age,preferenceAge,day }) => (
          <tr key={userID + name+ num+age+preferenceAge+day}>
            <td>{userID}</td>
            <td>{name}</td>
            <td>{num}</td>
            <td>{age}</td>
            <td>{preferenceAge}</td>
            <td>{day}</td>
          </tr>
        ))}
      </tbody>
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
