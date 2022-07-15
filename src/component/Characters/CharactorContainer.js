import styled from "styled-components";
import Stack from '@mui/material/Stack';
import { Fab } from "@mui/material";
import Comedian from "./Comedian";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
const Container= styled.div`
    display:flex;
    flex-direction: column;
    border: 2px solid #c9c9c9;
    border-radius: 12px;
    box-sizing: border-box;
    height: 300px;
    left: 50%;
    margin: 0 0 0 -150.5px;
    position: absolute;
    top: 90px;
    width: 301px;
    overflow: scroll;
    overflow-x:hidden;
`
const LeftButton= styled.button`
 position:absolute;
 top: 135px;
 width: 30px;
 height:30px;
 left:5px;
 background-color: white;
 border-color: white;
 border-radius: 50%;

`
const RightButton= styled.button` 
     position: absolute;
    top: 135px;
    left: 260px;
    width: 30px;
    height: 30px;
     background-color: white;
 border-color: white;
 border-radius: 50%;
`
const CharactorContainer=()=>{

  return(
    <Container>
      <LeftButton><ArrowBackIosNewSharpIcon/></LeftButton>
      <RightButton> <ArrowForwardIosSharpIcon/></RightButton>
      <Comedian></Comedian>
    </Container>
  )
}

export default CharactorContainer