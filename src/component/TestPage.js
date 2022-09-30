import styled from 'styled-components';
import { BoxContainer, Container, MobileBox, SliderBox, StyledDiv } from './Elements/StyledComponent';
import {useTable} from "react-table";
import React, { useState, useEffect,useMemo } from 'react'
import client from '../api';
import Table from './Table';
const FullDiv = styled.div`
  width: 100%;
`;
//useCallback 특정 파리미터가 함수를 변환 
const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify_content || 'space-around'};
  position: absolute;
  top: ${(props) => props.top || '5%'};
  height: 10%;
  width: 100%;
  float: left;
  left: ${(props) => props.left};
`;

const TestPage =  () => {

  const [maleThreeTeam , setMaleThreeTeam] = useState([]);
  const [maleTwoTeam, setMaleTwoTeam] =useState([]);
  const [femaleTwoTeam, setFemaleTwoTeam] =useState([]);
  const [femaleThreeTeam, setFemaleThreeTeam] =useState([]);

  //여기서 데이터 채우기 
  //const maleTwoData =MaleTwoData()
  //const femaleTwoDate =FemaleTwoData()
  //const femaleThreewoData =FemaleThreewoData()
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
  

  let data1 =[];//남성유저  데이터
  let data2 =[];//여성유저  데이터
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

console.log("1",maleThreeTeam);
//console.log("여자",femaleThreeTeam)
for(let i=0; i<maleThreeTeam.length;i++)
{
  data1[i] ={'id' : maleThreeTeam[i]['userId'],'name': maleThreeTeam[i]['nickname'],'num': maleThreeTeam[i]['num'],
  'age' : maleThreeTeam[i]['age'], 'preferenceAge' : maleThreeTeam[i]['preferenceAge'],'day':maleThreeTeam[i]['day'],
  'area': maleThreeTeam[i]['area'], 'time': maleThreeTeam[i]['updatedAt'] }
}
/*
for(let i=0; i<femaleThreeTeam.length;i++)
{
  data2[i] ={'userID' : femaleThreeTeam[i]['userId'],'name': femaleThreeTeam[i]['nickname'],'num': femaleThreeTeam[i]['num'],'age' : femaleThreeTeam[i]['age'], 'preferenceAge' : femaleThreeTeam[i]['preferenceAge'],'day':femaleThreeTeam[i]['day']}
}
*/

console.log("남자",data1);
//console.log("여자",data2);
  return (
    <div>
      <div style={{
        marginBottom :'30px'

      }}> 관리자페이지</div>

   
      <StyledDiv top="20%" width="95%" height="65%" left="50%">
        <TableContainer>
          <BoxContainer style={{width:"50%"}}><Table columns={columns1} data={data1} ></Table></BoxContainer>
          <BoxContainer style={{width:"50%"}}><Table columns={columns1} data={data1} ></Table></BoxContainer>
        </TableContainer>
      </StyledDiv>
    </div>

  );
};
export default TestPage;
