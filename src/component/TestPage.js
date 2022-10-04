import styled from 'styled-components';
import { BoxContainer, Container, MobileBox, SliderBox, StyledDiv } from './Elements/StyledComponent';
import {useTable} from "react-table";
import React, { useState, useEffect,useMemo } from 'react'
import client from '../api';
import Table from './Table';
import AdminDataPost from './Admin/AdminDataPost';
const FullDiv = styled.div`
  width: 100%;
`;
//useCallback 특정 파리미터가 함수를 변환 
const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify_content || 'space-around'};
  top: ${(props) => props.top || '5%'};

`;

const TestPage =  () => {

  const [maleThreeTeam , setMaleThreeTeam] = useState([]);
  const [maleTwoTeam, setMaleTwoTeam] =useState([]);
  const [femaleTwoTeam, setFemaleTwoTeam] =useState([]);
  const [femaleThreeTeam, setFemaleThreeTeam] =useState([]);
  const [maleMatchingSuccess, setMaleMatching]=useState([]);
  const [femaleMatchingSuccess, setFemaleMatching]=useState([]);
  const [maleMatchingFail, setMaleMatchingFail] =useState([]);
  const [femaleMatchingFail, setFemaleMatchingFail] =useState([]);

  const columns1 = useMemo(
    () => [
      {
        accessor: "id",
        Header: "TeamID"
      },
      {
        accessor: "name",
        Header: "이름"
      },
      {
        accessor: "num",
        Header: "인원"
      },
      {
        accessor: "age",
        Header: "나이"
      },
      {
        accessor: "preferenceAge",
        Header: "선호나이"
      },
      {
        accessor: "day",
        Header: "선호요일"
      },
      {
        accessor: "area",
        Header: "지역"
      },
      {
        accessor: "time",
        Header: "신청시간"
      }

    ],
    []
  );
  
  const columns2 = useMemo(
    () => [
      {
        accessor: "teamId",
        Header: "TeamID"
      },
      {
        accessor: "otherTeamID",
        Header: "상대 TeamID"
      },
      {
        accessor: "name",
        Header: "이름"
      },
      {
        accessor: "phone",
        Header: "폰번호"
      },
     

    ],
    []
  );
  let data1 =[];//남성유저3  데이터
  let data2 =[];//여성유저 3 데이터
  let data3=[]; //남성3
  let data4=[];//여성3 
  let data5=[];//남성 매칭완료
  let data6=[];//여성 매칭완료
  let data7=[];//남성 매칭실패
  let data8=[];//여성매칭실패
useEffect(()=>{
  //남자 3
  client
    .get('api/admin/team/male/3')
    .then(async(res)=>{ 
     setMaleThreeTeam(res.data.data.maleTeam)
    })
    .catch((err)=>{})
    
    //남자 2
    client
    .get('api/admin/team/male/2')
    .then(async(res)=>{
  
     setMaleTwoTeam(res.data.data.maleTeam)
   
      
    })
    .catch((err)=>{})

    //여자3
    client
    .get('api/admin/team/female/3')
    .then(async(res)=>{
  
     setFemaleThreeTeam(res.data.data.femaleTeam)
   
        
    })
    .catch((err)=>{})
    
    //남자 2
    client
    .get('api/admin/team/female/2')
    .then(async(res)=>{
  
     setFemaleTwoTeam(res.data.data.femaleTeam)
   
    })
    .catch((err)=>{})

    //남자 성공

    client
    .get('api/admin/team/matching/success/male')
    .then(async(res)=>{
  
     setMaleMatching(res.data.data.maleTeam);
    })
    .catch((err)=>{})

    //여자성공
    client
    .get('api/admin/team/matching/success/female')
    .then(async(res)=>{
  
     setFemaleMatching(res.data.data.femaleTeam);
    })
    .catch((err)=>{})

    //남자 실패
    client
    .get('api/admin/team/matching/fale/male')
    .then(async(res)=>{
  
     setMaleMatchingFail(res.data.data.maleTeam);
    })
    .catch((err)=>{})

    //여자실패 
    client
    .get('api/admin/team/matching/fail/female')
    .then(async(res)=>{
  
     setFemaleMatchingFail(res.data.data.femaleTeam);
    })
    .catch((err)=>{})
},[])

console.log("1",maleThreeTeam);
//남자 데이터 받기
if(maleThreeTeam)
{
for(let i=0; i<maleThreeTeam.length;i++)
{
  data1[i] ={'id' : maleThreeTeam[i]['ourteamId'],'name': maleThreeTeam[i]['nickname'],'num': maleThreeTeam[i]['num'],
  'age' : maleThreeTeam[i]['age'], 'preferenceAge' : maleThreeTeam[i]['preferenceAge'],'day':maleThreeTeam[i]['day'],
  'area': maleThreeTeam[i]['area'], 'time': maleThreeTeam[i]['updatedAt'] }
}
}
//안비어있으면 ㄱㄱ
if(maleTwoTeam){
for(let i = 0; i<maleTwoTeam.length; i++)
{
  data3[i] ={'id' : maleTwoTeam[i]['ourteamId'],'name': maleTwoTeam[i]['nickname'],'num': maleTwoTeam[i]['num'],
  'age' : maleTwoTeam[i]['age'], 'preferenceAge' : maleTwoTeam[i]['preferenceAge'],'day':maleTwoTeam[i]['day'],
  'area': maleTwoTeam[i]['area'], 'time': maleTwoTeam[i]['updatedAt'] }
}
}

/*
for(let i=0; i<femaleThreeTeam.length;i++)
{
  data2[i] ={'userID' : femaleThreeTeam[i]['userId'],'name': femaleThreeTeam[i]['nickname'],'num': femaleThreeTeam[i]['num'],'age' : femaleThreeTeam[i]['age'], 'preferenceAge' : femaleThreeTeam[i]['preferenceAge'],'day':femaleThreeTeam[i]['day']}
}
*/

if(femaleThreeTeam)
{
for(let i=0; i<femaleThreeTeam.length;i++)
  {
    data2[i] ={'id' : femaleThreeTeam[i]['ourteamId'],'name': femaleThreeTeam[i]['nickname'],'num': femaleThreeTeam[i]['num'],
    'age' : femaleThreeTeam[i]['age'], 'preferenceAge' : femaleThreeTeam[i]['preferenceAge'],'day':femaleThreeTeam[i]['day'],
    'area': femaleThreeTeam[i]['area'], 'time': femaleThreeTeam[i]['updatedAt'] }
  }
}
if(femaleTwoTeam){
  for(let i=0; i<femaleTwoTeam.length;i++)
  {
    data4[i] ={'id' : femaleTwoTeam[i]['ourteamId'],'name': femaleTwoTeam[i]['nickname'],'num': femaleTwoTeam[i]['num'],
    'age' : femaleTwoTeam[i]['age'], 'preferenceAge' : femaleTwoTeam[i]['preferenceAge'],'day':femaleTwoTeam[i]['day'],
    'area': femaleTwoTeam[i]['area'], 'time': femaleTwoTeam[i]['updatedAt'] }
  }
}
console.log(maleMatchingSuccess)
if(maleMatchingSuccess){
  for(let i=0; i<maleMatchingSuccess.length;i++)
  {
  data5[i] ={'id' : maleMatchingSuccess[i]['ourteamId'],
  'name': maleMatchingSuccess[i]['nickname'],'otherTeamID': maleMatchingSuccess[i]['partnerTeamId'],
    'phone' : maleMatchingSuccess[i]['phone']}
  }
}

console.log(femaleMatchingSuccess)
if(femaleMatchingSuccess){
  for(let i=0; i<femaleMatchingSuccess.length;i++){
  data6[i] ={'id' : femaleMatchingSuccess[i]['ourteamId'],
  'name': femaleMatchingSuccess[i]['nickname'],'otherTeamID': femaleMatchingSuccess[i]['partnerTeamId'],
    'phone' : femaleMatchingSuccess[i]['phone']}
  }
}

console.log(maleMatchingFail)
if(maleMatchingFail){
  for(let i=0; i<maleMatchingFail.length;i++){
  data7[i] ={'id' : maleMatchingFail[i]['ourteamId'],
  'name': maleMatchingFail[i]['nickname'],'otherTeamID': maleMatchingFail[i]['partnerTeamId'],
    'phone' : maleMatchingFail[i]['phone']}
  }
}

console.log(femaleMatchingFail)
if(femaleMatchingFail){
  for(let i=0; i<femaleMatchingFail.length;i++){
  data8[i] ={'id' : femaleMatchingFail[i]['ourteamId'],
  'name': femaleMatchingFail[i]['nickname'],'otherTeamID': femaleMatchingFail[i]['partnerTeamId'],
    'phone' : femaleMatchingFail[i]['phone']}
  }
}
//데이터 통합
let maleData = data1.concat(data3);
let femaleData =data2.concat(data4);
console.log("남자",data1);
//console.log("여자",data2);
  return (
    <div>
      <div style={{
        marginBottom :'30px'

      }}> <h1>관리자페이지</h1></div>

   
      
        <TableContainer>
          <BoxContainer style={{width:"50%"}}><h2>남자</h2><Table columns={columns1} data={maleData} ></Table></BoxContainer>
          <BoxContainer style={{width:"50%"}}><h2>여자</h2><Table columns={columns1} data={femaleData} ></Table></BoxContainer>
          </TableContainer>
        

        <TableContainer>
          <BoxContainer style={{width:"50%"}}><h2>남자매칭완료</h2><Table columns={columns2} data={data5} ></Table></BoxContainer>
          <BoxContainer style={{width:"50%"}}><h2>여자매칭완료</h2><Table columns={columns2} data={data6} ></Table></BoxContainer>
          </TableContainer>

          <TableContainer>
          <BoxContainer style={{width:"50%"}}><h2>남자매칭실패</h2><Table columns={columns2} data={data7} ></Table></BoxContainer>
          <BoxContainer style={{width:"50%"}}><h2>여자매칭실패</h2><Table columns={columns2} data={data8} ></Table></BoxContainer>
          </TableContainer>

         <BoxContainer><AdminDataPost></AdminDataPost></BoxContainer> 


 
    </div>

  );
};
export default TestPage;
