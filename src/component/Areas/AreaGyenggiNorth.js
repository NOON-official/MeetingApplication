import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
const buttonColor= "#C4D7E0";
const BoxButton= styled.button`
display:flex;
flex-direction: column;
position: absolute;
left:50%;
top:20%;
width:50%;
height:30%;
justify-content: center;
align-items: center;
background-color: ${(props)=>props.background_color || "transparent"}!important;
color: ${(props)=>props.color } !important;
border: 0;
border-left: 0.5px solid #c9c9c9;
border-bottom: 0.5px solid #c9c9c9;
`
const TextTitle= styled.div`
font-weight: bold;
font-size: 23px;
`
const TextSub= styled.div`
font-weight: bold;
font-size: 18px;
margin-top: 10px;
color:#c9c9c9;
`
const Title = (props) =>{
  return(
    <TextTitle>{props.title}</TextTitle>
  )
}
const Sub = (props) =>{
  return(
    <TextSub>{props.sub}</TextSub>
  )
}
const Box= (props)=>{
const [bgcolor, setBGColor]= useState("transparent")
 const [fontColor, setFontColor]= useState("black")
  const dispatch =useDispatch()
  const area= useSelector(state=>state.area);
  var isSame=false
  function OnAreaClick(value){
    area.map(univ=>univ===value?isSame=true: isSame) 
    if(isSame)
    {dispatch({type:"AREA_DELETE", payload: value})
    setBGColor("transparent")  
    setFontColor("black")
  }
    else
    {dispatch({type: "AREA", payload:value})
    setBGColor(buttonColor)
  
}
  }
  return(
    <BoxButton color={fontColor} background_color={bgcolor} onClick={()=>OnAreaClick(props.area)}>
      <Title title={"경기 북부"}></Title>
    <Sub sub={"가평"}></Sub>
    </BoxButton>
  )
  }
const AreaGyenggiNorth= ()=>{
   
  return(
  <Box area={"경기북부"}>
    
  </Box>
  )
}

export default AreaGyenggiNorth;