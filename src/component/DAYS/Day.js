import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const buttonColor= "#C4D7E0";
const DayButton= styled.input`
border-radius: 100%;
background-color: ${(props)=>props.background_color || "transparent"}!important;
color: ${(props)=>props.color } !important;
border: 0.3px solid #c9c9c9 ;
width:20%;
font-weight: bold;
`
const Day =(props)=>{
const [bgcolor, setBGColor]= useState("transparent")
 const [fontColor, setFontColor]= useState("black")
  const dispatch =useDispatch()
  const day= useSelector(state=>state.day);
  var isSame=false
  function OnDayClick(value){
    day.map(univ=>univ===value?isSame=true: isSame) 
    if(isSame)
    {dispatch({type:"DAY_DELETE", payload: value})
    setBGColor("transparent")  
    setFontColor("black")
  }
    else
    {dispatch({type: "DAY", payload:value})
    setBGColor(buttonColor)
  
}
  }
  return(
  <DayButton color={fontColor} background_color={bgcolor} type="button" value={props.day} onClick={()=>OnDayClick(props.day)}></DayButton>
  )
}

export default Day;