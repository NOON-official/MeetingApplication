import styled from "styled-components"
import * as React from 'react';
import { useState } from "react";
import { Fab } from "@mui/material";
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from "react-redux";

const Container= styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
position: absolute;
height:80%;
width: 100%;

`
const Title=styled.div`
font-size:20px;
font-weight:bold;
`
const Contents= styled.div`
display: flex;
flex-direction: row;
color:#800080;
`
const ContentsAge= styled.div`
display: flex;
flex-direction: column;
color: #800080;
`
const TextColor=styled.text`
color:#800080;
`
const Bottom= styled.div`
display:flex;
flex-direction: row;
justify-content: center;
width: 30%;
height:15%;
    position: absolute;  
    bottom: 0;
    left: 0;
    margin-left: 35%;
`

const GenderSelect=()=>{
 const dispatch =useDispatch()
  const gender= useSelector(state=>state.gender)
  const setmale=()=>{
    dispatch({type:"SET_MALE"})
  }
  const setfemale=()=>{
    dispatch({type:"SET_FEMALE"})
  }
   // 남자: true, 여자 : false

  const ColorMale= gender? "secondary": "transparent"
  const ColorFemale= gender? "transparent":"secondary"
  
  return(
  <Contents>
        우리는 
          <Fab variant="extended" size="small" color={ColorMale} aria-label="add" onClick={()=>setmale()}>남자</Fab>
          <Fab variant="extended" size="small" color= {ColorFemale} aria-label="add" onClick={()=>setfemale()}>여자</Fab>
          에요
      </Contents>
    
  )
}
const NumberSelect=()=>{
  const dispatch =useDispatch()
    const number= useSelector(state=>state.number)
  function setnumber(value){
  dispatch({type:"NUMBER", payload: value})
}
  return(<Contents>
        우리는  
        <Fab variant="extended" size="small" color={number===2?"secondary":"white" }aria-label="add" onClick={()=>setnumber(2)}>2 명</Fab>
        <Fab variant="extended" size="small" color={number===3?"secondary":"white" } aria-label="add" onClick={()=>setnumber(3)}>3 명</Fab>
        <Fab variant="extended" size="small" color={number===4?"secondary":"white" } aria-label="add" onClick={()=>setnumber(4)}>4 명</Fab>
        이에요
      </Contents>
  )
}
const AgeSelect=()=>{

  const dispatch =useDispatch()
    const age= useSelector(state=>state.age)
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      dispatch({type: "AGE", payload:newValue});
    }
  };
  return(
   <ContentsAge>우리의 평균 나이는 {age}살 이에요 
   <Slider color="secondary"valueLabelDisplay="off" min={20} step={1} max={35} defaultValue={30} aria-label="Default"  value={age} onChange={handleChange}/>
   </ContentsAge>
    
  )
}
const JobSelect=()=>{
  const dispatch =useDispatch()
    const univ= useSelector(state=>state.univ)
    const busi= useSelector(state=>state.busi)
    const upper= useSelector(state=>state.upper)
    const back= useSelector(state=>state.back)
 
  function onUnivChange(e){
    dispatch({type: "JOBS_UNIV", payload:!univ});
   
    
  }
  function onBusinessChange(e){
    dispatch({type: "JOBS_BUSI", payload:!busi});
  }
  function onBackSooChange(e){
    dispatch({type: "JOBS_BACK", payload:!back});
  }
  function onMiChinNoom(e){
   dispatch({type: "JOBS_UPPER", payload:!upper});
  }

  return(
<Contents>
  우리는 
  <Fab variant="extended" size="small" color={univ?"secondary":"white" } aria-label="add" onClick={()=>onUnivChange()}>대학생</Fab>
        <Fab variant="extended" size="small" color={busi?"secondary":"white" } aria-label="add" onClick={()=>onBusinessChange()}>직장인</Fab>
        <Fab variant="extended" size="small" color={upper?"secondary":"white" }aria-label="add"onClick={()=>onMiChinNoom()}>대학원생</Fab>
        <Fab variant="extended" size="small" color={back?"secondary":"white" } aria-label="add" onClick={()=>onBackSooChange()}>취준생</Fab>
         이에요
        </Contents>
     
  )
}
const Body2=( )=>{
  return(

  <Container >
      <Title>우리팀을 소개해 주세요</Title>
      <GenderSelect />
      <NumberSelect/>
      <AgeSelect/>
      <JobSelect/>
     
      
</Container>
      
  
)
  }
export default Body2;