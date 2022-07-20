import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
const buttonColor= "#C4D7E0";
const BoxButton= styled.button`
display:flex;
flex-direction: column;
position: absolute;

top:50%;
width:50%;
height:30%;
justify-content: center;
align-items: center;
background-color: ${(props)=>props.background_color || "transparent"}!important;
color: ${(props)=>props.color } !important;
border: 0;


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
      <Title title={"강남"}></Title>
    <Sub sub={"서초.방배.사당"}></Sub>
    </BoxButton>
  )
  }
const AreaSeoulSouth= ()=>{
  return(
  <Box area={"강남"}>
   
  </Box>
  )
}

export default AreaSeoulSouth;