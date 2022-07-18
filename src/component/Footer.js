import styled from 'styled-components'
import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Line } from 'rc-progress';
const Container= styled.footer`
position:fixed;
bottom: 0%;
left:0;
right:0;
height:15%;

`
const Percentage= styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 70%;
height:50%;
margin-left: 10%;
margin-right:10%;
`
const PercentageText= styled.div`
font-weight: bold;
`
const BackAndFront= styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height:50%;
width:100%;
`
const BackButton= styled.div`



`
const FrontButton= styled.div`

background-color: #C4D7E0;

`
const StyledBackLink= styled(Link)`
color:black;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;

`
const StyledFrontLink= styled(Link)`
color:black;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
background-color: #C4D7E0;
`

const Footer=()=>{
const [nextPath, setNextPath]= useState("/");
const [prevPath,setPrevPath]= useState("/")
const location = useLocation().pathname;
const [percent, setPercent]= useState(10);
const MovingPath=()=>{

if( location==="/Meeting2"){
  setNextPath("/Meeting3")
  setPrevPath("/")
  setPercent(20)
}
else if(location==="/Meeting3"){
  setNextPath("/Meeting4")
  setPrevPath("/Meeting2")
  setPercent(35)
}
else if(location ==="/Meeting4"){
  setPrevPath("/Meeting3")
  setPercent(45)
}
}


  return(

    <Container>
     <MovingPath/>
<Percentage>
<Line style={{ height: '10px', width:"50%" }} percent={percent} strokeWidth={4} strokeColor="#C4D7E0" />
  <PercentageText>{percent}%</PercentageText>
</Percentage>
<BackAndFront>
  
  <StyledBackLink to={prevPath}style={{ textDecoration: 'none' }}> <BackButton> 뒤로가기</BackButton></StyledBackLink>
  
 <StyledFrontLink to={nextPath}style={{ textDecoration: 'none' }}> <FrontButton>다음으로 </FrontButton> </StyledFrontLink>
 
  
</BackAndFront>
    </Container>
  )
}

export default Footer;