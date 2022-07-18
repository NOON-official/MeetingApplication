import styled from "styled-components"
import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import CharactorContainer from "../Characters/CharactorContainer";
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

const Character= styled.button`
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
  const dispatch =useDispatch()
  const comedian= useSelector(state=>state.comedian)
  const face= useSelector(state=> state.face)
  const moderator= useSelector(state=> state.moderator)
  const nerd=useSelector(state=>state.nerd)
  const chooseComedian=()=>{
    dispatch({type:"CHAR_COMED", payload:!comedian})
  }
    const chooseFace=()=>{
    dispatch({type:"CHAR_FACE", payload:!face})
  }
    const chooseModerator=()=>{
    dispatch({type:"CHAR_MODERA", payload:!moderator})
  }
    const chooseNerd=()=>{
    dispatch({type:"CHAR_NERD", payload:!nerd})
  }
  return(

  <Container>
      <Title>우리 팀원을 소개해요</Title>
      <CharactorContainer></CharactorContainer>
      
      <Contents>우리팀은 <br/>
        <Character background_color={comedian?buttonColor:"transparent"}  color={comedian?"white":"black"}onClick={()=>chooseComedian()}>개그맨</Character>
        <Character background_color={face?buttonColor:"transparent"}  color={face?"white":"black"}onClick={()=>chooseFace()} >비주얼</Character>
        <Character background_color={moderator?buttonColor:"transparent"}  color={moderator?"white":"black"} onClick={()=>chooseModerator()}>사회자</Character>
        <Character background_color={nerd?buttonColor:"transparent"}  color={nerd?"white":"black"} onClick={()=>chooseNerd()}>깍두기</Character><br/>
        로 구성되어 있어요 
        
   </Contents>
    
</Container>
)
}

export default Body4