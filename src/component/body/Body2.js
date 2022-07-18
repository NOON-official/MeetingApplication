import styled from "styled-components"
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from "react-redux";

const buttonColor= "#C4D7E0";
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
color:"black";
justify-content: center;
align-items: center;
white-space: pre-wrap;
`
const ContentsAge= styled.div`
display: flex;
flex-direction: column;
color: "black";
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
const SelectButton= styled.button`
margin-right: 3px;

border-radius: 34px;
height:40px;
width:70px;
background-color: ${(props)=>props.background_color || "transparent"};
color: ${(props)=>props.color };
border-color: #80808029;

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

  const ColorMale= gender? buttonColor: "transparent"
  const colorM =gender? "white":"black"
  const ColorFemale= gender? "transparent":buttonColor
  const colorF= gender?"black":"white"
  
  return(
  <Contents>
        우리는 
          <SelectButton variant="extended" size="small" background_color={ColorMale}  color={colorM} aria-label="add" onClick={()=>setmale()}>남자</SelectButton>
          <SelectButton variant="extended" size="small" background_color= {ColorFemale}  color={colorF}aria-label="add" onClick={()=>setfemale()}>여자</SelectButton>
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
        <SelectButton variant="extended" size="small" background_color={number===2?buttonColor:"white" } color={number===2?"white":"black"}aria-label="add" onClick={()=>setnumber(2)}>2 명</SelectButton>
        <SelectButton variant="extended" size="small" background_color={number===3?buttonColor:"white" } color={number===3?"white":"black"}aria-label="add" onClick={()=>setnumber(3)}>3 명</SelectButton>
        <SelectButton variant="extended" size="small" background_color={number===4?buttonColor:"white" } color={number===4?"white":"black"}aria-label="add" onClick={()=>setnumber(4)}>4 명</SelectButton>
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
   <Slider style={{ color:buttonColor }}  valueLabelDisplay="off" min={20} step={1} max={35} defaultValue={30} aria-label="Default"  value={age} onChange={handleChange}/>
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
<Contents >
  우리는
        <SelectButton variant="extended" size="small" background_color={univ?buttonColor:"white" } color={univ?"white":"black"} aria-label="add" onClick={()=>onUnivChange()}>대학생</SelectButton>
        <SelectButton variant="extended" size="small" background_color={busi?buttonColor:"white" } color={busi?"white":"black"} aria-label="add" onClick={()=>onBusinessChange()}>직장인</SelectButton>
        <SelectButton variant="extended" size="small" background_color={upper?buttonColor:"white" } color={upper?"white":"black"}aria-label="add"onClick={()=>onMiChinNoom()}>대학원생</SelectButton>
        <SelectButton variant="extended" size="small"background_color={back?buttonColor:"white" } color={back?"white":"black"} aria-label="add" onClick={()=>onBackSooChange()}>취준생</SelectButton>
         
       
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