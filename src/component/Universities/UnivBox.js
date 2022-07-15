import styled from "styled-components";
import Stack from '@mui/material/Stack';
import { Fab } from "@mui/material";
const Container= styled.div`
    display:flex;
    flex-direction: column;
    border: 2px solid #c9c9c9;
    border-radius: 12px;
    box-sizing: border-box;
    height: 428px;
    left: 50%;
    margin: 0 0 0 -150.5px;
    position: absolute;
    top: 131px;
    width: 301px;
    overflow: scroll;
    overflow-x:hidden;
`
const UnivHeader= styled(Stack)`
border: solid #e5e5e5;
    border-width: 0 0 0.5px;
    color: #000;
    margin:10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
     left: 0;
    letter-spacing: -.015em;
    line-height: 180%;
  
    text-align: left;
    width: 281px;
    
`
const ThreeUnivs= styled(Stack)`
    width: 80%;
    margin-left: 25px;
    margin-bottom: 20px;;
`
const Univ= styled(Fab)`
background-color: "#C4D7E0";
`

const UnivBox=()=>{

  return(
    <Container>
      <UnivHeader spacing={2}>ㄱ-ㄹ
      </UnivHeader>
      <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
        <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
      <UnivHeader>ㅁ-ㅅ</UnivHeader>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
      <UnivHeader>ㅇ-ㅎ</UnivHeader>
        <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">가천대</Univ>
         <Univ variant="extended" size="small">카톨릭대</Univ>
          <Univ variant="extended" size="small">건국대</Univ>
        </ThreeUnivs>

    </Container>

  )
}

export default UnivBox;