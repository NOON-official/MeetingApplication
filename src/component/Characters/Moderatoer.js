import styled from "styled-components";
import charimg from "../../image/entj.png"
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
    font-size:13px;
`
const Warning= styled.div`
color: red;
`
const Moderatoer=()=>{
return(
<Container>
  <Character width="100" height="200" src={charimg}/>
 <Name>사회자</Name>
  <CharacterText>
    어색한 분위기를 풀어주는 미팅의 진행자에요.
            당신은 모르는 사람들과의 대화를 이끌어 나가고 상대방의 마음을 녹여줘요.
            적절한 발언권을 부여하여 미팅을 주도할 수 있어요.
  </CharacterText>
</Container>

)

}
export default Moderatoer;