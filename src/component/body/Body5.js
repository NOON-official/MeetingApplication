import AreaContainer from "../Areas/AreaContainer";
import styled from "styled-components";
import DaysContainer from "../DAYS/DaysContainer";
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
const TitleArea=styled.div`
    top: 2%;
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
const TitleDay=styled.div`
    top: 65%;
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
const Body5 =()=>{
  return(
<Container>
      <TitleArea>미팅 가능한 지역을 알려주세요</TitleArea>
      
      <AreaContainer>
      </AreaContainer>
      <TitleDay>선호하는 요일을 알려주세요</TitleDay>
      <DaysContainer>
      </DaysContainer>
    
</Container>
  )
}
export default Body5;