import styled from "styled-components";
import charimg from "../../image/enfp.jpg"
const Container= styled.div`
display:flex;
flex-direction: column;
height:100%;
width:100%;
`
const Character= styled.img`
width:90%;
height:35%;
margin:5%;

`
const Name= styled.div`
height:5%;
width:100%;
justify-content: center;
align-items: center;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
`
const CharacterText= styled.div`
width:90%;
height:55%;
margin:5%;
color: #000;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    text-align: start;
`
const Comedian=()=>{
return(
<Container>
  <Character width="100" height="200" src={charimg}/>
 <Name>개그맨</Name>
  <CharacterText>
    남다른 입담을 자랑하여 상대의 마음을 흔들어요.
    하지만 주의하세요. 당신의 개그본능은 미팅을 성공적으로 이끌지만 상대방에게 가벼운 이미지를 남길 수 있어요.
  </CharacterText>
</Container>

)

}
export default Comedian;