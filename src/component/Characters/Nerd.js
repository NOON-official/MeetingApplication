import styled from "styled-components";
import charimg from "../../image/infp.jpg"
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
const Nerd=()=>{
return(
<Container>
  <Character width="100" height="200" src={charimg}/>
 <Name>깍두기</Name>
  <CharacterText>
    당신은 너드미를 소유하고 있어요.
            당신은 말주변이 없고 처음본 상대에게 어색함을 느끼며 출중한 외모를 가지지 않았어요.
            하지만 이러한 당신의 순수한 모습이 상대에게 매력적으로 다가올 수 있어요.
            <Warning>주의! 너무 많은 깍두기는 매칭률을 낮춰요!</Warning>
  </CharacterText>
</Container>

)

}
export default Nerd;