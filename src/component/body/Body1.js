import styled from "styled-components"
import * as React from 'react';
import backimg from '../../image/BG3.gif'
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';



const Container= styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
position: absolute;
height:70%;
width: 100%;

`
const BackGround= styled.img`
position:absolute;
z-index: -1;
size:100%;
`
const Title=styled.div`
font-size:50px;
font-weight:bold;
`
const Contents= styled.div`
font-size: 25px;
white-space: pre-wrap;
font-weight:bold;

`
const Bottom= styled.div`
`
const Body1=()=>{
  return(

  <Container>
    
      <Title></Title>
      <Contents>
        그 시절,<br/> 우리가 설레였던 미팅
      </Contents>
      
      <Link to="/Meeting2" style={{ textDecoration: 'none' }}>
      <Fab variant="extended" size="small" >인연을 찾으러 가기</Fab>
      </Link>
      
</Container>
)
}

export default Body1