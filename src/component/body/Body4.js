import styled from "styled-components"
import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import CharactorContainer from "../Characters/CharactorContainer";
import { useState } from "react";
const buttonColor= "#C4D7E0";
const Container= styled.div`
    left: 0;
    overflow: scroll;
    overflow-x:hidden;
    position: absolute;
    top: 10%;
    width: 100%;
    height: 75%;
    padding: 0;
        display: block;
`
const Title=styled.div`
 top: 30px;
    font-size: 18px;
    font-weight: bold;
    height: 27px;
    left: calc(50% - 175px);
    margin: 0;
    color: #000;
    
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    position: absolute;
    text-align: center;
    width: 350px;
`
const Contents= styled.div`
    top: 80%;
    font-size: 18px;
    font-weight: 400;
    height: 20px;
    left: calc(50% - 175px);
    margin: 0;
    color: #000;
    white-space: pre-wrap;
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    position: absolute;
    text-align: center;
    width: 350px;
`

const CharacterButton= styled.button`
margin:5px;
border-radius: 34px;
height:40px;
width:70px;
border-color: transparent;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
background-color: ${(props)=>props.background_color || "transparent"};
color: ${(props)=>props.color||"black" };
`


const Body4=()=>{
 const Character = (props) => {
 const [bgcolor, setBGColor]= useState("transparent")
 const [fontColor, setFontColor]= useState("black")
  const dispatch =useDispatch()
  const characters= useSelector(state=>state.characters);
  var isSame=false
  function OnCharacterClick(value){
    characters.map(univ=>univ===value?isSame=true: isSame) 
    if(isSame)
    {dispatch({type:"CHARACTERS_DELETE", payload: value})
    setBGColor("transparent")  
    setFontColor("black")
  }
    else
    {dispatch({type: "CHARACTERS", payload:value})
    setBGColor(buttonColor)
    setFontColor("white")
}
  }
return (<CharacterButton color={fontColor}background_color={bgcolor} onClick={()=>OnCharacterClick(props.characters)}>{props.characters}</CharacterButton>)
}
  return(

  <Container>
      <Title>우리 팀원을 소개해요</Title>
      <CharactorContainer></CharactorContainer>
      
      <Contents>우리팀은 <br/>
        <Character characters={"개그맨"}>개그맨</Character>
        <Character characters={"비주얼"}>비주얼</Character>
        <Character characters={"사회자"}>사회자</Character>
        <Character characters={"깍두기"}>깍두기</Character><br/>
        로 구성되어 있어요 
        
   </Contents>
    
</Container>
)
}

export default Body4