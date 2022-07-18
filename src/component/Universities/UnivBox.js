import styled from "styled-components";
import Stack from '@mui/material/Stack';
import { Fab, Button } from "@mui/material";
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
background-color:transparent !important;
color:#787878 !important;

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
          <Univ variant="extended" size="small">경기대</Univ>
         <Univ variant="extended" size="small">경인교대</Univ>
          <Univ variant="extended" size="small">경찰대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={1}>
          <Univ variant="extended" size="small">경희대</Univ>
         <Univ variant="extended" size="small">고려대</Univ>
          <Univ variant="extended" size="small">공군사관학교</Univ>
        </ThreeUnivs>
      
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">광운대</Univ>
         <Univ variant="extended" size="small">국민대</Univ>
          <Univ variant="extended" size="small">단국대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={1}>
          <Univ variant="extended" size="small">덕성여대</Univ>
         <Univ variant="extended" size="small">동국대</Univ>
          <Univ variant="extended" size="small">동덕여대</Univ>
        </ThreeUnivs>
         
        <UnivHeader>ㅁ-ㅅ</UnivHeader>
        <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">명지대</Univ>
         <Univ variant="extended" size="small">백석여대</Univ>
          <Univ variant="extended" size="small">삼육대</Univ>
        </ThreeUnivs>
        <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">상명대</Univ>
         <Univ variant="extended" size="small">서강대</Univ>
          <Univ variant="extended" size="small">서경대</Univ>
        </ThreeUnivs>
        <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">서울과학기술대</Univ>
         <Univ variant="extended" size="small">서울교대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={1}>
          <Univ variant="extended" size="small">서울대</Univ>
         <Univ variant="extended" size="small">서울여대</Univ>
          <Univ variant="extended" size="small">서울예대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={1}>
          <Univ variant="extended" size="small">성균관대</Univ>
         <Univ variant="extended" size="small">성신여대</Univ>
          <Univ variant="extended" size="small">세종대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">숙명여대</Univ>
         <Univ variant="extended" size="small">숭실대</Univ>
          <Univ variant="extended" size="small">시립대</Univ>
        </ThreeUnivs>
      <UnivHeader>ㅇ-ㅎ</UnivHeader>
        <ThreeUnivs direction="row" spacing={0.5}>
          <Univ variant="extended" size="small">아주대</Univ>
         <Univ variant="extended" size="small">연세대</Univ>
          <Univ variant="extended" size="small">육군사관학교</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">이화여대</Univ>
         <Univ variant="extended" size="small">인천대</Univ>
          <Univ variant="extended" size="small">인하대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={1}>
          <Univ variant="extended" size="small">중앙대</Univ>
         <Univ variant="extended" size="small">포항공대</Univ>
          <Univ variant="extended" size="small">한국외대</Univ>
        </ThreeUnivs>
         <ThreeUnivs direction="row" spacing={2}>
          <Univ variant="extended" size="small">한국체대</Univ>
         <Univ variant="extended" size="small">한성대</Univ>
          <Univ variant="extended" size="small">한양대</Univ>
        </ThreeUnivs>
    </Container>

  )
}

export default UnivBox;