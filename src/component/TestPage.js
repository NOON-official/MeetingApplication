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

  const columns1 = useMemo(
    () => [
      {
        accessor: "id",
        Header: "ID"
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
  const columns2=['id','남성유저 이름','인원','나이','희망나이','희망요일','지역','신청시간']//남성유저(2명) 테이블 배열
  

  let data1 =[];//남성유저3  데이터
  let data2 =[];//여성유저 3 데이터
  let data3=[]; //남성3
  let data4=[];//여성3 
useEffect(()=>{
  //남자 3
  client
    .get('api/admin/team/male/3')
    .then(async(res)=>{
  
     setMaleThreeTeam(res.data.data.maleTeam)
   
        //console.log(maleThreeTeam[0]['userId'])
    })
    .catch((err)=>{})
    
    //남자 2
    client
    .get('api/admin/team/male/2')
    .then(async(res)=>{
  
     setMaleTwoTeam(res.data.data.maleTeam)
   
        //console.log(maleThreeTeam[0]['userId'])
    })
    .catch((err)=>{})

    //여자3
    client
    .get('api/admin/team/female/3')
    .then(async(res)=>{
  
     setFemaleThreeTeam(res.data.data.femaleTeam)
   
        console.log(femaleThreeTeam[0]['userId'])
    })
    .catch((err)=>{})
    
    //남자 2
    client
    .get('api/admin/team/female/2')
    .then(async(res)=>{
  
     setFemaleTwoTeam(res.data.data.femaleTeam)
   
        console.log(femaleTwoTeam[0]['userId'])
    })
    .catch((err)=>{})
},[])

console.log("1",maleThreeTeam);
//남자 데이터 받기
if(maleThreeTeam)
{
for(let i=0; i<maleThreeTeam.length;i++)
{
  data1[i] ={'id' : maleThreeTeam[i]['userId'],'name': maleThreeTeam[i]['nickname'],'num': maleThreeTeam[i]['num'],
  'age' : maleThreeTeam[i]['age'], 'preferenceAge' : maleThreeTeam[i]['preferenceAge'],'day':maleThreeTeam[i]['day'],
  'area': maleThreeTeam[i]['area'], 'time': maleThreeTeam[i]['updatedAt'] }
}
}
//안비어있으면 ㄱㄱ
if(maleTwoTeam){
for(let i = 0; i<maleTwoTeam.length; i++)
{
  data3[i] ={'id' : maleTwoTeam[i]['userId'],'name': maleTwoTeam[i]['nickname'],'num': maleTwoTeam[i]['num'],
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
    data2[i] ={'id' : femaleThreeTeam[i]['userId'],'name': femaleThreeTeam[i]['nickname'],'num': femaleThreeTeam[i]['num'],
    'age' : femaleThreeTeam[i]['age'], 'preferenceAge' : femaleThreeTeam[i]['preferenceAge'],'day':femaleThreeTeam[i]['day'],
    'area': femaleThreeTeam[i]['area'], 'time': femaleThreeTeam[i]['updatedAt'] }
  }
}
if(femaleTwoTeam){
  for(let i=0; i<femaleTwoTeam.length;i++)
  {
    data4[i] ={'id' : femaleTwoTeam[i]['userId'],'name': femaleTwoTeam[i]['nickname'],'num': femaleTwoTeam[i]['num'],
    'age' : femaleTwoTeam[i]['age'], 'preferenceAge' : femaleTwoTeam[i]['preferenceAge'],'day':femaleTwoTeam[i]['day'],
    'area': femaleTwoTeam[i]['area'], 'time': femaleTwoTeam[i]['updatedAt'] }
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

      }}> 관리자페이지</div>

   
      <StyledDiv  width="95%" height="100%" left="50%">
        <TableContainer>
          <BoxContainer style={{width:"50%"}}><h2>남자</h2><Table columns={columns1} data={maleData} ></Table></BoxContainer>
          <BoxContainer style={{width:"50%"}}><h2>여자</h2><Table columns={columns1} data={femaleData} ></Table></BoxContainer>
          </TableContainer>
         <BoxContainer><AdminDataPost></AdminDataPost></BoxContainer> 


       
      </StyledDiv>
    </div>

  );
};
export default TestPage;
