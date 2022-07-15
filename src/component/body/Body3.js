import styled from "styled-components"
import * as React from 'react';

import { Fab } from "@mui/material";
import UnivBox from "../Universities/UnivBox";
import { Link } from 'react-router-dom';
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
    top: 623px;
    color: #000;
   
  
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    position: absolute;
    text-align: center;
    width: 350px;
    font-size: 18px;
    font-weight: 500;
    height: 27px;
    left: calc(50% - 175px);
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const UnivName= styled.div`
    top: 80px;
    color: #000;
   
  
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    position: absolute;
    text-align: center;
    width: 350px;
    font-size: 18px;
    font-weight: 500;
    height: 27px;
    left: calc(50% - 175px);
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const Univ= styled.div`
height:200px;
    position: absolute;
    top: 690px;
    width: 100%;
`

const Body3=()=>{
  return(

  <Container>
      <Title>조금 더 구체적으로 알려주세요!</Title>
      <UnivName>우리는 이런 학교를 다녀요</UnivName>
       <UnivBox></UnivBox>
      
      
      
      <Contents>
        우리는 이런 학과에요
      </Contents>
       <Univ>
        <Fab>문과</Fab><Fab>이과</Fab><Fab>예술</Fab>
      </Univ>
      
</Container>
)
}

export default Body3