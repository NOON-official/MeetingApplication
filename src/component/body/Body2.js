import styled from "styled-components"
import * as React from 'react';
import { useState } from "react";
import { Fab } from "@mui/material";
import Slider from '@mui/material/Slider';
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
  

  const [Gender, setGender]= useState(true); // 남자: true, 여자 : false
function onFemaleChange(e){
    setGender(false)
  }
  function onMaleChange(e){
    setGender(true)
  }
  const ColorMale= Gender? "secondary": "white"
  const ColorFemale= Gender? "white":"secondary"
  
  return(
  <Contents>
        우리는 
          <Fab variant="extended" size="small" color={ColorMale} aria-label="add" onClick={()=>onMaleChange()}>남자</Fab>
          <Fab variant="extended" size="small" color= {ColorFemale} aria-label="add" onClick={()=>onFemaleChange()}>여자</Fab>
          에요
      </Contents>
    
  )
}
const NumberSelect=()=>{
  const [Number, setNumber]= useState("2명"); 
  function onTwoChange(e){
    setNumber("2명")
  }
  function onThreeChange(e){
    setNumber("3명")
  }
  function onFourChange(e){
    setNumber("4명")
  }
  return(<Contents>
        우리는  
        <Fab variant="extended" size="small" color={Number=="2명"?"secondary":"white" }aria-label="add" onClick={()=>onTwoChange()}>2 명</Fab>
        <Fab variant="extended" size="small" color={Number=="3명"?"secondary":"white" } aria-label="add" onClick={()=>onThreeChange()}>3 명</Fab>
        <Fab variant="extended" size="small" color={Number=="4명"?"secondary":"white" } aria-label="add" onClick={()=>onFourChange()}>4 명</Fab>
        이에요
      </Contents>
  )
}
const AgeSelect=()=>{

  const [age, setAge] = React.useState(30);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setAge(newValue);
    }
  };
  return(
   <ContentsAge>우리의 평균 나이는 {age}살 이에요 
   <Slider color="secondary"valueLabelDisplay="off" min={20} step={1} max={35} defaultValue={30} aria-label="Default"  value={age} onChange={handleChange}/>
   </ContentsAge>
    
  )
}
const JobSelect=()=>{
  const [Job, setJob]= useState([{"대학생":false},{"취준생":false},{"대학원생":false},{"직장인":false}]); 
  const [isUniv, setIsUniv]= useState(false)
  const [isBusiness, setIsBusiness]= useState(false)
  const [isBackSoo, setIsBackSoo]= useState(false)
  const [isMiChin, setIsMiChin]= useState(false)
  function onUnivChange(e){
    setIsUniv(!isUniv)
    
  }
  function onBusinessChange(e){
    setIsBusiness(!isBusiness)
  }
  function onBackSooChange(e){
    setIsBackSoo(!isBackSoo)
  }
  function onMiChinNoom(e){
    setIsMiChin(!isMiChin)
  }

  return(
<Contents>
  우리는 
  <Fab variant="extended" size="small" color={isUniv?"secondary":"white" } aria-label="add" onClick={()=>onUnivChange()}>대학생</Fab>
        <Fab variant="extended" size="small" color={isBusiness?"secondary":"white" } aria-label="add" onClick={()=>onBusinessChange()}>직장인</Fab>
        <Fab variant="extended" size="small" color={isMiChin?"secondary":"white" }aria-label="add"onClick={()=>onMiChinNoom()}>대학원생</Fab>
        <Fab variant="extended" size="small" color={isBackSoo?"secondary":"white" } aria-label="add" onClick={()=>onBackSooChange()}>취준생</Fab>
         이에요
        </Contents>
     
  )
}
const Body2=()=>{
  return(

  <Container>
      <Title>우리팀을 소개해 주세요</Title>
      <GenderSelect/>
      <NumberSelect/>
      <AgeSelect/>
      <JobSelect/>
     
      
</Container>
      

)
}

export default Body2